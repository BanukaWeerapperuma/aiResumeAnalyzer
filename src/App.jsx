import { useEffect  , useState } from "react";
import constants , {
  buildPresenceChecklist , 
  METRIC_CONFIG , 
  inferRolesFromKeywords,
  getRelatedRoles,
} from "../constants.js";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function App() {

  const [ aiReady , setAiReady ] = useState (false);
  const [ isLoading , setIsLoading ] = useState (false);
  const [ upLoadFile , setUpLoadFile ] = useState (null);
  const [ analysis , setAnalysis ] = useState (null);
  const [ resumeText , setResumeText ] = useState ("");
  const [ presenceChecklist , setPresenceChecklist ] = useState ([]);

  useEffect (() => {
      const interval = setInterval (() => {
          if (window.puter?.ai?.chat){
            setAiReady(true);
            clearInterval(interval);
          }
      }, 300);
      return () => clearInterval(interval);
  }, [] );

  const extractPDFText = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument ({ data:
      arrayBuffer}).promise;

      const texts = await Promise.all (
        Array.from ({length:pdf.numPages} , (_ , i ) => 
          pdf.getPage (i + 1 ).then (
            (page) =>
              page
            .getTextContent()
            .then((tc) => tc.items.map((i) => i.str).join(" "))
          ))
      );
      return texts.join("\n").trim();
  };

  const parseJSONResponse = (reply) => {
    try {
      const match = reply.match(/\{[\s\S]*\}/);
      const parsed = match ? JSON.parse(match[0]) : {};
      if (!parsed.overallScore && !parsed.error){
          throw new Error("Invaild AI response");
      }
      return parsed;
    }catch(err){
      throw new Error(`Failed to parse AI Response : ${err.message}`);
    }
  }

  const analyzeResume = async (text) => {
    const prompt = constants.ANALYZE_RESUME_PROMPT.replace(
      "{{DOCUMENT_TEXT}}",
      text
    );

    const response = await window.puter.ai.chat([
      {role : "system" , content: "You are an expert resume reviewer..."},
      {role : "user" , content: prompt },
    ],
      {
        model: "gpt-4o",
      }
    );

    const result = parseJSONResponse(
      typeof response === "string" ? 
        response : response.message?.content || ""
    );
    if (result.error) throw new Error(result.error);
    return result;
  };

  

  const handleFileUpload = async (e) =>{
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf"){
      return alert("Please Upload a PDF file Only.");
    }
    setUpLoadFile(file);
    setIsLoading(true);
    setAnalysis(null);
    setResumeText("");
    setPresenceChecklist([]);

    try {
      const text = await extractPDFText(file);
      setResumeText(text);
      setPresenceChecklist(buildPresenceChecklist(text));

      const aiResult = await analyzeResume(text);
      setAnalysis(aiResult);

      // attempt to enrich analysis by visiting linked profiles (GitHub / LinkedIn)
      const enriched = await enrichAnalysisFromProfiles(aiResult, text);
      setAnalysis(enriched);

    } catch (err) {
      alert(`Error:${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  const reset = () => {
    setUpLoadFile(null);
    setAnalysis(null);
    setResumeText("");
    setPresenceChecklist([]);
  }

  

  const extractLinksFromText = (text = "") => {
    const urls = [];
    const urlRegex = /(https?:\/\/[^\s)]+)|(www\.[^\s)]+)/gi;
    const matches = text.match(urlRegex) || [];
    matches.forEach((m) => {
      let url = m;
      if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
      // normalize linkedin / github short forms
      if (/linkedin\.com\//i.test(url) || /github\.com\//i.test(url)) urls.push(url.split(/[)\s]/)[0]);
    });
    // also try to pick up plaintext github/username or linkedin/in/slug
    const ghMatch = text.match(/github\.com\/[A-Za-z0-9-_]+/gi) || [];
    ghMatch.forEach((m) => urls.push(`https://${m}`));
    const liMatch = text.match(/linkedin\.com\/[A-Za-z0-9-_/]+/gi) || [];
    liMatch.forEach((m) => urls.push(`https://${m}`));
    return Array.from(new Set(urls));
  };

  const fetchProfileData = async (url) => {
    try {
      const res = await fetch(url, { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      // Generic text extraction
      const pageText = doc.body ? doc.body.innerText : text;

      // GitHub parsing
      if (/github\.com/i.test(url)) {
        const username = url.split("github.com/")[1]?.split(/[^A-Za-z0-9-_]/)[0];
        const bioEl = doc.querySelector('.p-note') || doc.querySelector('.user-profile-bio') || doc.querySelector('meta[name="description"]');
        const bio = bioEl ? (bioEl.innerText || bioEl.getAttribute?.('content') || '') : '';
        const repoEls = Array.from(doc.querySelectorAll('a[href*="/' + username + '/"]'))
          .map((a) => a.textContent.trim())
          .filter(Boolean);
        return { type: 'github', url, username, bio, repos: repoEls.slice(0, 10), text: pageText };
      }

      // LinkedIn parsing
      if (/linkedin\.com/i.test(url)) {
        const slug = url.split('linkedin.com/')[1]?.split(/[?/#]/)[0];
        const nameEl = doc.querySelector('.pv-text-details__left-panel h1') || doc.querySelector('.top-card-layout__title') || doc.querySelector('meta[property="og:title"]');
        const headlineEl = doc.querySelector('.text-body-medium') || doc.querySelector('.top-card-layout__headline') || doc.querySelector('meta[name="description"]');
        const name = nameEl ? (nameEl.innerText || nameEl.getAttribute?.('content') || '') : '';
        const headline = headlineEl ? (headlineEl.innerText || headlineEl.getAttribute?.('content') || '') : '';
        // certifications and experience via text search
        const certs = (pageText.match(/certificat|certified|certificate|coursera|udemy|aws certified|google certified/gi) || []).slice(0, 20);
        const experiences = (pageText.match(/\b\w+\s+at\s+\w+|experience|worked at|years of experience|\d+\s+years/gi) || []).slice(0, 20);
        return { type: 'linkedin', url, slug, name, headline, certifications: certs, experiences, text: pageText };
      }

      return { type: 'unknown', url, text: pageText };
    } catch (err) {
      return { type: 'error', url, error: err.message };
    }
  };

  const enrichAnalysisFromProfiles = async (analysisObj, text) => {
    const analysis = { ...(analysisObj || {}) };
    const links = extractLinksFromText(text || resumeText || '');
    if (!links.length) return analysis;

    const profileResults = await Promise.allSettled(links.map((u) => fetchProfileData(u)));
    const extractedKeywords = new Set(analysis.keywords || []);
    profileResults.forEach((r) => {
      if (r.status !== 'fulfilled') return;
      const p = r.value;
      if (!p) return;
      if (p.type === 'github') {
        if (p.bio) p.bio.split(/[^A-Za-z0-9]+/).forEach((w) => w && extractedKeywords.add(w));
        (p.repos || []).forEach((rname) => rname.split(/[^A-Za-z0-9]+/).forEach((w) => w && extractedKeywords.add(w)));
      } else if (p.type === 'linkedin') {
        if (p.headline) p.headline.split(/[^A-Za-z0-9]+/).forEach((w) => w && extractedKeywords.add(w));
        (p.certifications || []).forEach((c) => c.split(/[^A-Za-z0-9]+/).forEach((w) => w && extractedKeywords.add(w)));
        (p.experiences || []).forEach((e) => e.split(/[^A-Za-z0-9]+/).forEach((w) => w && extractedKeywords.add(w)));
      } else if (p.type === 'unknown' && p.text) {
        p.text.split(/[^A-Za-z0-9]+/).slice(0, 50).forEach((w) => w && extractedKeywords.add(w));
      }
    });

    // merge keywords back into analysis
    analysis.keywords = Array.from(extractedKeywords).slice(0, 60);

    // recompute recommended roles and related roles
    const inferred = inferRolesFromKeywords(analysis.keywords || []);
    analysis.recommendedRoles = Array.from(new Set([...(analysis.recommendedRoles || []), ...inferred]));
    // trim
    analysis.recommendedRoles = analysis.recommendedRoles.slice(0, 8);
    analysis.recommendedRelatedRoles = getRelatedRoles(analysis.recommendedRoles || []);

    return analysis;
  };

  // helper to map badge classes by provenance
  const getBadgeClassForSource = (source) => {
    if (!source) return 'text-xs text-slate-400 rounded px-1.5 py-0.5 bg-slate-800/20';
    if (String(source).toLowerCase() === 'ai')
      return 'text-xs font-semibold text-emerald-300 rounded px-1.5 py-0.5 bg-emerald-900/20';
    if (String(source).toLowerCase() === 'inferred')
      return 'text-xs font-semibold text-indigo-300 rounded px-1.5 py-0.5 bg-indigo-900/20';
    return 'text-xs font-semibold text-slate-400 rounded px-1.5 py-0.5 bg-slate-800/20';
  };

  // tuned scoring: stronger AI boost, stronger keyword matches, exact token match bonus
  const scoreAndSortRoles = (roles = [], keywords = [], aiProvided = []) => {
    const kw = (keywords || []).map((k) => String(k).toLowerCase());
    const aiSet = new Set((aiProvided || []).map((r) => String(r).toLowerCase()));

    const scored = Array.from(new Set(roles || [])).map((role) => {
      const rlow = String(role).toLowerCase();
      let score = 0;
      // stronger boost if AI recommended this role
      if (aiSet.has(rlow)) score += 5;
      // keyword/token matches: exact token matches score higher
      const tokens = rlow.split(/[^a-z0-9]+/).filter(Boolean);
      tokens.forEach((t) => {
        kw.forEach((k) => {
          if (k === t) {
            score += 4; // exact keyword <-> token
          } else if (k.includes(t) || t.includes(k)) {
            score += 2; // partial match
          }
        });
      });
      // small length bonus to slightly prefer concise role names
      score += Math.max(0, 3 - tokens.length * 0.15);
      return { role, score };
    });

    scored.sort((a, b) => b.score - a.score || a.role.localeCompare(b.role));
    return scored.map((s) => s.role);
  };

  const computeRecommendedRoles = (analysisObj) => {
    const analysis = analysisObj || {};
    const aiProvided = analysis.recommendedRoles || [];
    const base = (aiProvided.length ? aiProvided : (analysis.recommendedJobRoles || analysis.jobRoles || inferRolesFromKeywords(analysis.keywords || [])));
    const keywords = analysis.keywords || [];
    const sorted = scoreAndSortRoles(base, keywords, aiProvided).slice(0, 6);
    const inferred = inferRolesFromKeywords(keywords || []);
    return sorted.map((role) => ({
      role,
      source: aiProvided.map((r) => String(r).toLowerCase()).includes(String(role).toLowerCase())
        ? 'AI'
        : inferred.map((r) => String(r).toLowerCase()).includes(String(role).toLowerCase())
        ? 'Inferred'
        : 'Related',
    }));
  };

  const computeRelatedRoles = (analysisObj) => {
    const analysis = analysisObj || {};
    const rec = analysis.recommendedRoles && analysis.recommendedRoles.length ? analysis.recommendedRoles : (analysis.recommendedJobRoles || analysis.jobRoles || inferRolesFromKeywords(analysis.keywords || []));
    const related = analysis.recommendedRelatedRoles || analysis.relatedRoles || getRelatedRoles(rec || []);
    const sorted = scoreAndSortRoles(related, analysis.keywords || [], rec || []).slice(0, 6);
    const inferred = inferRolesFromKeywords(analysis.keywords || []);
    const aiProvidedLower = (rec || []).map((r) => String(r).toLowerCase());
    return sorted.map((role) => ({
      role,
      source: aiProvidedLower.includes(String(role).toLowerCase()) ? 'AI' : inferred.map((r) => String(r).toLowerCase()).includes(String(role).toLowerCase()) ? 'Inferred' : 'Related',
    }));
  };

  return (
    <div className="min-h-screen bg-main-gradient p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-300 bg-clip-text text-transparent mb-2">AI Resume Analyzer</h1>
          <p className="text-slate-300 text-sm sm:text-base">Upload your PDF resume and get instant AI feedback</p>
        </div>

        {!upLoadFile && (
          <div className="upload-area">
            <div className="upload-zone">
              <div className="text-4xl text-amber-50 sm:text-5xl lg:text-6xl mb-4">📃</div>

              <h3 className="text-xl sm:text-2xl text-slate-200">Upload Your Resume</h3>
              
              <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">PDF files only , Get instant analysis</p>

              <input type="file" accept=".pdf" onChange={handleFileUpload} disabled={!aiReady} className="hidden" id="file-upload" />

              <label htmlFor="file-upload" className={`inline-block btn-primary ${!aiReady ? "opacity-50 cursor-not-allowed" : ""}`}> Choose PDF File</label>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="p-6 sm:p-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="loading-spinner"></div>
              <h3 className="text-lg sm:text-xl text-slate-200 mb-2">Analyzing Your Resume</h3>
              <p className="text-slate-400 text-sm sm:text-base">Please wait while AI reviews your resume...</p>
            </div>
          </div>
        )}

        {analysis && upLoadFile && (
          <div className="space-y-6 p-4 sm:px-8 lg:px-16">
            <div className="file-info-card">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

              <div className="flex items-center gap-4">
                <div className="icon-container-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
                <span className="text-3xl">📃</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-500 mb-1">Analysis Complete</h3>
                  <p className="text-slate-300 text-sm break-all">
                    {upLoadFile.name}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={reset} className="btn-secondary">
                  🔁New Analysis
                </button>
              </div>
            </div>
            </div>

          <div className="score-card">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-2xl">🏆</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Overall Score
                  </h2>
              </div>
              <div className="relative">
                <p className="text-6xl sm:text-8xl font-extrabold text-cyan-400 drop-shadow-lg">
                  {analysis.overallScore || "7"}
                </p>
              </div>
              <div className={`inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full ${parseInt(analysis.overallScore) >= 8 
              ? "score-status-excellent"
                : parseInt(analysis.overallScore) >= 6
              ? "score-status-good"
              : "score-status-improvement"   
              }`}>
              <span className="text-lg">
                {parseInt(analysis.overallScore) >= 8 ? "✨"
                : parseInt(analysis.overallScore) >= 6 ? "⭐"
                : "📈"
                 }
              </span>

              <span className="font-semibold text-lg">
                {parseInt(analysis.overallScore) >=8
                ? "Excellent"
                :parseInt(analysis.overallScore) >=6
                ?"Good"
                :"Need Improvement"}
                </span>
              </div>
            </div>

            <div className="progress-bar">
              <div className={`h-full rounded-full transition-all duration-1000 ease-out shadow-sm ${
                parseInt(analysis.overallScore) >= 8 
                    ? "progress-excellent"
                : parseInt(analysis.overallScore) >= 6 
                    ? "progress-good"
                : "progress-improvement"
              }`}
              style={{
                width : `${(parseInt(analysis.overallScore)/10)*100}%`,
              }}></div>
            </div>

            <p className="text-slate-400 text-sm mt-3 text-center  font-medium">
              Score based on content quality , formatting , and keyword usage
            </p>
          </div>
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="feature-card-green group">
                <div className="bg-green-500/20 icon-container-lg mx-auto mb-3 group-hover:bg-gray-400/30 transition-colors">
                <span className="text-green-300">✓</span>
                </div>
                <h4 className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-3">
                  Top Strengths
                </h4>
                <div className="space-y-2 text-left">
                  {analysis.strengths.slice(0 , 3).map
                  ((strength , index ) => (
                    <div key={index} className="list-item-green">
                      <span className="text-green-400 text-sm mt-0.5">*</span>

                      <span className="text-slate-200 font-medium text-sm leading-relaxed">
                        {strength}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-card-orange group">
                <div className="bg-orange-500/20 icon-container-lg mx-auto mb-3 group-hover:bg-gray-400/30 transition-colors">
                <span className="text-orange-300">⚡</span>
                </div>
                <h4 className="text-orange-300 text-sm font-semibold uppercase tracking-wide mb-3">
                  Main Improvements
                </h4>
                <div className="space-y-2 text-left">
                  {analysis.improvements.slice(0 , 3).map
                  ((improvement , index ) => (
                    <div key={index} className="list-item-orange">
                      <span className="text-orange-400 text-sm mt-0.5">*</span>

                      <span className="text-slate-200 font-medium text-sm leading-relaxed">
                        {improvement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="section-card group">
              <div className="flex items-center gap-3 mb-4">
                    <div className="icon-container bg-purple-500/20">
                    <span className="text-purple-300 text-lg">📊</span></div>
                    <h4 className="text-xl font-bold text-white">Executive Summary</h4>
              </div>
              <div className="summary-box">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{analysis.summary}</p>
              </div>
            </div>

            <div className="section-card group">
  <div className="flex items-center gap-3 mb-6">
    <div className="icon-container bg-cyan-500/20">
      <span className="text-cyan-300 text-lg">📊</span>
    </div>
    <h4 className="text-xl font-bold text-white">
      Performance Metrics
    </h4>
  </div>

  <div className="space-y-4">
    {METRIC_CONFIG.map((cfg, i) => {
      const value =
        analysis?.performanceMetrics?.[cfg.key] ??
        cfg.defaultValue;

      return (
        <div className="group/item" key={i}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{cfg.icon}</span>
              <p className="text-slate-200 font-medium">
                {cfg.label}
              </p>
            </div>

            <span className="text-slate-300 font-bold">
              {value}/10
            </span>
          </div>

          <div className="progress-bar-small">
            <div
              className={`h-full bg-gradient-to-r ${cfg.colorClass}
              rounded-full transition-all duration-1000 ease-out
              group-hover/item:shadow-lg ${cfg.shadowClass}`}
              style={{ width: `${(value / 10) * 100}%` }}
            />
          </div>
        </div>
      );
    })}
  </div>
</div>


    <div className="section-card group">
      <div className="flex items-center gap-3 mb-6">
        <div className="icon-container bg-purple-500/20">
        <span className="text-lg text-purple-300">🔎</span>
        </div>
        <h2 className="text-xl font-bold text-purple-400">Resume Insights</h2>
      </div>

      <div className="grid gap-4">
        <div className="info-box-cyan group/item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg text-cyan-400">🎯</span>
          <h3 className="text-cyan-300 font-semibold">Action Items
                </h3>
              </div>

            <div className="space-y-2"> {(analysis.actionItems || [
              "Optimize keyword placement for better ATS scoring",
              "Enhance content with quantifiable achievements",
              "Consider industry-specific terminology",
              ]).map((item , index) => (
                <div className="list-item-cyan" key={index}>
                  <span className="text-cyan-400">•</span>
                  <span>{item}</span>
                </div>
              ))}
              </div>
            </div>
            <div className="info-box-emerald group/item">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-lg">💡</span>
              <h3 className="text-emerald-300 font-semibold">Pro Tips</h3>
            </div>
            <div className="space-y-2">
              {(
                analysis.proTips || [
                "Use action verbs to start bullect points" , 
                "Keep descriptions concise and impactful" , 
                "Tailor Keywords to specific job descriptions",
              ]
            ).map((tip , index) => (
              <div className="list-item-emerald">
                <span className="text-emerald-400">•</span>
                <span>{tip}</span>
              </div>
            ))}
            </div>
            </div>
          </div>
       </div>
           <div className="section-card group">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-container bg-violet-500/20">
              <span className="text-lg">🤖</span>
              </div>
              
              <h2 className="text-violet-400 font-bold text-xl">ATS Optimization
              </h2>
            </div>

            <div className="info-box-violet mb-4">
              <div className="flex items-start gap-3 mb-3">
                <div>
                  <h3 className="text-violet-300 font-semibold mb-2">What is ATS?</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    <strong className="text-violet-300">
                      Applicant Tracking Systems (ATS)
                    </strong>{" "}
                    are software tools used by 75%+ of employers to 
                    automatically screen resumes before human review. These systems scan for keywords , proper formatting and relevant qualifications to rank candidates.
                    If your resume isn't ATS-friendly , it may never reach a human recruiter.
                  </p>
                </div>
              </div>
            </div>

            <div className="info-box-violet">
               <div className="flex items-center gap-3 mb-3">
              
              <span className="text-lg">🤖</span>
              
              
              <h3 className="text-violet-300 font-semibold text-lg">ATS Compatibility Checklist
              </h3>
            </div>
            <div className="space-y-2">
              {(presenceChecklist || []).map((item , index) => (
                <div key={index} className="flex items-start gap-2 text-slate-200">

                  <span className={`${item.present ? 
                    "text-emerald-400" : "text-red-400"}`}>
                    {item.present ? "✅" : "❌"}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            </div>
            </div>

               <div className="section-card group">
                <div className="flex items-center gap-3 mb-6">
              <div className="icon-container bg-blue-500/20">
              <span className="text-lg">🔑</span>
              </div>
              
              <h2 className="text-blue-400 font-bold text-xl">Recommended Keywords
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">{analysis.keywords.map((k , i) => (
              <span key={i} className="keyword-tag group/item">{k}</span>

            ))}
            </div>
              <div className="info-box-blue">
                <p className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-lg mt-0.5">💡</span>
                    Consider incorporating these keywords naturally into your resume to improve ATS compatability and increase your chances of getting noticed by recruiters.
                  
                </p>
              </div>
               </div>
               <div className="section-card group">
                <div className="flex items-center gap-3 mb-6">
              <div className="icon-container bg-indigo-500/20">
              <span className="text-lg">💼</span>
              </div>
              
              <h2 className="text-indigo-400 font-bold text-xl">Recommended Job Roles
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">{computeRecommendedRoles(analysis).map((item , i) => (
              <span key={i} className="keyword-tag group/item flex items-center gap-2">
                <span>{item.role}</span>
                <span className={getBadgeClassForSource(item.source)}>{item.source}</span>
              </span>
            ))}

            </div>
              <div className="info-box-indigo">
                <p className="text-slate-300 text-sm leading-relaxed">
                  These roles match the experience and keywords detected in your resume.
                </p>
              </div>
               </div>
               <div className="section-card group">
                <div className="flex items-center gap-3 mb-6">
              <div className="icon-container bg-sky-500/20">
              <span className="text-lg">🔗</span>
              </div>
              
              <h2 className="text-sky-400 font-bold text-xl">Related Job Roles
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">{computeRelatedRoles(analysis).map((item , i) => (
              <span key={i} className="keyword-tag group/item flex items-center gap-2">
                <span>{item.role}</span>
                <span className={getBadgeClassForSource(item.source)}>{item.source}</span>
              </span>
            ))}

            </div>
              <div className="info-box-sky">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Roles related to the ones above - useful for broader job searches and transfers.
                </p>
              </div>
               </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
