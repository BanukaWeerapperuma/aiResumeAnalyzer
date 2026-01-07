import { useEffect  , useState } from "react";
import constants , {
  buildPresenceChecklist , 
  METRIC_CONFIG , 
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
      return () => clearInterval();
  }, [] );


  const extractPDFText = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument ({ data:
      arrayBuffer}).promise;

      const texts = await Promise.all (
        Array.from ({length:pdf.numPages} , (_ , i ) => 
          pdf.getPage (i + 1 )).then (
            (page) =>
              page
            .getTextContent()
            .then((tc) => tc.items.map((i) => i.str).join(" "))
          )
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
      setAnalysis(await analyzeResume(text));

    }catch (err){
      alert(`Error:${err.message}`);
    }finally{
      setAnalysis(false);
    }
  }

  

  return (
    <div className="min-h-screen bg-main-gradient p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <h1 className="text-7xl text-white">AI RESUME ANALYZER</h1>
    </div>
  );
}

export default App;
