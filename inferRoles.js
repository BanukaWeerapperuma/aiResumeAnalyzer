// inferRoles.js

export const inferRolesFromKeywords = (keywords = []) => {
  const hay = (keywords || []).join(" ").toLowerCase();
  const roles = new Set();

  const addIf = (re, role) => {
    try {
      if (re.test(hay)) roles.add(role);
    } catch (e) {}
  };

    
// =====================================
// ========== Software / IT / Tech ======
// =====================================
addIf(/software engineer|software developer|mern|programmer|application developer|systems engineer/, "Software Engineer");
addIf(/full[- ]?stack|fullstack/, "Full Stack Developer");
addIf(/frontend|front[- ]?end|react|angular|web|development|MERN|vue|svelte|html|css|javascript|typescript/, "Frontend Developer");
addIf(/backend|back[- ]?end|node|mern|express|spring|django|flask|api|server|golang|go|rust|java|c#|dotnet/, "Backend Developer");
addIf(/mobile app developer|ios developer|android developer|flutter developer|react native/, "Mobile App Developer");
addIf(/game developer|unity|unreal engine|cocos2d|godot/, "Game Developer");
addIf(/vr developer|virtual reality|ar developer|augmented reality developer/, "VR / AR Developer");
addIf(/ai engineer|ml engineer|machine learning|deep learning|tensorflow|pytorch/, "AI / ML Engineer");
addIf(/nlp engineer|natural language processing|chatbot engineer/, "NLP Engineer");
addIf(/computer vision|opencv|image processing/, "Computer Vision Engineer");
addIf(/robotics engineer|automation engineer|robotics developer/, "Robotics Engineer");
addIf(/quantum computing|quantum software|qiskit|quantum developer/, "Quantum Computing Engineer");
addIf(/cloud engineer|aws engineer|azure engineer|gcp engineer/, "Cloud Engineer");
addIf(/devops|docker|kubernetes|ci\/cd|site reliability engineer|sre/, "DevOps / Site Reliability Engineer");
addIf(/database administrator|dba|sql server|oracle|mongodb|postgresql|mysql/, "Database Administrator");
addIf(/system architect|software architect|solution architect|technical architect/, "Software / Systems Architect");
addIf(/crm developer|salesforce|hubspot|zoho crm/, "CRM Developer");
addIf(/wordpress developer|shopify developer|magento developer|joomla developer/, "CMS / E-Commerce Developer");
addIf(/game designer|level designer|ux for games/, "Game Designer");
addIf(/fullstack architect|end-to-end engineer|software systems architect/, "Fullstack Architect");
addIf(/cloud solutions architect|aws solutions|azure solutions|gcp solutions/, "Cloud Solutions Architect");
addIf(/api developer|mern|rest api|graphql developer/, "API Developer");
addIf(/software tester|manual tester|automation tester|qa engineer|selenium|cypress/, "Software Tester / QA Engineer");
addIf(/qa lead|test lead|quality lead/, "QA Lead");
addIf(/ai prompt engineer|generative ai engineer|chatgpt engineer/, "AI Prompt / Generative AI Engineer");
addIf(/blockchain developer|smart contract developer|solidity developer|web3 developer/, "Blockchain Developer");
addIf(/iot engineer|iot solutions architect|iot security engineer|connected devices developer/, "IoT Engineer");
addIf(/edge computing engineer|fog computing|distributed computing/, "Edge Computing Engineer");
addIf(/digital twin engineer|simulation engineer|virtual twin developer/, "Digital Twin Engineer");
addIf(/autonomous vehicle engineer|self-driving car engineer/, "Autonomous Vehicle Engineer");
addIf(/drone engineer|uav developer|drone pilot/, "Drone Engineer / UAV Developer");
addIf(/smart home engineer|home automation engineer/, "Smart Home Engineer");
addIf(/tech consultant|mern|it|it consultant|technology consultant/, "Tech / IT Consultant");
addIf(/system analyst|it analyst|technical analyst/, "System / IT Analyst");
addIf(/support analyst|technical support analyst|desktop support analyst/, "Support Analyst");
addIf(/it coordinator|technology coordinator|technical coordinator/, "IT Coordinator");
addIf(/network engineer|network administrator|cisco|juniper/, "Network Engineer");
addIf(/security engineer|cyber security engineer|penetration tester|ethical hacker|infosec/, "Cyber Security Engineer");
addIf(/data engineer|etl developer|big data engineer|spark|hadoop/, "Data Engineer");
addIf(/data scientist|machine learning scientist|statistical analyst|ai researcher/, "Data Scientist");
addIf(/business intelligence|bi developer|power bi|tableau|qlik/, "Business Intelligence Developer");
addIf(/systems engineer|infrastructure engineer|server engineer|linux administrator|windows administrator/, "Systems Engineer");
addIf(/site reliability engineer|sre|uptime engineer|ops engineer/, "Site Reliability Engineer");
addIf(/cloud native engineer|kubernetes engineer|serverless engineer/, "Cloud Native Engineer");
addIf(/etl developer|data pipeline engineer|airflow|talend/, "ETL Developer");
addIf(/scrum master|agile coach|project manager|pmp/, "Scrum Master / Project Manager");
addIf(/ui designer|ux designer|interaction designer|visual designer/, "UI / UX Designer");
addIf(/graphic designer|visual artist|illustrator|photoshop|figma|adobe illustrator/, "Graphic Designer");
addIf(/product manager|technical product manager|digital product manager/, "Product Manager");
addIf(/technical writer|documentation engineer|api writer|content engineer/, "Technical Writer");
addIf(/seo specialist|seo analyst|search engine optimization/, "SEO Specialist");
addIf(/marketing technologist|digital marketing engineer|martech engineer/, "Marketing Technologist");
addIf(/embedded software engineer|firmware engineer|microcontroller developer|arm|avr/, "Embedded Software Engineer");
addIf(/android kotlin developer|android java developer/, "Android Developer");
addIf(/ios swift developer|objective-c developer/, "iOS Developer");
addIf(/flutter dart developer|react native mobile developer/, "Cross-Platform Mobile Developer");
addIf(/game engine programmer|unreal programmer|unity coder/, "Game Engine Developer");
addIf(/ai researcher|ml researcher|deep learning researcher|reinforcement learning/, "AI Researcher");
addIf(/robotic process automation|rpa developer|uiautomation|blueprism|uiautomator/, "RPA Developer");
addIf(/computer graphics engineer|opengl|directx|vulkan/, "Computer Graphics Engineer");
addIf(/audio engineer|sound engineer|digital audio developer/, "Audio Software Engineer");
addIf(/video processing engineer|ffmpeg|video codec developer/, "Video Processing Engineer");
addIf(/chatbot developer|dialogflow|rasa|botpress/, "Chatbot Developer");
addIf(/voice assistant developer|alexa developer|google assistant developer/, "Voice Assistant Developer");
addIf(/embedded ai engineer|tinyml engineer|edge ai developer/, "Embedded AI Engineer");
addIf(/cryptography engineer|crypto developer|encryption specialist/, "Cryptography Engineer");
addIf(/hpc engineer|high performance computing|parallel computing engineer/, "HPC Engineer");
addIf(/scientific computing|numerical methods engineer|simulation software developer/, "Scientific Computing Engineer");
addIf(/bioinformatics engineer|genomics software engineer|computational biology/, "Bioinformatics Engineer");
addIf(/geospatial developer|gis software engineer|mapping solutions engineer/, "Geospatial Software Engineer");
addIf(/blockchain architect|dlt architect|web3 architect/, "Blockchain Architect");
addIf(/smart contract auditor|solidity auditor|eth security auditor/, "Smart Contract Auditor");
addIf(/technical evangelist|developer advocate|community engineer/, "Technical Evangelist");
addIf(/opensource contributor|open source developer|github contributor/, "Open Source Developer");
addIf(/software localization engineer|i18n engineer|l10n engineer/, "Localization Engineer");
addIf(/tech recruiter|technical recruiter|it recruiter/, "Tech Recruiter");
addIf(/learning engineer|edtech developer|training software engineer/, "Learning Engineer");
addIf(/simulation engineer|physics engine developer|simulator software engineer/, "Simulation Engineer");
addIf(/ai ops engineer|aiops developer|ml ops engineer|mops engineer/, "AIOps / MLOps Engineer");
addIf(/virtualization engineer|vmware engineer|hyper-v engineer|containerization engineer/, "Virtualization Engineer");
addIf(/edge ai engineer|tinyml engineer|embedded ai engineer/, "Edge AI Engineer");
addIf(/iot security analyst|iot penetration tester|iot ethical hacker/, "IoT Security Analyst");
addIf(/quantitative developer|quant dev|algo trading developer|hft developer/, "Quantitative Developer");
addIf(/trading systems engineer|fintech software engineer|payment gateway developer/, "Fintech Engineer");
addIf(/mobile game developer|casual game developer|hyper casual developer/, "Mobile Game Developer");
addIf(/game ai engineer|game ml engineer|npc ai developer/, "Game AI Engineer");
addIf(/cloud security engineer|aws security engineer|azure security engineer|gcp security engineer/, "Cloud Security Engineer");
addIf(/storage engineer|data storage specialist|san engineer|nas engineer/, "Storage Engineer");
addIf(/network security analyst|firewall engineer|vpn specialist|network pen tester/, "Network Security Analyst");
addIf(/site engineer|it operations engineer|it support engineer/, "IT Operations Engineer");
addIf(/iot platform engineer|connected devices engineer|smart devices engineer/, "IoT Platform Engineer");
addIf(/software engineer|software developer|programmer|application developer|systems engineer|junior software engineer|senior software engineer|lead software engineer|principal software engineer/, "Software Engineer");
addIf(/frontend developer|junior frontend developer|senior frontend developer|lead frontend developer|react developer|angular developer|vue developer|svelte developer|javascript developer|typescript developer|html developer|css developer/, "Frontend Developer");
addIf(/backend developer|junior backend developer|senior backend developer|lead backend developer|node\.js developer|python backend developer|java backend developer|php backend developer|api developer|rest api developer|graphql developer/, "Backend Developer");
addIf(/full stack developer|junior full stack developer|senior full stack developer|lead full stack developer|full stack javascript developer/, "Full Stack Developer");
addIf(/mobile app developer|ios developer|senior ios developer|lead ios developer|android developer|senior android developer|lead android developer|flutter developer|senior flutter developer|react native developer|senior react native developer|junior mobile developer|senior mobile developer/, "Mobile App Developer");
addIf(/devops engineer|junior devops engineer|senior devops engineer|lead devops engineer|devops manager|devops lead|site reliability engineer|junior site reliability engineer|senior site reliability engineer|site reliability lead/, "DevOps / SRE");
addIf(/cloud engineer|senior cloud engineer|lead cloud engineer|cloud architect|cloud solutions architect|aws engineer|azure engineer|gcp engineer|cloud security engineer|cloud consultant|cloud infrastructure engineer|cloud operations manager/, "Cloud Engineer / Architect");
addIf(/ai engineer|machine learning engineer|junior machine learning engineer|senior machine learning engineer|deep learning engineer|ai researcher|deep learning researcher|machine learning researcher|ai architect|ai trainer|prompt engineer/, "AI / ML Engineer");
addIf(/computer vision engineer|computer vision developer/, "Computer Vision Engineer");
addIf(/natural language processing engineer|nlp engineer|chatbot developer/, "NLP Engineer");
addIf(/data scientist|junior data scientist|senior data scientist|head of data science|chief data officer/, "Data Scientist");
addIf(/data analyst|junior data analyst|senior data analyst|business data analyst|finance data analyst|healthcare data analyst|analytics manager|data visualization specialist/, "Data Analyst / Analytics");
addIf(/data engineer|big data engineer|etl developer|data warehouse engineer|big data developer/, "Data Engineer / Big Data");
addIf(/business intelligence analyst|power bi developer|tableau developer|bi developer|analytics consultant/, "Business Intelligence Developer");
addIf(/game developer|unity developer|unreal engine developer|ar\/vr game developer|game ai engineer/, "Game Developer");
addIf(/blockchain developer|senior blockchain developer|crypto developer|blockchain architect|crypto architect/, "Blockchain / Crypto Developer");
addIf(/cybersecurity specialist|ethical hacker|penetration tester|information security analyst|network security engineer|application security engineer|ciso|security consultant|vulnerability analyst|red team specialist|blue team specialist|soc analyst|firewall engineer|identity access management specialist|privacy consultant/, "Cyber Security / InfoSec");
addIf(/network engineer|network administrator|system administrator|infrastructure engineer|it operations engineer|it operations manager|it service manager|network operations manager/, "Network / Systems Engineer");
addIf(/it support specialist|helpdesk technician|application support analyst|software support engineer|it coordinator/, "IT Support / Coordinator");
addIf(/erp consultant|sap consultant|salesforce developer|salesforce administrator|crm specialist|erp functional consultant|business systems analyst|systems analyst/, "ERP / CRM Specialist");
addIf(/qa engineer|junior qa engineer|senior qa engineer|software tester|manual tester|automation tester|test automation engineer|qa lead|qa automation lead|performance test engineer|load test engineer|software qa manager|software qa analyst/, "QA / Software Testing");
addIf(/software architect|solution architect|technical lead|tech lead|engineering manager|director of engineering|vp of engineering|cto|ai product manager|technical operations manager|software engineering manager|software engineering consultant|fullstack architect/, "Technical / Engineering Leadership");
addIf(/technical writer|documentation specialist|it trainer|software trainer|technical evangelist/, "Technical Writing / Training");
addIf(/scrum master|agile coach|product owner|scrum product owner|agile product owner|technical product owner/, "Agile / Scrum Roles");
addIf(/infrastructure engineer|it infrastructure manager|release engineer|build engineer|release manager/, "Infrastructure / Release Management");
addIf(/python automation developer|java automation developer|automation engineer|robotic process automation developer|rpa developer/, "Automation / RPA");
addIf(/embedded systems engineer|iot engineer|iot platform engineer|embedded ai engineer|edge ai engineer|robustics software engineer/, "Embedded / IoT / Robotics");
addIf(/frontend angular developer|frontend vue\.js developer|svelte developer|html developer|css developer|javascript developer|typescript developer|react developer/, "Frontend Specialized Roles");
addIf(/technical consultant|software consultant|it specialist|infrastructure consultant|cloud consultant|devops consultant|software qa analyst|software team coordinator|software program manager|technical operations manager/, "Consultant / Specialist Roles");
addIf(/backend lead|frontend lead|software team lead|devops lead|site reliability lead|cloud solutions engineer|cloud solutions architect|api developer|rest api developer|graphql developer/, "Lead / Specialized Engineering Roles");


// =====================================
// ========== Software / IT / Tech ======
// =====================================
addIf(/software engineer|software developer|programmer|application developer|systems engineer/, "Software Engineer");
addIf(/full[- ]?stack|fullstack/, "Full Stack Developer");
addIf(/frontend|front[- ]?end|react|angular|vue|svelte|html|css|javascript|typescript/, "Frontend Developer");
addIf(/backend|back[- ]?end|node|express|spring|django|flask|api|server|golang|go|rust|java|c#|dotnet/, "Backend Developer");
addIf(/mobile app developer|ios developer|android developer|flutter developer|react native/, "Mobile App Developer");
addIf(/game developer|unity|unreal engine|cocos2d|godot/, "Game Developer");
addIf(/vr developer|virtual reality|ar developer|augmented reality developer/, "VR / AR Developer");
addIf(/ai engineer|ml engineer|machine learning|deep learning|tensorflow|pytorch/, "AI / ML Engineer");
addIf(/nlp engineer|natural language processing|chatbot engineer/, "NLP Engineer");
addIf(/computer vision|opencv|image processing/, "Computer Vision Engineer");
addIf(/robotics engineer|automation engineer|robotics developer/, "Robotics Engineer");
addIf(/quantum computing|quantum software|qiskit|quantum developer/, "Quantum Computing Engineer");
addIf(/cloud engineer|aws engineer|azure engineer|gcp engineer/, "Cloud Engineer");
addIf(/devops|docker|kubernetes|ci\/cd|site reliability engineer|sre/, "DevOps / Site Reliability Engineer");
addIf(/database administrator|dba|sql server|oracle|mongodb/, "Database Administrator");
addIf(/system architect|software architect|solution architect|technical architect/, "Software / Systems Architect");
addIf(/crm developer|salesforce|hubspot|zoho crm/, "CRM Developer");
addIf(/wordpress developer|shopify developer|magento developer|joomla developer/, "CMS / E-Commerce Developer");
addIf(/game designer|level designer|ux for games/, "Game Designer");
addIf(/fullstack architect|end-to-end engineer|software systems architect/, "Fullstack Architect");
addIf(/cloud solutions architect|aws solutions|azure solutions|gcp solutions/, "Cloud Solutions Architect");
addIf(/api developer|rest api|graphql developer/, "API Developer");
addIf(/software tester|manual tester|automation tester|qa engineer|selenium|cypress/, "Software Tester / QA Engineer");
addIf(/qa lead|test lead|quality lead/, "QA Lead");
addIf(/ai prompt engineer|generative ai engineer|chatgpt engineer/, "AI Prompt / Generative AI Engineer");
addIf(/blockchain developer|smart contract developer|solidity developer|web3 developer/, "Blockchain Developer");
addIf(/iot engineer|iot solutions architect|iot security engineer|connected devices developer/, "IoT Engineer");
addIf(/edge computing engineer|fog computing|distributed computing/, "Edge Computing Engineer");
addIf(/digital twin engineer|simulation engineer|virtual twin developer/, "Digital Twin Engineer");
addIf(/autonomous vehicle engineer|self-driving car engineer/, "Autonomous Vehicle Engineer");
addIf(/drone engineer|uav developer|drone pilot/, "Drone Engineer / UAV Developer");
addIf(/smart home engineer|home automation engineer/, "Smart Home Engineer");
addIf(/tech consultant|it consultant|technology consultant/, "Tech / IT Consultant");
addIf(/system analyst|it analyst|technical analyst/, "System / IT Analyst");
addIf(/support analyst|technical support analyst|desktop support analyst/, "Support Analyst");
addIf(/it coordinator|technology coordinator|technical coordinator/, "IT Coordinator");

// =====================================
// ========== Creative / Design =========
// =====================================
addIf(/ui[\s\/]?ux|user experience|user interface|ux designer|ui designer|figma|sketch|adobe xd/, "UI/UX Designer");
addIf(/graphic designer|graphic design|photoshop|illustrator|indesign|branding/, "Graphic Designer");
addIf(/web designer|web design|responsive design/, "Web Designer");
addIf(/digital artist|digital art|concept artist/, "Digital Artist");
addIf(/motion graphics|after effects|premiere pro|video editing|multimedia designer/, "Motion Graphics / Multimedia Designer");
addIf(/animation artist|2d animator|3d animator|character animator/, "Animator");
addIf(/storyboard artist|storyboarding|film previsualization/, "Storyboard Artist");
addIf(/creative director|art director/, "Creative / Art Director");
addIf(/photographer|portrait photographer|commercial photography/, "Photographer");
addIf(/video editor|premiere pro|final cut|davinci resolve/, "Video Editor");
addIf(/audio engineer|sound engineer|audio technician/, "Audio / Sound Engineer");
addIf(/cinematographer|director of photography|d.o.p/, "Cinematographer / D.O.P");
addIf(/fashion designer|apparel designer|garment designer/, "Fashion Designer");
addIf(/interior decorator|interior stylist/, "Interior Decorator");
addIf(/lighting designer|stage lighting|theatre lighting/, "Lighting Designer");
addIf(/set designer|stage designer|theatre designer/, "Set / Stage Designer");
addIf(/creative copywriter|advertising copywriter/, "Creative Copywriter");
addIf(/photo editor|photo retoucher|photoshop artist/, "Photo Editor / Retoucher");
addIf(/vfx artist|visual effects artist|after effects compositor/, "VFX Artist");
addIf(/ui motion designer|interactive designer|microinteraction designer/, "UI Motion Designer");
addIf(/creative coder|generative artist|creative programmer/, "Creative Coder / Generative Artist");
addIf(/3d modeler|3d modeling artist|blender 3d|maya 3d/, "3D Modeler");
addIf(/concept designer|visual development artist|concept artist/, "Concept Designer");

// =====================================
// ========== Healthcare / Medical ======
// =====================================
addIf(/registered nurse|ahs|nursing/, "Registered Nurse");
addIf(/clinical nurse specialist|cns|clinical nurse/, "Clinical Nurse Specialist");
addIf(/medical officer/, "Medical Officer");
addIf(/general practitioner|gp|general physician|physician|doctor/, "General Physician");
addIf(/cardiologist|neurologist|oncologist|pediatrician|surgeon|psychiatrist|dermatologist|endocrinologist|radiologist|anesthesiologist|pathologist|urologist|nephrologist|orthopedic|ophthalmologist|obstetrician|gynecologist|gastroenterologist/, "Specialist Doctor");
addIf(/pharmacist|clinical pharmacist|hospital pharmacist/, "Pharmacist");
addIf(/physiotherapist|physical therapist|rehabilitation/, "Physiotherapist");
addIf(/occupational therapist|ot therapist|occupational therapy/, "Occupational Therapist");
addIf(/speech therapist|speech pathologist|slp/, "Speech Therapist");
addIf(/dietician|nutritionist|clinical dietician/, "Dietician / Nutritionist");
addIf(/lab technician|medical lab|pathology technician/, "Lab Technician");
addIf(/radiographer|radiology technician|x-ray|ct scan|mri/, "Radiographer");
addIf(/paramedic|emergency medical technician|emt/, "Paramedic / EMT");
addIf(/psychologist|clinical psychologist|counselor|therapist/, "Psychologist / Therapist");
addIf(/anesthetist|anesthesiologist assistant/, "Anesthetist / Anesthesiologist");
addIf(/midwife|obstetric nurse|maternal health nurse/, "Midwife / Maternal Health Nurse");
addIf(/oncology nurse|cancer nurse/, "Oncology Nurse");
addIf(/veterinarian|vet|animal doctor/, "Veterinarian");
addIf(/optometrist|eye specialist|vision care specialist/, "Optometrist");
addIf(/chiropractor|spine specialist|manual therapy/, "Chiropractor");
addIf(/home health aide|caregiver|personal support worker/, "Home Health Aide / Caregiver");
addIf(/genetic counselor|genomics specialist|dna counselor/, "Genetic Counselor / Genomics Specialist");
addIf(/biostatistician|health data analyst|epidemiology analyst/, "Biostatistician / Health Data Analyst");
addIf(/telemedicine specialist|virtual health consultant/, "Telemedicine Specialist");
addIf(/health coach|nutrition coach|wellness advisor/, "Health & Wellness Coach");
addIf(/occupational health specialist|industrial health officer/, "Occupational Health Specialist");

// =====================================
// ========== Education / Research ======
// =====================================
addIf(/teacher|school teacher|primary school|elementary teacher|classroom teacher/, "School Teacher");
addIf(/secondary school teacher|high school teacher|secondary teacher|middle school teacher/, "Secondary School Teacher");
addIf(/lecturer|assistant professor|associate professor|adjunct|senior lecturer|teaching fellow/, "Lecturer");
addIf(/education consultant|academic advisor|education advisor/, "Education Consultant");
addIf(/tutor|private tutor|online tutor/, "Tutor");
addIf(/professor|research professor|tenure track/, "Professor");
addIf(/curriculum designer|instructional designer|learning designer/, "Curriculum / Instructional Designer");
addIf(/educational technologist|edtech specialist|learning technologist/, "EdTech Specialist");
addIf(/school principal|headmaster|headmistress/, "School Principal");
addIf(/special education teacher|sped teacher/, "Special Education Teacher");
addIf(/research assistant|teaching assistant|research fellow/, "Research / Teaching Assistant");
addIf(/librarian|academic librarian|library specialist/, "Librarian / Library Specialist");
addIf(/mooc instructor|online course creator|elearning instructor/, "Online / MOOC Instructor");
addIf(/edtech developer|learning app developer|educational software engineer/, "EdTech Developer");
addIf(/curriculum strategist|instructional strategist|learning experience designer/, "Curriculum Strategist / Instructional Designer");
addIf(/academic researcher|research fellow|postdoctoral researcher/, "Academic Researcher / Postdoc");
addIf(/library technology specialist|digital librarian|metadata specialist/, "Library Technology Specialist");

// =====================================
// ========== Business / Management =====
// =====================================
addIf(/product manager|pm|product management/, "Product Manager");
addIf(/business analyst|ba|requirements analyst/, "Business Analyst");
addIf(/project manager|pmp certified|project coordination/, "Project Manager");
addIf(/operations manager|ops manager|operations lead/, "Operations Manager");
addIf(/marketing manager|digital marketing|seo|content strategy/, "Marketing Manager");
addIf(/sales manager|account manager|client relationship manager/, "Sales Manager");
addIf(/hr manager|human resources|talent acquisition/, "HR Manager");
addIf(/finance manager|accounting|financial analyst|cpa/, "Finance / Accounting Manager");
addIf(/consultant|management consultant|strategy consultant/, "Consultant");
addIf(/business development manager|bdm|partnership manager/, "Business Development Manager");
addIf(/brand manager|product brand strategist/, "Brand Manager");
addIf(/customer experience manager|cx manager/, "Customer Experience Manager");
addIf(/supply chain analyst|procurement analyst/, "Supply Chain Analyst");
addIf(/operations analyst|business operations|ops analyst/, "Operations Analyst");
addIf(/investment analyst|financial analyst|equity analyst/, "Investment / Financial Analyst");
addIf(/recruiter|talent acquisition specialist|headhunter/, "Recruiter / Talent Acquisition Specialist");
addIf(/event coordinator|conference manager|wedding planner/, "Event Coordinator / Planner");
addIf(/hospitality manager|hotel manager|resort manager/, "Hospitality Manager");
addIf(/logistics coordinator|warehouse coordinator|transport coordinator/, "Logistics Coordinator");
addIf(/seo manager|digital strategist|ppc manager/, "SEO / Digital Marketing Manager");

// =====================================
// ========== Trades / Technical =======
// =====================================
addIf(/mechanic|automotive technician|car repair|diesel mechanic/, "Mechanic / Automotive Technician");
addIf(/electrician|electrical technician|industrial electrician/, "Electrician");
addIf(/plumber|pipefitter|sanitation technician/, "Plumber / Pipefitter");
addIf(/carpenter|woodworker|joiner/, "Carpenter / Woodworker");
addIf(/construction manager|site supervisor|civil supervisor/, "Construction Manager");
addIf(/architect|building designer|urban planner/, "Architect / Planner");
addIf(/hvac engineer|heating ventilation air conditioning engineer/, "HVAC Engineer");
addIf(/solar engineer|solar technician|renewable energy engineer/, "Solar / Renewable Energy Engineer");
addIf(/wind turbine technician|wind energy specialist/, "Wind Turbine Technician / Renewable Energy Specialist");
addIf(/industrial designer|mechanical designer|product design engineer/, "Industrial / Mechanical Designer");
addIf(/3d printing specialist|additive manufacturing engineer/, "3D Printing / Additive Manufacturing Specialist");
addIf(/welding technician|metal fabricator|steelworker/, "Welding Technician / Metal Fabricator");
addIf(/construction laborer|site worker|field engineer/, "Construction Laborer / Field Engineer");
addIf(/surveyor|civil surveyor|land surveyor/, "Surveyor / Land Surveyor");

// =====================================
// ========== Hospitality / Tourism =====
// =====================================
addIf(/travel agent|tour operator|travel consultant/, "Travel Agent / Tour Operator");
addIf(/concierge|guest services manager|front office manager/, "Concierge / Guest Services Manager");
addIf(/hotel receptionist|front desk officer|guest relations officer/, "Hotel Receptionist / Guest Relations");
addIf(/restaurant manager|food & beverage manager|f&b supervisor/, "Restaurant / F&B Manager");
addIf(/barista|coffee specialist|coffee shop manager/, "Barista / Coffee Specialist");
addIf(/bartender|mixologist|bar staff/, "Bartender / Mixologist");
addIf(/fitness trainer|personal trainer|gym instructor/, "Fitness / Personal Trainer");
addIf(/yoga instructor|pilates instructor|wellness coach/, "Yoga / Wellness Instructor");

// =====================================
// ========== Misc / Emerging Roles =====
// =====================================
addIf(/professional gamer|esports player|competitive gamer/, "Professional Gamer / Esports Player");
addIf(/streamer|twitch streamer|content creator/, "Streamer / Content Creator");
addIf(/podcaster|audio content creator|voice talent/, "Podcaster / Voice Talent");
addIf(/pet groomer|animal care specialist|dog trainer/, "Pet Groomer / Animal Care Specialist");
addIf(/event entertainer|performer|stage artist/, "Event Entertainer / Performer");
addIf(/public relations specialist|pr officer|communications officer/, "Public Relations Specialist");
addIf(/ngo coordinator|nonprofit project manager|charity officer/, "NGO / Nonprofit Coordinator");
addIf(/government officer|civil service officer|public sector administrator/, "Government / Civil Service Officer");
addIf(/political analyst|policy researcher|legislative assistant/, "Political Analyst / Policy Researcher");
addIf(/writer|novelist|author|essayist/, "Writer / Author");
addIf(/metaverse designer|vr environment designer|ar environment designer/, "Metaverse / VR/AR Designer");
addIf(/ai ethics specialist|machine ethics|ai policy/, "AI Ethics Specialist");


// =======================
// Business / Management Roles Mapping
// =======================

addIf(/project manager|junior project manager|senior project manager/, "Project Manager");
addIf(/program manager|senior program manager/, "Program Manager");
addIf(/product manager|senior product manager|associate product manager|technical product owner|product owner|scrum product owner|agile product owner/, "Product Manager");
addIf(/business analyst|junior business analyst|senior business analyst|systems analyst|business systems analyst/, "Business Analyst");
addIf(/operations manager|senior operations manager|operations lead|business operations manager|vp of operations|chief operating officer|operations consultant|operations coordinator/, "Operations Manager");
addIf(/operations analyst/, "Operations Analyst");
addIf(/procurement manager/, "Procurement Manager");
addIf(/inventory manager/, "Inventory Manager");
addIf(/supply chain manager|junior supply chain manager|senior supply chain manager/, "Supply Chain Manager");
addIf(/logistics manager|fleet manager/, "Logistics / Fleet Manager");
addIf(/hr manager|senior hr manager|hr executive|talent acquisition specialist|recruiter|recruitment manager/, "HR / Talent Management");
addIf(/marketing manager|digital marketing manager|digital marketing specialist|seo specialist|content strategist|social media manager|brand manager/, "Marketing / Brand Management");
addIf(/sales manager|account manager|senior account manager|business development manager|business development executive/, "Sales / Business Development");
addIf(/customer success manager|client relationship manager/, "Customer Success / Client Management");
addIf(/strategy consultant|management consultant|risk manager|compliance officer/, "Strategy / Management / Risk Consultant");

// =======================
// Finance / Accounting
// =======================
addIf(/accountant/, "Accountant");
addIf(/junior accountant/, "Junior Accountant");
addIf(/senior accountant/, "Senior Accountant");
addIf(/auditor/, "Auditor");
addIf(/internal auditor/, "Internal Auditor");
addIf(/financial analyst/, "Financial Analyst");
addIf(/senior financial analyst/, "Senior Financial Analyst");
addIf(/investment analyst/, "Investment Analyst");
addIf(/investment banker/, "Investment Banker");
addIf(/tax consultant/, "Tax Consultant");
addIf(/senior tax consultant/, "Senior Tax Consultant");
addIf(/actuary/, "Actuary");
addIf(/portfolio manager/, "Portfolio Manager");
addIf(/credit analyst/, "Credit Analyst");
addIf(/risk analyst/, "Risk Analyst");
addIf(/financial controller/, "Financial Controller");
addIf(/finance manager/, "Finance Manager");
addIf(/senior finance manager/, "Senior Finance Manager");
addIf(/chief financial officer|cfo/, "Chief Financial Officer");
addIf(/treasury analyst/, "Treasury Analyst");
addIf(/accounts payable specialist/, "Accounts Payable Specialist");
addIf(/accounts receivable specialist/, "Accounts Receivable Specialist");
addIf(/payroll specialist/, "Payroll Specialist");
addIf(/budget analyst/, "Budget Analyst");
addIf(/equity analyst/, "Equity Analyst");
addIf(/derivatives analyst/, "Derivatives Analyst");
addIf(/fund manager/, "Fund Manager");
addIf(/hedge fund manager/, "Hedge Fund Manager");
addIf(/compliance analyst/, "Compliance Analyst");

// =======================
// Healthcare / Life Sciences
// =======================
addIf(/doctor/, "Doctor");
addIf(/junior doctor/, "Junior Doctor");
addIf(/senior doctor/, "Senior Doctor");
addIf(/physician/, "Physician");
addIf(/surgeon/, "Surgeon");
addIf(/nurse/, "Nurse");
addIf(/registered nurse/, "Registered Nurse");
addIf(/senior nurse/, "Senior Nurse");
addIf(/nursing officer/, "Nursing Officer");
addIf(/pharmacist/, "Pharmacist");
addIf(/lab technician/, "Lab Technician");
addIf(/senior lab technician/, "Senior Lab Technician");
addIf(/research scientist/, "Research Scientist");
addIf(/clinical research scientist/, "Clinical Research Scientist");
addIf(/physiotherapist/, "Physiotherapist");
addIf(/occupational therapist/, "Occupational Therapist");
addIf(/healthcare administrator/, "Healthcare Administrator");
addIf(/hospital manager/, "Hospital Manager");
addIf(/clinical data analyst/, "Clinical Data Analyst");
addIf(/biostatistician/, "Biostatistician");
addIf(/medical representative/, "Medical Representative");
addIf(/radiologist/, "Radiologist");
addIf(/imaging specialist/, "Imaging Specialist");
addIf(/medical laboratory scientist/, "Medical Laboratory Scientist");
addIf(/dietitian/, "Dietitian");
addIf(/nutritionist/, "Nutritionist");

// =======================
// Engineering / Manufacturing
// =======================
addIf(/mechanical engineer/, "Mechanical Engineer");
addIf(/junior mechanical engineer/, "Junior Mechanical Engineer");
addIf(/senior mechanical engineer/, "Senior Mechanical Engineer");
addIf(/civil engineer/, "Civil Engineer");
addIf(/structural engineer/, "Structural Engineer");
addIf(/electrical engineer/, "Electrical Engineer");
addIf(/electronics engineer/, "Electronics Engineer");
addIf(/chemical engineer/, "Chemical Engineer");
addIf(/industrial engineer/, "Industrial Engineer");
addIf(/process engineer/, "Process Engineer");
addIf(/quality control engineer/, "Quality Control Engineer");
addIf(/production manager/, "Production Manager");
addIf(/maintenance engineer/, "Maintenance Engineer");
addIf(/robotics engineer/, "Robotics Engineer");
addIf(/automation specialist/, "Automation Specialist");
addIf(/design engineer/, "Design Engineer");
addIf(/project engineer/, "Project Engineer");
addIf(/engineering manager/, "Engineering Manager");
addIf(/plant manager/, "Plant Manager");
addIf(/manufacturing engineer/, "Manufacturing Engineer");
addIf(/safety engineer/, "Safety Engineer");

// =======================
// Education / Training
// =======================
addIf(/teacher/, "Teacher");
addIf(/assistant teacher/, "Assistant Teacher");
addIf(/senior teacher/, "Senior Teacher");
addIf(/lecturer/, "Lecturer");
addIf(/assistant lecturer/, "Assistant Lecturer");
addIf(/professor/, "Professor");
addIf(/assistant professor/, "Assistant Professor");
addIf(/associate professor/, "Associate Professor");
addIf(/trainer/, "Trainer");
addIf(/corporate trainer/, "Corporate Trainer");
addIf(/instructional designer/, "Instructional Designer");
addIf(/academic coordinator/, "Academic Coordinator");
addIf(/education consultant/, "Education Consultant");
addIf(/researcher/, "Researcher");
addIf(/librarian/, "Librarian");
addIf(/academic advisor/, "Academic Advisor");

// =======================
// Legal / Government
// =======================
addIf(/lawyer/, "Lawyer");
addIf(/junior lawyer/, "Junior Lawyer");
addIf(/senior lawyer/, "Senior Lawyer");
addIf(/legal counsel/, "Legal Counsel");
addIf(/paralegal/, "Paralegal");
addIf(/judge/, "Judge");
addIf(/magistrate/, "Magistrate");
addIf(/policy analyst/, "Policy Analyst");
addIf(/civil servant/, "Civil Servant");
addIf(/government officer/, "Government Officer");
addIf(/diplomat/, "Diplomat");
addIf(/regulatory specialist/, "Regulatory Specialist");
addIf(/compliance officer/, "Compliance Officer");
addIf(/legal assistant/, "Legal Assistant");

// =======================
// Hospitality / Tourism / Retail
// =======================
addIf(/hotel manager/, "Hotel Manager");
addIf(/assistant hotel manager/, "Assistant Hotel Manager");
addIf(/front office manager/, "Front Office Manager");
addIf(/chef/, "Chef");
addIf(/sous chef/, "Sous Chef");
addIf(/kitchen staff/, "Kitchen Staff");
addIf(/event manager/, "Event Manager");
addIf(/event coordinator/, "Event Coordinator");
addIf(/travel agent/, "Travel Agent");
addIf(/tour guide/, "Tour Guide");
addIf(/retail manager/, "Retail Manager");
addIf(/assistant retail manager/, "Assistant Retail Manager");
addIf(/store manager/, "Store Manager");
addIf(/customer service executive/, "Customer Service Executive");
addIf(/brand ambassador/, "Brand Ambassador");
addIf(/hospitality executive/, "Hospitality Executive");

// =======================
// Logistics / Transportation
// =======================
addIf(/supply chain manager/, "Supply Chain Manager");
addIf(/logistics coordinator/, "Logistics Coordinator");
addIf(/transport manager/, "Transport Manager");
addIf(/warehouse manager/, "Warehouse Manager");
addIf(/warehouse supervisor/, "Warehouse Supervisor");
addIf(/shipping specialist/, "Shipping Specialist");
addIf(/freight forwarder/, "Freight Forwarder");
addIf(/procurement specialist/, "Procurement Specialist");
addIf(/delivery executive/, "Delivery Executive");
addIf(/fleet supervisor/, "Fleet Supervisor");
addIf(/operations logistics specialist/, "Operations Logistics Specialist");

// =======================
// Creative / Design / Media
// =======================
addIf(/graphic designer/, "Graphic Designer");
addIf(/senior graphic designer/, "Senior Graphic Designer");
addIf(/illustrator/, "Illustrator");
addIf(/animator/, "Animator");
addIf(/senior animator/, "Senior Animator");
addIf(/video editor/, "Video Editor");
addIf(/motion designer/, "Motion Designer");
addIf(/photographer/, "Photographer");
addIf(/videographer/, "Videographer");
addIf(/content creator/, "Content Creator");
addIf(/copywriter/, "Copywriter");
addIf(/art director/, "Art Director");
addIf(/creative director/, "Creative Director");
addIf(/social media strategist/, "Social Media Strategist");
addIf(/game designer/, "Game Designer");
addIf(/game artist/, "Game Artist");
addIf(/ui\/ux designer/, "UI/UX Designer");
addIf(/web designer/, "Web Designer");
addIf(/digital artist/, "Digital Artist");
addIf(/multimedia designer/, "Multimedia Designer");
addIf(/visual designer/, "Visual Designer");

// =======================
// Emerging / Miscellaneous
// =======================
addIf(/entrepreneur/, "Entrepreneur");
addIf(/startup founder/, "Startup Founder");
addIf(/influencer/, "Influencer");
addIf(/social media personality/, "Social Media Personality");
addIf(/sports coach/, "Sports Coach");
addIf(/athlete manager/, "Athlete Manager");
addIf(/blockchain developer/, "Blockchain Developer");
addIf(/blockchain architect/, "Blockchain Architect");
addIf(/crypto developer/, "Crypto Developer");
addIf(/ai trainer/, "AI Trainer");
addIf(/prompt engineer/, "Prompt Engineer");
addIf(/robotics technician/, "Robotics Technician");
addIf(/drone operator/, "Drone Operator");
addIf(/esg analyst/, "ESG Analyst");
addIf(/sustainability analyst/, "Sustainability Analyst");
addIf(/renewable energy engineer/, "Renewable Energy Engineer");
addIf(/environmental scientist/, "Environmental Scientist");
addIf(/geologist/, "Geologist");
addIf(/energy analyst/, "Energy Analyst");
addIf(/safety engineer/, "Safety Engineer");
addIf(/oil & gas engineer/, "Oil & Gas Engineer");

// =======================
// Technology / IT / Software - Extended Minor Roles
// =======================
addIf(/embedded systems developer|embedded software engineer/, "Embedded Systems Developer");
addIf(/firmware engineer/, "Firmware Engineer");
addIf(/junior firmware engineer/, "Junior Firmware Engineer");
addIf(/senior firmware engineer/, "Senior Firmware Engineer");
addIf(/ai ethics specialist|ai ethics|machine ethics/, "AI Ethics Specialist");
addIf(/ai product designer|ai ux designer|ai ui designer/, "AI Product Designer");
addIf(/software deployment engineer|release engineer|deployment engineer/, "Software Deployment Engineer");
addIf(/application support engineer|app support engineer|software support engineer/, "Application Support Engineer");
addIf(/it coordinator|it operations coordinator/, "IT Coordinator");
addIf(/it operations analyst|it analyst|technical operations analyst/, "IT Operations Analyst");
addIf(/it systems coordinator|systems coordinator|it infrastructure coordinator/, "IT Systems Coordinator");
addIf(/it infrastructure specialist|network infrastructure engineer/, "IT Infrastructure Specialist");
addIf(/network support specialist|network technician|it network support/, "Network Support Specialist");
addIf(/database support engineer|db support engineer|database administrator support/, "Database Support Engineer");
addIf(/bi developer|business intelligence developer|bi engineer/, "BI Developer");
addIf(/bi analyst|business intelligence analyst/, "BI Analyst");
addIf(/data reporting analyst|reporting analyst|data analyst/, "Data Reporting Analyst");
addIf(/data platform engineer|data platform developer/, "Data Platform Engineer");
addIf(/data ops engineer|data operations engineer/, "Data Ops Engineer");
addIf(/machine learning ops engineer|ml ops engineer|mlops engineer/, "Machine Learning Ops Engineer");
addIf(/ai model trainer|machine learning trainer|ml trainer/, "AI Model Trainer");
addIf(/deep learning trainer|dl trainer|neural network trainer/, "Deep Learning Trainer");
addIf(/ai research assistant|machine learning research assistant/, "AI Research Assistant");
addIf(/junior ai researcher/, "Junior AI Researcher");
addIf(/senior ai researcher/, "Senior AI Researcher");
addIf(/computer vision analyst|cv analyst|image processing analyst/, "Computer Vision Analyst");
addIf(/ar\/vr software engineer|ar vr developer|augmented reality engineer|virtual reality engineer/, "AR/VR Software Engineer");
addIf(/ar\/vr technical artist|vr ar technical artist/, "AR/VR Technical Artist");
addIf(/robotics software developer|robotics developer|robotics engineer/, "Robotics Software Developer");
addIf(/robotics system analyst|robotics analyst/, "Robotics System Analyst");
addIf(/iot solutions architect|internet of things architect/, "IoT Solutions Architect");
addIf(/iot system developer|iot engineer/, "IoT System Developer");
addIf(/iot application developer|iot app developer/, "IoT Application Developer");

// =======================
// Business / Finance - Extended Minor Roles
// =======================
addIf(/associate project manager|project management associate/, "Associate Project Manager");
addIf(/operations intern|business operations intern/, "Operations Intern");
addIf(/junior operations analyst|operations analyst intern/, "Junior Operations Analyst");
addIf(/business operations analyst/, "Business Operations Analyst");
addIf(/procurement analyst/, "Procurement Analyst");
addIf(/supply chain analyst/, "Supply Chain Analyst");
addIf(/logistics coordinator/, "Logistics Coordinator");
addIf(/inventory analyst/, "Inventory Analyst");
addIf(/assistant account manager|account management assistant/, "Assistant Account Manager");
addIf(/junior account executive|account executive junior/, "Junior Account Executive");
addIf(/finance associate/, "Finance Associate");
addIf(/junior financial analyst/, "Junior Financial Analyst");
addIf(/senior financial consultant/, "Senior Financial Consultant");
addIf(/tax associate/, "Tax Associate");
addIf(/junior tax analyst/, "Junior Tax Analyst");
addIf(/financial planning analyst|fp&a analyst/, "Financial Planning Analyst");
addIf(/treasury manager/, "Treasury Manager");
addIf(/budget controller/, "Budget Controller");
addIf(/credit manager/, "Credit Manager");
addIf(/portfolio analyst/, "Portfolio Analyst");

// =======================
// Healthcare / Life Sciences - Extended Minor Roles
// =======================
addIf(/medical lab technician|lab tech|medical technician/, "Medical Lab Technician");
addIf(/clinical research associate|cra/, "Clinical Research Associate");
addIf(/research assistant/, "Research Assistant");
addIf(/junior research scientist/, "Junior Research Scientist");
addIf(/senior research scientist/, "Senior Research Scientist");
addIf(/medical data analyst|health data analyst/, "Medical Data Analyst");
addIf(/clinical trial coordinator|trial coordinator/, "Clinical Trial Coordinator");
addIf(/clinical coordinator/, "Clinical Coordinator");
addIf(/pharmacy technician|pharma tech/, "Pharmacy Technician");
addIf(/nurse practitioner|np/, "Nurse Practitioner");
addIf(/senior nurse practitioner/, "Senior Nurse Practitioner");
addIf(/healthcare consultant|health consultant/, "Healthcare Consultant");
addIf(/public health analyst|public health researcher/, "Public Health Analyst");
addIf(/health information manager|him specialist/, "Health Information Manager");
addIf(/healthcare it specialist|health it specialist/, "Healthcare IT Specialist");
addIf(/dietetic intern/, "Dietetic Intern");
addIf(/nutrition analyst/, "Nutrition Analyst");

// =======================
// Engineering / Manufacturing - Extended Minor Roles
// =======================
addIf(/junior mechanical engineer/, "Junior Mechanical Engineer");
addIf(/senior mechanical engineer/, "Senior Mechanical Engineer");
addIf(/junior civil engineer/, "Junior Civil Engineer");
addIf(/senior civil engineer/, "Senior Civil Engineer");
addIf(/junior electrical engineer/, "Junior Electrical Engineer");
addIf(/senior electrical engineer/, "Senior Electrical Engineer");
addIf(/junior electronics engineer/, "Junior Electronics Engineer");
addIf(/senior electronics engineer/, "Senior Electronics Engineer");
addIf(/junior industrial engineer/, "Junior Industrial Engineer");
addIf(/senior industrial engineer/, "Senior Industrial Engineer");
addIf(/junior process engineer/, "Junior Process Engineer");
addIf(/senior process engineer/, "Senior Process Engineer");
addIf(/quality assurance specialist|qa specialist/, "Quality Assurance Specialist");
addIf(/maintenance supervisor/, "Maintenance Supervisor");
addIf(/manufacturing supervisor/, "Manufacturing Supervisor");
addIf(/plant supervisor/, "Plant Supervisor");
addIf(/production coordinator/, "Production Coordinator");
addIf(/project engineering lead/, "Project Engineering Lead");

// =======================
// Education / Training - Extended Minor Roles
// =======================
addIf(/teaching assistant|ta/, "Teaching Assistant");
addIf(/lab instructor/, "Lab Instructor");
addIf(/research fellow/, "Research Fellow");
addIf(/education program coordinator/, "Education Program Coordinator");
addIf(/online course designer|elearning designer/, "Online Course Designer");
addIf(/learning experience designer|led designer/, "Learning Experience Designer");
addIf(/instructional coordinator/, "Instructional Coordinator");
addIf(/curriculum developer/, "Curriculum Developer");
addIf(/education program manager/, "Education Program Manager");

// =======================
// Legal / Government - Extended Minor Roles
// =======================
addIf(/legal intern/, "Legal Intern");
addIf(/junior paralegal/, "Junior Paralegal");
addIf(/senior paralegal/, "Senior Paralegal");
addIf(/policy intern/, "Policy Intern");
addIf(/junior policy analyst/, "Junior Policy Analyst");
addIf(/senior policy analyst/, "Senior Policy Analyst");
addIf(/regulatory affairs specialist|regulatory specialist/, "Regulatory Affairs Specialist");
addIf(/compliance analyst/, "Compliance Analyst");
addIf(/government program officer/, "Government Program Officer");
addIf(/public affairs specialist/, "Public Affairs Specialist");
addIf(/administrative law specialist/, "Administrative Law Specialist");

// =======================
// Hospitality / Tourism / Retail - Extended Minor Roles
// =======================
addIf(/junior hotel manager/, "Junior Hotel Manager");
addIf(/assistant event manager/, "Assistant Event Manager");
addIf(/event staff coordinator/, "Event Staff Coordinator");
addIf(/travel coordinator/, "Travel Coordinator");
addIf(/tourism consultant/, "Tourism Consultant");
addIf(/retail associate/, "Retail Associate");
addIf(/sales executive/, "Sales Executive");
addIf(/assistant store manager/, "Assistant Store Manager");
addIf(/customer service specialist/, "Customer Service Specialist");
addIf(/hospitality consultant/, "Hospitality Consultant");
addIf(/restaurant manager/, "Restaurant Manager");
addIf(/food & beverage manager|f&b manager/, "Food & Beverage Manager");
addIf(/front desk associate/, "Front Desk Associate");

// =======================
// Logistics / Transportation - Extended Minor Roles
// =======================
addIf(/junior supply chain analyst/, "Junior Supply Chain Analyst");
addIf(/warehouse coordinator/, "Warehouse Coordinator");
addIf(/shipping coordinator/, "Shipping Coordinator");
addIf(/freight coordinator/, "Freight Coordinator");
addIf(/fleet supervisor/, "Fleet Supervisor");
addIf(/transportation analyst/, "Transportation Analyst");
addIf(/operations logistics lead/, "Operations Logistics Lead");
addIf(/inventory control specialist/, "Inventory Control Specialist");
addIf(/logistics planner/, "Logistics Planner");

// =======================
// Creative / Design / Media - Extended Minor Roles
// =======================
addIf(/junior graphic designer/, "Junior Graphic Designer");

addIf(/senior graphic designer/, "Senior Graphic Designer");
addIf(/illustration specialist/, "Illustration Specialist");
addIf(/storyboard artist/, "Storyboard Artist");
addIf(/visual effects artist|vfx artist/, "Visual Effects Artist");
addIf(/motion graphics designer/, "Motion Graphics Designer");
addIf(/3d modeler|3d artist/, "3D Modeler");
addIf(/environment artist/, "Environment Artist");
addIf(/texture artist/, "Texture Artist");
addIf(/digital media specialist/, "Digital Media Specialist");
addIf(/multimedia producer/, "Multimedia Producer");
addIf(/content strategist assistant/, "Content Strategist Assistant");
addIf(/junior copywriter/, "Junior Copywriter");
addIf(/senior copywriter/, "Senior Copywriter");

// =======================
// Emerging / Miscellaneous - Extended Minor Roles
// =======================
addIf(/junior blockchain developer/, "Junior Blockchain Developer");
addIf(/senior blockchain developer/, "Senior Blockchain Developer");
addIf(/blockchain analyst/, "Blockchain Analyst");
addIf(/junior crypto developer/, "Junior Crypto Developer");
addIf(/senior crypto developer/, "Senior Crypto Developer");
addIf(/ai solutions engineer/, "AI Solutions Engineer");
addIf(/ai strategy consultant/, "AI Strategy Consultant");
addIf(/robotics operations specialist/, "Robotics Operations Specialist");
addIf(/drone technician|drone operator/, "Drone Technician");
addIf(/renewable energy consultant/, "Renewable Energy Consultant");
addIf(/environmental analyst/, "Environmental Analyst");
addIf(/sustainability consultant/, "Sustainability Consultant");
addIf(/esg specialist/, "ESG Specialist");
addIf(/junior esg analyst/, "Junior ESG Analyst");
addIf(/senior esg analyst/, "Senior ESG Analyst");
addIf(/clean energy analyst/, "Clean Energy Analyst");
addIf(/energy efficiency specialist/, "Energy Efficiency Specialist");

// =======================
// Technology / IT / Software - Niche & Cross-disciplinary
// =======================
addIf(/ai operations specialist|ai ops specialist/, "AI Operations Specialist");
addIf(/machine learning ops specialist|ml ops specialist/, "Machine Learning Ops Specialist");
addIf(/ai deployment engineer/, "AI Deployment Engineer");
addIf(/ai integration engineer/, "AI Integration Engineer");
addIf(/cloud devops specialist|cloud devops engineer/, "Cloud DevOps Specialist");
addIf(/data platform specialist/, "Data Platform Specialist");
addIf(/data pipeline engineer|data engineering specialist/, "Data Pipeline Engineer");
addIf(/edge computing engineer/, "Edge Computing Engineer");
addIf(/iot cloud integration engineer/, "IoT Cloud Integration Engineer");
addIf(/iot security specialist/, "IoT Security Specialist");
addIf(/ar\/vr experience designer|xr experience designer/, "AR/VR Experience Designer");
addIf(/xr developer|extended reality developer/, "XR Developer");
addIf(/digital twin engineer/, "Digital Twin Engineer");
addIf(/quantum computing researcher/, "Quantum Computing Researcher");
addIf(/quantum software engineer/, "Quantum Software Engineer");
addIf(/full stack ai developer/, "Full Stack AI Developer");
addIf(/ai product engineer/, "AI Product Engineer");
addIf(/ai qa engineer/, "AI QA Engineer");
addIf(/ai ethics analyst/, "AI Ethics Analyst");
addIf(/robotics integration engineer/, "Robotics Integration Engineer");
addIf(/robotics process designer/, "Robotics Process Designer");
addIf(/ai game developer|game ai developer/, "AI Game Developer");
addIf(/simulation engineer|simulations engineer/, "Simulation Engineer");

// =======================
// Business / Finance - Niche & Emerging
// =======================
addIf(/fintech product manager/, "FinTech Product Manager");
addIf(/fintech analyst/, "FinTech Analyst");
addIf(/risk management consultant/, "Risk Management Consultant");
addIf(/internal controls specialist/, "Internal Controls Specialist");
addIf(/corporate strategy analyst/, "Corporate Strategy Analyst");
addIf(/vp of strategy|vice president of strategy/, "VP of Strategy");
addIf(/chief strategy officer|cso/, "Chief Strategy Officer");
addIf(/innovation manager/, "Innovation Manager");
addIf(/business transformation consultant/, "Business Transformation Consultant");
addIf(/digital transformation manager/, "Digital Transformation Manager");
addIf(/procurement consultant/, "Procurement Consultant");
addIf(/sourcing specialist/, "Sourcing Specialist");
addIf(/e-commerce manager|ecommerce manager/, "E-Commerce Manager");
addIf(/retail operations specialist/, "Retail Operations Specialist");
addIf(/business intelligence manager|bi manager/, "Business Intelligence Manager");

// =======================
// Healthcare / Life Sciences - Niche & Emerging
// =======================
addIf(/telemedicine specialist/, "Telemedicine Specialist");
addIf(/telehealth coordinator/, "Telehealth Coordinator");
addIf(/healthcare data scientist|health data scientist/, "Healthcare Data Scientist");
addIf(/clinical informatics specialist/, "Clinical Informatics Specialist");
addIf(/medical imaging analyst/, "Medical Imaging Analyst");
addIf(/medical device specialist/, "Medical Device Specialist");
addIf(/healthcare ai engineer/, "Healthcare AI Engineer");
addIf(/biomedical engineer/, "Biomedical Engineer");
addIf(/healthcare project manager/, "Healthcare Project Manager");
addIf(/pharmaceutical research scientist/, "Pharmaceutical Research Scientist");
addIf(/clinical trial data manager/, "Clinical Trial Data Manager");
addIf(/clinical operations manager/, "Clinical Operations Manager");
addIf(/genomic data analyst/, "Genomic Data Analyst");

// =======================
// Engineering / Manufacturing - Niche & Emerging
// =======================
addIf(/sustainable manufacturing engineer/, "Sustainable Manufacturing Engineer");
addIf(/industrial automation engineer/, "Industrial Automation Engineer");
addIf(/lean manufacturing specialist/, "Lean Manufacturing Specialist");
addIf(/six sigma consultant/, "Six Sigma Consultant");
addIf(/energy systems engineer/, "Energy Systems Engineer");
addIf(/electrical design engineer/, "Electrical Design Engineer");
addIf(/instrumentation engineer/, "Instrumentation Engineer");
addIf(/control systems engineer/, "Control Systems Engineer");
addIf(/cad designer|cad drafter/, "CAD Designer");
addIf(/3d printing engineer|additive manufacturing engineer/, "3D Printing Engineer");
addIf(/material scientist|materials scientist/, "Material Scientist");
addIf(/nanotechnology engineer|nano engineer/, "Nanotechnology Engineer");

// =======================
// Education / Training - Niche & Emerging
// =======================
addIf(/e-learning specialist|elearning specialist/, "E-Learning Specialist");
addIf(/online course developer/, "Online Course Developer");
addIf(/learning management system administrator|lms admin/, "Learning Management System Administrator");
addIf(/education technology specialist|edtech specialist/, "Education Technology Specialist");
addIf(/stem educator/, "STEM Educator");
addIf(/edtech consultant/, "EdTech Consultant");
addIf(/instructional technology coordinator/, "Instructional Technology Coordinator");
addIf(/curriculum specialist/, "Curriculum Specialist");

// =======================
// Legal / Government - Niche & Emerging
// =======================
addIf(/legal tech specialist/, "Legal Tech Specialist");
addIf(/intellectual property consultant|ip consultant/, "Intellectual Property Consultant");
addIf(/environmental law specialist/, "Environmental Law Specialist");
addIf(/cyber law analyst|cybersecurity legal analyst/, "Cyber Law Analyst");
addIf(/government policy coordinator/, "Government Policy Coordinator");
addIf(/public policy consultant/, "Public Policy Consultant");
addIf(/regulatory affairs manager/, "Regulatory Affairs Manager");

// =======================
// Hospitality / Tourism / Retail - Niche & Emerging
// =======================
addIf(/luxury hotel manager/, "Luxury Hotel Manager");
addIf(/resort manager/, "Resort Manager");
addIf(/event production manager/, "Event Production Manager");
addIf(/travel operations coordinator/, "Travel Operations Coordinator");
addIf(/retail merchandising specialist/, "Retail Merchandising Specialist");
addIf(/e-commerce operations specialist|ecommerce operations specialist/, "E-Commerce Operations Specialist");
addIf(/guest experience manager/, "Guest Experience Manager");
addIf(/food & beverage supervisor|f&b supervisor/, "Food & Beverage Supervisor");
addIf(/tourism operations manager/, "Tourism Operations Manager");

// =======================
// Logistics / Transportation - Niche & Emerging
// =======================
addIf(/logistics planning analyst/, "Logistics Planning Analyst");
addIf(/transportation planner/, "Transportation Planner");
addIf(/fleet operations analyst/, "Fleet Operations Analyst");
addIf(/warehouse process engineer/, "Warehouse Process Engineer");
addIf(/inventory optimization specialist/, "Inventory Optimization Specialist");
addIf(/supply chain data analyst/, "Supply Chain Data Analyst");
addIf(/global logistics coordinator/, "Global Logistics Coordinator");
addIf(/shipping operations manager/, "Shipping Operations Manager");

// =======================
// Creative / Design / Media - Niche & Emerging
// =======================
addIf(/vr\/ar content creator|xr content creator/, "VR/AR Content Creator");
addIf(/digital experience designer/, "Digital Experience Designer");
addIf(/ui motion designer/, "UI Motion Designer");
addIf(/ux researcher/, "UX Researcher");
addIf(/experience designer/, "Experience Designer");
addIf(/3d environment artist/, "3D Environment Artist");
addIf(/3d character designer/, "3D Character Designer");
addIf(/concept artist/, "Concept Artist");
addIf(/storyboarding specialist/, "Storyboarding Specialist");
addIf(/multimedia project manager/, "Multimedia Project Manager");
addIf(/creative producer/, "Creative Producer");

// =======================
// Emerging / Miscellaneous - Niche & Cross-disciplinary
// =======================
addIf(/ai health consultant/, "AI Health Consultant");
addIf(/ai legal consultant/, "AI Legal Consultant");
addIf(/blockchain business analyst/, "Blockchain Business Analyst");
addIf(/nft product designer/, "NFT Product Designer");
addIf(/sustainable energy consultant/, "Sustainable Energy Consultant");
addIf(/green tech specialist/, "Green Tech Specialist");
addIf(/esg reporting analyst/, "ESG Reporting Analyst");
addIf(/corporate sustainability officer/, "Corporate Sustainability Officer");
addIf(/cleantech developer/, "CleanTech Developer");
addIf(/drone operations manager/, "Drone Operations Manager");
addIf(/drone survey specialist/, "Drone Survey Specialist");
addIf(/space technology engineer/, "Space Technology Engineer");
addIf(/satellite operations analyst/, "Satellite Operations Analyst");
addIf(/autonomous vehicle engineer/, "Autonomous Vehicle Engineer");
addIf(/autonomous systems analyst/, "Autonomous Systems Analyst");

// =======================
// Technology / IT / Software - Ultra-Niche Roles
// =======================
addIf(/quantum software developer/, "Quantum Software Developer");
addIf(/quantum algorithm engineer/, "Quantum Algorithm Engineer");
addIf(/ai hardware specialist/, "AI Hardware Specialist");
addIf(/edge ai engineer/, "Edge AI Engineer");
addIf(/neural network specialist/, "Neural Network Specialist");
addIf(/deep reinforcement learning engineer|drl engineer/, "Deep Reinforcement Learning Engineer");
addIf(/robotics control engineer/, "Robotics Control Engineer");
addIf(/swarm robotics engineer/, "Swarm Robotics Engineer");
addIf(/autonomous drone developer/, "Autonomous Drone Developer");
addIf(/ar\/vr interaction designer/, "AR/VR Interaction Designer");
addIf(/xr experience manager|extended reality experience manager/, "XR Experience Manager");
addIf(/digital twin developer/, "Digital Twin Developer");
addIf(/cyber-physical systems engineer/, "Cyber-Physical Systems Engineer");
addIf(/iot security architect/, "IoT Security Architect");
addIf(/iot data analyst/, "IoT Data Analyst");
addIf(/ai game designer/, "AI Game Designer");
addIf(/ai ux designer/, "AI UX Designer");
addIf(/ai ethics engineer/, "AI Ethics Engineer");
addIf(/ai solutions consultant/, "AI Solutions Consultant");
addIf(/ai model validator/, "AI Model Validator");

// =======================
// Business / Finance - Ultra-Niche Roles
// =======================
addIf(/fintech risk analyst/, "FinTech Risk Analyst");
addIf(/fintech operations manager/, "FinTech Operations Manager");
addIf(/investment operations analyst/, "Investment Operations Analyst");
addIf(/corporate finance associate/, "Corporate Finance Associate");
addIf(/corporate finance manager/, "Corporate Finance Manager");
addIf(/m&a analyst|mergers and acquisitions analyst/, "M&A Analyst");
addIf(/m&a consultant|mergers and acquisitions consultant/, "M&A Consultant");
addIf(/private equity analyst/, "Private Equity Analyst");
addIf(/venture capital analyst/, "Venture Capital Analyst");
addIf(/venture capital associate/, "Venture Capital Associate");
addIf(/business transformation lead/, "Business Transformation Lead");
addIf(/innovation strategist/, "Innovation Strategist");
addIf(/digital strategy analyst/, "Digital Strategy Analyst");
addIf(/e-commerce strategy manager|ecommerce strategy manager/, "E-Commerce Strategy Manager");
addIf(/retail transformation consultant/, "Retail Transformation Consultant");
addIf(/revenue operations analyst/, "Revenue Operations Analyst");
addIf(/revenue operations manager/, "Revenue Operations Manager");
addIf(/business continuity specialist/, "Business Continuity Specialist");
addIf(/financial planning manager|fp&a manager/, "Financial Planning Manager");
addIf(/treasury specialist/, "Treasury Specialist");

// =======================
// Healthcare / Life Sciences - Ultra-Niche Roles
// =======================
addIf(/ai health solutions specialist/, "AI Health Solutions Specialist");
addIf(/clinical ai engineer/, "Clinical AI Engineer");
addIf(/genomics data scientist/, "Genomics Data Scientist");
addIf(/clinical bioinformatics specialist/, "Clinical Bioinformatics Specialist");
addIf(/telemedicine program manager/, "Telemedicine Program Manager");
addIf(/healthcare operations analyst/, "Healthcare Operations Analyst");
addIf(/healthcare innovation manager/, "Healthcare Innovation Manager");
addIf(/clinical trial project manager/, "Clinical Trial Project Manager");
addIf(/healthcare compliance analyst/, "Healthcare Compliance Analyst");
addIf(/medical device data analyst/, "Medical Device Data Analyst");
addIf(/healthcare strategy consultant/, "Healthcare Strategy Consultant");
addIf(/public health program manager/, "Public Health Program Manager");
addIf(/population health analyst/, "Population Health Analyst");
addIf(/healthcare risk manager/, "Healthcare Risk Manager");
addIf(/medical robotics engineer/, "Medical Robotics Engineer");
addIf(/bioinformatics analyst/, "Bioinformatics Analyst");
addIf(/precision medicine specialist/, "Precision Medicine Specialist");
addIf(/medical ai researcher/, "Medical AI Researcher");
addIf(/health it consultant/, "Health IT Consultant");
addIf(/digital health specialist/, "Digital Health Specialist");

// =======================
// Engineering / Manufacturing - Ultra-Niche Roles
// =======================
addIf(/advanced manufacturing engineer/, "Advanced Manufacturing Engineer");
addIf(/nanotechnology research engineer/, "Nanotechnology Research Engineer");
addIf(/smart factory engineer/, "Smart Factory Engineer");
addIf(/industrial ai engineer/, "Industrial AI Engineer");
addIf(/industrial iot specialist/, "Industrial IoT Specialist");
addIf(/automation integration engineer/, "Automation Integration Engineer");
addIf(/energy optimization engineer/, "Energy Optimization Engineer");
addIf(/sustainable materials engineer/, "Sustainable Materials Engineer");
addIf(/cad\/cam specialist|cad cam specialist/, "CAD/CAM Specialist");
addIf(/mechatronics engineer/, "Mechatronics Engineer");
addIf(/mechanical systems analyst/, "Mechanical Systems Analyst");
addIf(/process innovation engineer/, "Process Innovation Engineer");
addIf(/manufacturing strategy consultant/, "Manufacturing Strategy Consultant");
addIf(/industrial data analyst/, "Industrial Data Analyst");
addIf(/robotics systems architect/, "Robotics Systems Architect");
addIf(/advanced robotics engineer/, "Advanced Robotics Engineer");
addIf(/smart grid engineer/, "Smart Grid Engineer");
addIf(/industrial safety specialist/, "Industrial Safety Specialist");
addIf(/maintenance strategy manager/, "Maintenance Strategy Manager");
addIf(/production optimization specialist/, "Production Optimization Specialist");

// =======================
// Education / Training - Ultra-Niche Roles
// =======================
addIf(/learning analytics specialist/, "Learning Analytics Specialist");
addIf(/ai education consultant/, "AI Education Consultant");
addIf(/edtech product manager/, "EdTech Product Manager");
addIf(/online curriculum specialist/, "Online Curriculum Specialist");
addIf(/adaptive learning designer/, "Adaptive Learning Designer");
addIf(/gamification designer/, "Gamification Designer");
addIf(/stem program coordinator/, "STEM Program Coordinator");
addIf(/e-learning platform manager|elearning platform manager/, "E-Learning Platform Manager");
addIf(/virtual classroom designer/, "Virtual Classroom Designer");
addIf(/instructional technology specialist/, "Instructional Technology Specialist");
addIf(/learning experience manager/, "Learning Experience Manager");
addIf(/academic technology consultant/, "Academic Technology Consultant");
addIf(/curriculum innovation specialist/, "Curriculum Innovation Specialist");
addIf(/education data analyst/, "Education Data Analyst");
addIf(/education operations manager/, "Education Operations Manager");
addIf(/faculty development coordinator/, "Faculty Development Coordinator");
addIf(/online learning strategist/, "Online Learning Strategist");
addIf(/training program manager/, "Training Program Manager");
addIf(/corporate learning specialist/, "Corporate Learning Specialist");
addIf(/educational ai specialist/, "Educational AI Specialist");

// =======================
// Legal / Government - Ultra-Niche Roles
// =======================
addIf(/cybersecurity legal consultant/, "Cybersecurity Legal Consultant");
addIf(/blockchain legal analyst/, "Blockchain Legal Analyst");
addIf(/digital law specialist/, "Digital Law Specialist");
addIf(/intellectual property manager|ip manager/, "Intellectual Property Manager");
addIf(/ip analyst/, "IP Analyst");
addIf(/policy innovation analyst/, "Policy Innovation Analyst");
addIf(/government technology officer/, "Government Technology Officer");
addIf(/regulatory technology specialist/, "Regulatory Technology Specialist");
addIf(/public sector strategy consultant/, "Public Sector Strategy Consultant");
addIf(/government data analyst/, "Government Data Analyst");
addIf(/legal data analyst/, "Legal Data Analyst");
addIf(/legal operations manager/, "Legal Operations Manager");
addIf(/government program manager/, "Government Program Manager");
addIf(/regulatory compliance specialist/, "Regulatory Compliance Specialist");
addIf(/environmental policy analyst/, "Environmental Policy Analyst");
addIf(/legal technology manager/, "Legal Technology Manager");
addIf(/cyber law consultant/, "Cyber Law Consultant");
addIf(/public policy strategist/, "Public Policy Strategist");
addIf(/digital policy analyst/, "Digital Policy Analyst");
addIf(/legal risk analyst/, "Legal Risk Analyst");

// =======================
// Hospitality / Tourism / Retail - Ultra-Niche Roles
// =======================
addIf(/luxury resort operations manager/, "Luxury Resort Operations Manager");
addIf(/travel technology specialist/, "Travel Technology Specialist");
addIf(/tourism analytics specialist/, "Tourism Analytics Specialist");
addIf(/event technology coordinator/, "Event Technology Coordinator");
addIf(/customer experience designer/, "Customer Experience Designer");
addIf(/retail transformation manager/, "Retail Transformation Manager");
addIf(/e-commerce operations manager|ecommerce operations manager/, "E-Commerce Operations Manager");
addIf(/food & beverage director|f&b director/, "Food & Beverage Director");
addIf(/hotel operations analyst/, "Hotel Operations Analyst");
addIf(/guest experience coordinator/, "Guest Experience Coordinator");
addIf(/restaurant operations analyst/, "Restaurant Operations Analyst");
addIf(/travel experience designer/, "Travel Experience Designer");
addIf(/tourism innovation specialist/, "Tourism Innovation Specialist");
addIf(/hotel technology manager/, "Hotel Technology Manager");
addIf(/hospitality data analyst/, "Hospitality Data Analyst");
addIf(/retail product analyst/, "Retail Product Analyst");
addIf(/retail marketing analyst/, "Retail Marketing Analyst");
addIf(/tourism strategy consultant/, "Tourism Strategy Consultant");
addIf(/luxury brand consultant/, "Luxury Brand Consultant");
addIf(/hospitality operations manager/, "Hospitality Operations Manager");

// =======================
// Logistics / Transportation - Ultra-Niche Roles
// =======================
addIf(/autonomous vehicle analyst/, "Autonomous Vehicle Analyst");
addIf(/fleet data analyst/, "Fleet Data Analyst");
addIf(/logistics strategy consultant/, "Logistics Strategy Consultant");
addIf(/smart logistics engineer/, "Smart Logistics Engineer");
addIf(/warehouse robotics specialist/, "Warehouse Robotics Specialist");
addIf(/transportation systems analyst/, "Transportation Systems Analyst");
addIf(/supply chain ai specialist/, "Supply Chain AI Specialist");
addIf(/shipping operations analyst/, "Shipping Operations Analyst");
addIf(/logistics technology manager/, "Logistics Technology Manager");
addIf(/fleet optimization specialist/, "Fleet Optimization Specialist");
addIf(/global supply chain analyst/, "Global Supply Chain Analyst");
addIf(/inventory strategy manager/, "Inventory Strategy Manager");
addIf(/transportation operations manager/, "Transportation Operations Manager");
addIf(/warehouse automation engineer/, "Warehouse Automation Engineer");
addIf(/logistics innovation specialist/, "Logistics Innovation Specialist");
addIf(/distribution network analyst/, "Distribution Network Analyst");
addIf(/freight optimization analyst/, "Freight Optimization Analyst");
addIf(/last-mile delivery coordinator/, "Last-Mile Delivery Coordinator");
addIf(/smart fleet manager/, "Smart Fleet Manager");
addIf(/autonomous logistics engineer/, "Autonomous Logistics Engineer");

// =======================
// Creative / Design / Media - Ultra-Niche Roles
// =======================
addIf(/xr content designer/, "XR Content Designer");
addIf(/vr experience producer/, "VR Experience Producer");
addIf(/ai creative designer/, "AI Creative Designer");
addIf(/creative technology specialist/, "Creative Technology Specialist");
addIf(/3d xr designer/, "3D XR Designer");
addIf(/motion graphics specialist/, "Motion Graphics Specialist");
addIf(/digital experience producer/, "Digital Experience Producer");
addIf(/ui\/ux interaction specialist/, "UI/UX Interaction Specialist");
addIf(/creative innovation manager/, "Creative Innovation Manager");
addIf(/game narrative designer/, "Game Narrative Designer");
addIf(/multimedia interaction designer/, "Multimedia Interaction Designer");
addIf(/3d environment specialist/, "3D Environment Specialist");
addIf(/3d character animator/, "3D Character Animator");
addIf(/storytelling designer/, "Storytelling Designer");
addIf(/digital experience manager/, "Digital Experience Manager");
addIf(/ai art specialist/, "AI Art Specialist");
addIf(/virtual production designer/, "Virtual Production Designer");
addIf(/multimedia strategy consultant/, "Multimedia Strategy Consultant");
addIf(/content technology specialist/, "Content Technology Specialist");
addIf(/interactive media designer/, "Interactive Media Designer");

// =======================
// Emerging / Miscellaneous - Ultra-Niche Roles
// =======================
addIf(/cleantech innovation specialist/, "CleanTech Innovation Specialist");
addIf(/sustainable energy data analyst/, "Sustainable Energy Data Analyst");
addIf(/esg strategy consultant/, "ESG Strategy Consultant");
addIf(/green technology manager/, "Green Technology Manager");
addIf(/autonomous systems consultant/, "Autonomous Systems Consultant");
addIf(/space systems analyst/, "Space Systems Analyst");
addIf(/satellite technology engineer/, "Satellite Technology Engineer");
addIf(/drone mapping specialist/, "Drone Mapping Specialist");
addIf(/drone survey engineer/, "Drone Survey Engineer");
addIf(/ai-blockchain consultant|ai blockchain consultant/, "AI-Blockchain Consultant");
addIf(/nft strategy specialist/, "NFT Strategy Specialist");
addIf(/smart city technology analyst/, "Smart City Technology Analyst");
addIf(/energy policy analyst/, "Energy Policy Analyst");
addIf(/renewable energy project manager/, "Renewable Energy Project Manager");
addIf(/sustainable transportation analyst/, "Sustainable Transportation Analyst");
addIf(/environmental innovation specialist/, "Environmental Innovation Specialist");
addIf(/corporate sustainability analyst/, "Corporate Sustainability Analyst");
addIf(/ai-healthcare integration specialist|ai healthcare integration specialist/, "AI-Healthcare Integration Specialist");
addIf(/bioinformatics ai specialist/, "Bioinformatics AI Specialist");
addIf(/digital health technology manager/, "Digital Health Technology Manager");

// =======================
// Technology / IT / Software - Cutting-edge & Fringe
// =======================
addIf(/quantum systems engineer/, "Quantum Systems Engineer");
addIf(/quantum algorithm developer/, "Quantum Algorithm Developer");
addIf(/quantum cryptography specialist/, "Quantum Cryptography Specialist");
addIf(/neuromorphic computing engineer/, "Neuromorphic Computing Engineer");
addIf(/brain-computer interface developer|bci developer/, "Brain-Computer Interface Developer");
addIf(/cognitive ai engineer/, "Cognitive AI Engineer");
addIf(/explainable ai specialist/, "Explainable AI Specialist");
addIf(/ai fairness analyst/, "AI Fairness Analyst");
addIf(/synthetic data engineer/, "Synthetic Data Engineer");
addIf(/ai simulation developer/, "AI Simulation Developer");
addIf(/ai performance engineer/, "AI Performance Engineer");
addIf(/autonomous ai system designer/, "Autonomous AI System Designer");
addIf(/ai-driven robotics engineer|ai driven robotics engineer/, "AI-Driven Robotics Engineer");
addIf(/robotics simulation engineer/, "Robotics Simulation Engineer");
addIf(/hci specialist|human-computer interaction specialist/, "HCI Specialist");
addIf(/human-robot interaction engineer/, "Human-Robot Interaction Engineer");
addIf(/digital twin analyst/, "Digital Twin Analyst");
addIf(/ai governance specialist/, "AI Governance Specialist");
addIf(/ai product compliance specialist/, "AI Product Compliance Specialist");
addIf(/machine learning infrastructure engineer/, "Machine Learning Infrastructure Engineer");

// =======================
// Business / Finance - Cutting-edge & Fringe
// =======================
addIf(/ai-driven finance analyst|ai driven finance analyst/, "AI-Driven Finance Analyst");
addIf(/fintech product analyst/, "FinTech Product Analyst");
addIf(/regtech analyst/, "RegTech Analyst");
addIf(/digital asset manager/, "Digital Asset Manager");
addIf(/crypto compliance officer/, "Crypto Compliance Officer");
addIf(/smart contract auditor/, "Smart Contract Auditor");
addIf(/defi analyst/, "DeFi Analyst");
addIf(/nft marketplace specialist/, "NFT Marketplace Specialist");
addIf(/tokenomics analyst/, "Tokenomics Analyst");
addIf(/blockchain strategy manager/, "Blockchain Strategy Manager");
addIf(/digital payments analyst/, "Digital Payments Analyst");
addIf(/financial innovation specialist/, "Financial Innovation Specialist");
addIf(/ai business consultant/, "AI Business Consultant");
addIf(/financial data scientist/, "Financial Data Scientist");
addIf(/algorithmic trading engineer/, "Algorithmic Trading Engineer");
addIf(/hedge fund ai specialist/, "Hedge Fund AI Specialist");
addIf(/venture analytics specialist/, "Venture Analytics Specialist");
addIf(/corporate innovation analyst/, "Corporate Innovation Analyst");
addIf(/business intelligence strategist/, "Business Intelligence Strategist");
addIf(/finance transformation manager/, "Finance Transformation Manager");

// =======================
// Healthcare / Life Sciences - Cutting-edge & Fringe
// =======================
addIf(/bioinformatics ai engineer/, "Bioinformatics AI Engineer");
addIf(/clinical genomics specialist/, "Clinical Genomics Specialist");
addIf(/precision medicine data scientist/, "Precision Medicine Data Scientist");
addIf(/healthcare robotics specialist/, "Healthcare Robotics Specialist");
addIf(/medical device ai developer/, "Medical Device AI Developer");
addIf(/healthcare simulation engineer/, "Healthcare Simulation Engineer");
addIf(/telehealth ai specialist/, "Telehealth AI Specialist");
addIf(/digital therapeutics analyst/, "Digital Therapeutics Analyst");
addIf(/population health data scientist/, "Population Health Data Scientist");
addIf(/pharma data analyst/, "Pharma Data Analyst");
addIf(/clinical operations ai analyst/, "Clinical Operations AI Analyst");
addIf(/healthcare innovation consultant/, "Healthcare Innovation Consultant");
addIf(/healthcare technology strategist/, "Healthcare Technology Strategist");
addIf(/medical ai compliance officer/, "Medical AI Compliance Officer");
addIf(/biomedical ai researcher/, "Biomedical AI Researcher");
addIf(/neuroinformatics specialist/, "Neuroinformatics Specialist");
addIf(/ai drug discovery specialist/, "AI Drug Discovery Specialist");
addIf(/clinical ai model validator/, "Clinical AI Model Validator");
addIf(/medical imaging ai specialist/, "Medical Imaging AI Specialist");
addIf(/healthtech product manager/, "HealthTech Product Manager");

// =======================
// Engineering / Manufacturing - Cutting-edge & Fringe
// =======================
addIf(/smart materials engineer/, "Smart Materials Engineer");
addIf(/nano-engineering specialist/, "Nano-Engineering Specialist");
addIf(/industrial iot data scientist/, "Industrial IoT Data Scientist");
addIf(/sustainable manufacturing strategist/, "Sustainable Manufacturing Strategist");
addIf(/robotics systems integration engineer/, "Robotics Systems Integration Engineer");
addIf(/advanced robotics programmer/, "Advanced Robotics Programmer");
addIf(/industrial ai systems analyst/, "Industrial AI Systems Analyst");
addIf(/additive manufacturing specialist/, "Additive Manufacturing Specialist");
addIf(/3d printing engineer/, "3D Printing Engineer");
addIf(/manufacturing automation analyst/, "Manufacturing Automation Analyst");
addIf(/energy efficiency data analyst/, "Energy Efficiency Data Analyst");
addIf(/process innovation data scientist/, "Process Innovation Data Scientist");
addIf(/industrial sustainability consultant/, "Industrial Sustainability Consultant");
addIf(/smart factory integration engineer/, "Smart Factory Integration Engineer");
addIf(/lean automation specialist/, "Lean Automation Specialist");
addIf(/cyber-physical manufacturing engineer/, "Cyber-Physical Manufacturing Engineer");
addIf(/industrial simulation engineer/, "Industrial Simulation Engineer");
addIf(/advanced control systems engineer/, "Advanced Control Systems Engineer");
addIf(/robotics maintenance engineer/, "Robotics Maintenance Engineer");
addIf(/manufacturing strategy analyst/, "Manufacturing Strategy Analyst");

// =======================
// Education / Training - Cutting-edge & Fringe
// =======================
addIf(/ai learning analyst/, "AI Learning Analyst");
addIf(/edtech data scientist/, "EdTech Data Scientist");
addIf(/adaptive learning ai specialist/, "Adaptive Learning AI Specialist");
addIf(/online learning analytics specialist/, "Online Learning Analytics Specialist");
addIf(/digital learning designer/, "Digital Learning Designer");
addIf(/virtual classroom analyst/, "Virtual Classroom Analyst");
addIf(/gamified learning designer/, "Gamified Learning Designer");
addIf(/learning experience data scientist/, "Learning Experience Data Scientist");
addIf(/education technology manager/, "Education Technology Manager");
addIf(/learning innovation consultant/, "Learning Innovation Consultant");
addIf(/curriculum ai integration specialist/, "Curriculum AI Integration Specialist");
addIf(/stem ai program coordinator/, "STEM AI Program Coordinator");
addIf(/instructional analytics specialist/, "Instructional Analytics Specialist");
addIf(/online education strategist/, "Online Education Strategist");
addIf(/corporate learning data scientist/, "Corporate Learning Data Scientist");
addIf(/virtual training designer/, "Virtual Training Designer");
addIf(/academic technology analyst/, "Academic Technology Analyst");
addIf(/learning operations manager/, "Learning Operations Manager");
addIf(/edtech product analyst/, "EdTech Product Analyst");
addIf(/adaptive curriculum specialist/, "Adaptive Curriculum Specialist");

// =======================
// Legal / Government - Cutting-edge & Fringe
// =======================
addIf(/ai legal operations specialist/, "AI Legal Operations Specialist");
addIf(/digital law technology analyst/, "Digital Law Technology Analyst");
addIf(/cybersecurity policy analyst/, "Cybersecurity Policy Analyst");
addIf(/blockchain legal strategist/, "Blockchain Legal Strategist");
addIf(/government technology analyst/, "Government Technology Analyst");
addIf(/regulatory technology consultant/, "Regulatory Technology Consultant");
addIf(/legal tech product manager/, "Legal Tech Product Manager");
addIf(/public policy ai analyst/, "Public Policy AI Analyst");
addIf(/digital compliance officer/, "Digital Compliance Officer");
addIf(/intellectual property data analyst|ip data analyst/, "Intellectual Property Data Analyst");
addIf(/environmental law technology specialist/, "Environmental Law Technology Specialist");
addIf(/cyber law policy analyst/, "Cyber Law Policy Analyst");
addIf(/ai governance legal analyst/, "AI Governance Legal Analyst");
addIf(/blockchain compliance consultant/, "Blockchain Compliance Consultant");
addIf(/regtech product manager/, "RegTech Product Manager");
addIf(/legal innovation specialist/, "Legal Innovation Specialist");
addIf(/government data strategy analyst/, "Government Data Strategy Analyst");
addIf(/public sector technology analyst/, "Public Sector Technology Analyst");
addIf(/legal risk technology analyst/, "Legal Risk Technology Analyst");
addIf(/regulatory innovation manager/, "Regulatory Innovation Manager");

// =======================
// Hospitality / Tourism / Retail - Cutting-edge & Fringe
// =======================
addIf(/ai guest experience analyst/, "AI Guest Experience Analyst");
addIf(/smart hotel operations specialist/, "Smart Hotel Operations Specialist");
addIf(/digital hospitality analyst/, "Digital Hospitality Analyst");
addIf(/luxury experience designer/, "Luxury Experience Designer");
addIf(/tourism innovation manager/, "Tourism Innovation Manager");
addIf(/e-commerce experience specialist|ecommerce experience specialist/, "E-Commerce Experience Specialist");
addIf(/retail data analyst/, "Retail Data Analyst");
addIf(/ai retail operations analyst/, "AI Retail Operations Analyst");
addIf(/customer journey analyst/, "Customer Journey Analyst");
addIf(/smart resort data specialist/, "Smart Resort Data Specialist");
addIf(/digital tourism strategist/, "Digital Tourism Strategist");
addIf(/hospitality tech product manager/, "Hospitality Tech Product Manager");
addIf(/foodtech innovation specialist/, "FoodTech Innovation Specialist");
addIf(/event technology analyst/, "Event Technology Analyst");
addIf(/luxury brand data analyst/, "Luxury Brand Data Analyst");
addIf(/hotel automation engineer/, "Hotel Automation Engineer");
addIf(/tourism data scientist/, "Tourism Data Scientist");
addIf(/guest experience innovation manager/, "Guest Experience Innovation Manager");
addIf(/retail technology specialist/, "Retail Technology Specialist");
addIf(/smart retail innovation manager/, "Smart Retail Innovation Manager");

// =======================
// Logistics / Transportation - Cutting-edge & Fringe
// =======================
addIf(/autonomous vehicle data scientist/, "Autonomous Vehicle Data Scientist");
addIf(/autonomous fleet operations specialist/, "Autonomous Fleet Operations Specialist");
addIf(/smart logistics data analyst/, "Smart Logistics Data Analyst");
addIf(/logistics ai strategy consultant/, "Logistics AI Strategy Consultant");
addIf(/supply chain digital analyst/, "Supply Chain Digital Analyst");
addIf(/warehouse automation data analyst/, "Warehouse Automation Data Analyst");
addIf(/transportation analytics specialist/, "Transportation Analytics Specialist");
addIf(/autonomous delivery specialist/, "Autonomous Delivery Specialist");
addIf(/smart distribution analyst/, "Smart Distribution Analyst");
addIf(/global supply chain ai specialist/, "Global Supply Chain AI Specialist");
addIf(/logistics technology product manager/, "Logistics Technology Product Manager");
addIf(/autonomous fleet strategy analyst/, "Autonomous Fleet Strategy Analyst");
addIf(/intelligent transportation systems analyst/, "Intelligent Transportation Systems Analyst");
addIf(/freight ai operations specialist/, "Freight AI Operations Specialist");
addIf(/last-mile delivery ai analyst/, "Last-Mile Delivery AI Analyst");
addIf(/drone logistics analyst/, "Drone Logistics Analyst");
addIf(/smart fleet data scientist/, "Smart Fleet Data Scientist");
addIf(/transportation innovation manager/, "Transportation Innovation Manager");
addIf(/supply chain sustainability analyst/, "Supply Chain Sustainability Analyst");
addIf(/logistics operations strategist/, "Logistics Operations Strategist");

// =======================
// Creative / Design / Media - Cutting-edge & Fringe
// =======================
addIf(/xr creative director/, "XR Creative Director");
addIf(/vr experience designer/, "VR Experience Designer");
addIf(/ar content strategist/, "AR Content Strategist");
addIf(/ai creative producer/, "AI Creative Producer");
addIf(/interactive media specialist/, "Interactive Media Specialist");
addIf(/3d xr content designer/, "3D XR Content Designer");
addIf(/vr game producer/, "VR Game Producer");
addIf(/xr user experience designer/, "XR User Experience Designer");
addIf(/digital interaction designer/, "Digital Interaction Designer");
addIf(/motion ai designer/, "Motion AI Designer");
addIf(/ai multimedia specialist/, "AI Multimedia Specialist");
addIf(/virtual production analyst/, "Virtual Production Analyst");
addIf(/immersive experience designer/, "Immersive Experience Designer");
addIf(/game ai designer/, "Game AI Designer");
addIf(/interactive storytelling specialist/, "Interactive Storytelling Specialist");
addIf(/creative xr producer/, "Creative XR Producer");
addIf(/ai animation specialist/, "AI Animation Specialist");
addIf(/digital experience data analyst/, "Digital Experience Data Analyst");
addIf(/ai visual designer/, "AI Visual Designer");
addIf(/xr product manager/, "XR Product Manager");

// =======================
// Emerging / Miscellaneous - Cutting-edge & Fringe
// =======================
addIf(/ai sustainability analyst/, "AI Sustainability Analyst");
addIf(/cleantech data scientist/, "CleanTech Data Scientist");
addIf(/green technology data analyst/, "Green Technology Data Analyst");
addIf(/corporate esg data scientist/, "Corporate ESG Data Scientist");
addIf(/renewable energy ai specialist/, "Renewable Energy AI Specialist");
addIf(/energy optimization analyst/, "Energy Optimization Analyst");
addIf(/autonomous systems product manager/, "Autonomous Systems Product Manager");
addIf(/drone ai engineer/, "Drone AI Engineer");
addIf(/satellite technology analyst/, "Satellite Technology Analyst");
addIf(/space ai engineer/, "Space AI Engineer");
addIf(/bioinformatics ai consultant/, "Bioinformatics AI Consultant");
addIf(/digital health ai analyst/, "Digital Health AI Analyst");
addIf(/medical robotics data analyst/, "Medical Robotics Data Analyst");
addIf(/smart city technology specialist/, "Smart City Technology Specialist");
addIf(/autonomous transportation ai specialist/, "Autonomous Transportation AI Specialist");
addIf(/esg technology consultant/, "ESG Technology Consultant");
addIf(/sustainable tech product manager/, "Sustainable Tech Product Manager");
addIf(/climate data scientist/, "Climate Data Scientist");
addIf(/smart infrastructure analyst/, "Smart Infrastructure Analyst");
addIf(/digital sustainability strategist/, "Digital Sustainability Strategist");

// =======================
// Technology / IT / Software - Fringe & Emerging
// =======================
addIf(/ai robotics integration specialist/, "AI Robotics Integration Specialist");
addIf(/cognitive systems engineer/, "Cognitive Systems Engineer");
addIf(/edge ai developer/, "Edge AI Developer");
addIf(/ai ethics consultant/, "AI Ethics Consultant");
addIf(/synthetic data scientist/, "Synthetic Data Scientist");
addIf(/ai model governance specialist/, "AI Model Governance Specialist");
addIf(/autonomous systems designer/, "Autonomous Systems Designer");
addIf(/ai-powered simulation engineer|ai powered simulation engineer/, "AI-Powered Simulation Engineer");
addIf(/quantum ai researcher/, "Quantum AI Researcher");
addIf(/neural interface developer/, "Neural Interface Developer");
addIf(/brain-computer interface engineer|bci engineer/, "Brain-Computer Interface Engineer");
addIf(/explainable ai designer/, "Explainable AI Designer");
addIf(/ai-powered iot specialist|ai powered iot specialist/, "AI-Powered IoT Specialist");
addIf(/ai-powered cloud specialist|ai powered cloud specialist/, "AI-Powered Cloud Specialist");
addIf(/hybrid cloud ai engineer/, "Hybrid Cloud AI Engineer");
addIf(/ai-driven devops engineer|ai driven devops engineer/, "AI-Driven DevOps Engineer");
addIf(/ai-enhanced security analyst|ai enhanced security analyst/, "AI-Enhanced Security Analyst");
addIf(/ai-powered qa engineer|ai powered qa engineer/, "AI-Powered QA Engineer");
addIf(/ai operations analyst/, "AI Operations Analyst");
addIf(/ai-powered analytics consultant|ai powered analytics consultant/, "AI-Powered Analytics Consultant");

// =======================
// Business / Finance - Fringe & Emerging
// =======================
addIf(/ai financial strategist/, "AI Financial Strategist");
addIf(/blockchain compliance specialist/, "Blockchain Compliance Specialist");
addIf(/digital asset analyst/, "Digital Asset Analyst");
addIf(/defi product manager/, "DeFi Product Manager");
addIf(/crypto operations analyst/, "Crypto Operations Analyst");
addIf(/nft strategy consultant/, "NFT Strategy Consultant");
addIf(/smart contract compliance officer/, "Smart Contract Compliance Officer");
addIf(/fintech innovation specialist/, "FinTech Innovation Specialist");
addIf(/ai-powered investment analyst|ai powered investment analyst/, "AI-Powered Investment Analyst");
addIf(/financial data governance analyst/, "Financial Data Governance Analyst");
addIf(/regtech product analyst/, "RegTech Product Analyst");
addIf(/digital banking specialist/, "Digital Banking Specialist");
addIf(/wealthtech analyst/, "WealthTech Analyst");
addIf(/financial innovation manager/, "Financial Innovation Manager");
addIf(/algorithmic finance specialist/, "Algorithmic Finance Specialist");
addIf(/venture tech analyst/, "Venture Tech Analyst");
addIf(/corporate digital strategy analyst/, "Corporate Digital Strategy Analyst");
addIf(/business intelligence transformation specialist/, "Business Intelligence Transformation Specialist");
addIf(/finance transformation consultant/, "Finance Transformation Consultant");
addIf(/ai-powered risk analyst|ai powered risk analyst/, "AI-Powered Risk Analyst");

// =======================
// Healthcare / Life Sciences - Fringe & Emerging
// =======================
addIf(/ai-powered healthcare analyst|ai powered healthcare analyst/, "AI-Powered Healthcare Analyst");
addIf(/precision medicine data analyst/, "Precision Medicine Data Analyst");
addIf(/telemedicine ai consultant/, "Telemedicine AI Consultant");
addIf(/healthcare ai operations manager/, "Healthcare AI Operations Manager");
addIf(/clinical ai project manager/, "Clinical AI Project Manager");
addIf(/medical device ai specialist/, "Medical Device AI Specialist");
addIf(/healthtech data engineer/, "HealthTech Data Engineer");
addIf(/population health ai analyst/, "Population Health AI Analyst");
addIf(/ai-driven biomedical engineer|ai driven biomedical engineer/, "AI-Driven Biomedical Engineer");
addIf(/healthcare simulation specialist/, "Healthcare Simulation Specialist");
addIf(/medical robotics integration engineer/, "Medical Robotics Integration Engineer");
addIf(/clinical ai strategy consultant/, "Clinical AI Strategy Consultant");
addIf(/bioinformatics ai developer/, "Bioinformatics AI Developer");
addIf(/digital health ai specialist/, "Digital Health AI Specialist");
addIf(/healthcare innovation analyst/, "Healthcare Innovation Analyst");
addIf(/medical ai validation engineer/, "Medical AI Validation Engineer");
addIf(/ai-driven drug discovery analyst|ai driven drug discovery analyst/, "AI-Driven Drug Discovery Analyst");
addIf(/neuroinformatics ai specialist/, "Neuroinformatics AI Specialist");
addIf(/telehealth operations analyst/, "Telehealth Operations Analyst");
addIf(/medical analytics specialist/, "Medical Analytics Specialist");

// =======================
// Engineering / Manufacturing - Fringe & Emerging
// =======================
addIf(/ai-driven manufacturing analyst|ai driven manufacturing analyst/, "AI-Driven Manufacturing Analyst");
addIf(/smart factory data engineer/, "Smart Factory Data Engineer");
addIf(/industrial iot ai engineer/, "Industrial IoT AI Engineer");
addIf(/sustainable manufacturing data scientist/, "Sustainable Manufacturing Data Scientist");
addIf(/robotics systems integration specialist/, "Robotics Systems Integration Specialist");
addIf(/advanced manufacturing data analyst/, "Advanced Manufacturing Data Analyst");
addIf(/automation strategy consultant/, "Automation Strategy Consultant");
addIf(/additive manufacturing specialist/, "Additive Manufacturing Specialist");
addIf(/nanotechnology data scientist/, "Nanotechnology Data Scientist");
addIf(/process optimization ai specialist/, "Process Optimization AI Specialist");
addIf(/industrial ai product manager/, "Industrial AI Product Manager");
addIf(/energy systems data analyst/, "Energy Systems Data Analyst");
addIf(/manufacturing innovation specialist/, "Manufacturing Innovation Specialist");
addIf(/industrial robotics ai engineer/, "Industrial Robotics AI Engineer");
addIf(/smart grid data analyst/, "Smart Grid Data Analyst");
addIf(/mechatronics data engineer/, "Mechatronics Data Engineer");
addIf(/lean automation data analyst/, "Lean Automation Data Analyst");
addIf(/cyber-physical manufacturing data scientist/, "Cyber-Physical Manufacturing Data Scientist");
addIf(/robotics maintenance data analyst/, "Robotics Maintenance Data Analyst");
addIf(/manufacturing strategy ai consultant/, "Manufacturing Strategy AI Consultant");

// =======================
// Education / Training - Fringe & Emerging
// =======================
addIf(/ai-enhanced learning analyst|ai enhanced learning analyst/, "AI-Enhanced Learning Analyst");
addIf(/adaptive learning data scientist/, "Adaptive Learning Data Scientist");
addIf(/online learning analytics consultant/, "Online Learning Analytics Consultant");
addIf(/edtech ai specialist/, "EdTech AI Specialist");
addIf(/learning experience ai designer/, "Learning Experience AI Designer");
addIf(/virtual classroom ai engineer/, "Virtual Classroom AI Engineer");
addIf(/gamified learning data analyst/, "Gamified Learning Data Analyst");
addIf(/education technology ai consultant/, "Education Technology AI Consultant");
addIf(/ai-powered curriculum specialist|ai powered curriculum specialist/, "AI-Powered Curriculum Specialist");
addIf(/instructional analytics ai specialist/, "Instructional Analytics AI Specialist");
addIf(/learning operations data scientist/, "Learning Operations Data Scientist");
addIf(/education innovation ai consultant/, "Education Innovation AI Consultant");
addIf(/corporate learning ai analyst/, "Corporate Learning AI Analyst");
addIf(/stem ai education specialist/, "STEM AI Education Specialist");
addIf(/e-learning ai product manager|e learning ai product manager/, "E-Learning AI Product Manager");
addIf(/adaptive curriculum ai specialist/, "Adaptive Curriculum AI Specialist");
addIf(/instructional design ai analyst/, "Instructional Design AI Analyst");
addIf(/edtech product ai manager/, "EdTech Product AI Manager");
addIf(/digital learning ai strategist/, "Digital Learning AI Strategist");
addIf(/ai-powered training designer|ai powered training designer/, "AI-Powered Training Designer");

// =======================
// Legal / Government - Fringe & Emerging
// =======================
addIf(/ai legal analytics specialist/, "AI Legal Analytics Specialist");
addIf(/digital law ai consultant/, "Digital Law AI Consultant");
addIf(/blockchain legal compliance analyst/, "Blockchain Legal Compliance Analyst");
addIf(/regtech ai specialist/, "RegTech AI Specialist");
addIf(/government ai strategy analyst/, "Government AI Strategy Analyst");
addIf(/public policy ai consultant/, "Public Policy AI Consultant");
addIf(/legal operations ai analyst/, "Legal Operations AI Analyst");
addIf(/cyber law ai specialist/, "Cyber Law AI Specialist");
addIf(/ai governance legal consultant/, "AI Governance Legal Consultant");
addIf(/regulatory technology ai analyst/, "Regulatory Technology AI Analyst");
addIf(/intellectual property ai analyst|ip ai analyst/, "Intellectual Property AI Analyst");
addIf(/environmental law ai specialist/, "Environmental Law AI Specialist");
addIf(/legal risk ai analyst/, "Legal Risk AI Analyst");
addIf(/legal technology ai manager/, "Legal Technology AI Manager");
addIf(/public sector ai innovation analyst/, "Public Sector AI Innovation Analyst");
addIf(/government digital innovation specialist/, "Government Digital Innovation Specialist");
addIf(/ai-powered regulatory analyst|ai powered regulatory analyst/, "AI-Powered Regulatory Analyst");
addIf(/legal data science analyst/, "Legal Data Science Analyst");
addIf(/legal operations ai manager/, "Legal Operations AI Manager");
addIf(/digital compliance ai specialist/, "Digital Compliance AI Specialist");

// =======================
// Hospitality / Tourism / Retail - Fringe & Emerging
// =======================
addIf(/ai-powered guest experience analyst|ai powered guest experience analyst/, "AI-Powered Guest Experience Analyst");
addIf(/smart hospitality data analyst/, "Smart Hospitality Data Analyst");
addIf(/luxury experience ai specialist/, "Luxury Experience AI Specialist");
addIf(/e-commerce ai product manager|ecommerce ai product manager/, "E-Commerce AI Product Manager");
addIf(/tourism innovation ai consultant/, "Tourism Innovation AI Consultant");
addIf(/retail operations ai analyst/, "Retail Operations AI Analyst");
addIf(/customer journey ai specialist/, "Customer Journey AI Specialist");
addIf(/digital hospitality experience analyst/, "Digital Hospitality Experience Analyst");
addIf(/hotel automation ai engineer/, "Hotel Automation AI Engineer");
addIf(/tourism data ai analyst/, "Tourism Data AI Analyst");
addIf(/event technology ai specialist/, "Event Technology AI Specialist");
addIf(/luxury brand ai consultant/, "Luxury Brand AI Consultant");
addIf(/retail transformation ai specialist/, "Retail Transformation AI Specialist");
addIf(/hospitality analytics ai specialist/, "Hospitality Analytics AI Specialist");
addIf(/guest experience ai manager/, "Guest Experience AI Manager");
addIf(/foodtech ai analyst/, "FoodTech AI Analyst");
addIf(/smart resort ai specialist/, "Smart Resort AI Specialist");
addIf(/digital tourism ai analyst/, "Digital Tourism AI Analyst");
addIf(/retail technology ai consultant/, "Retail Technology AI Consultant");
addIf(/ai-powered hospitality strategist|ai powered hospitality strategist/, "AI-Powered Hospitality Strategist");

// =======================
// Logistics / Transportation - Fringe & Emerging
// =======================
addIf(/autonomous logistics ai analyst/, "Autonomous Logistics AI Analyst");
addIf(/fleet ai operations specialist/, "Fleet AI Operations Specialist");
addIf(/smart transportation data analyst/, "Smart Transportation Data Analyst");
addIf(/autonomous delivery ai specialist/, "Autonomous Delivery AI Specialist");
addIf(/logistics ai product manager/, "Logistics AI Product Manager");
addIf(/supply chain ai data scientist/, "Supply Chain AI Data Scientist");
addIf(/warehouse robotics ai specialist/, "Warehouse Robotics AI Specialist");
addIf(/transportation analytics ai specialist/, "Transportation Analytics AI Specialist");
addIf(/last-mile delivery ai analyst/, "Last-Mile Delivery AI Analyst");
addIf(/global supply chain ai manager/, "Global Supply Chain AI Manager");
addIf(/autonomous fleet ai strategist/, "Autonomous Fleet AI Strategist");
addIf(/intelligent transport systems ai analyst/, "Intelligent Transport Systems AI Analyst");
addIf(/drone logistics ai specialist/, "Drone Logistics AI Specialist");
addIf(/smart fleet ai analyst/, "Smart Fleet AI Analyst");
addIf(/autonomous supply chain ai engineer/, "Autonomous Supply Chain AI Engineer");
addIf(/transportation innovation ai consultant/, "Transportation Innovation AI Consultant");
addIf(/supply chain sustainability ai analyst/, "Supply Chain Sustainability AI Analyst");
addIf(/freight ai operations manager/, "Freight AI Operations Manager");
addIf(/smart distribution ai analyst/, "Smart Distribution AI Analyst");
addIf(/logistics innovation ai specialist/, "Logistics Innovation AI Specialist");

// =======================
// Creative / Design / Media - Fringe & Emerging
// =======================
addIf(/ai-powered xr designer|ai powered xr designer/, "AI-Powered XR Designer");
addIf(/immersive experience ai specialist/, "Immersive Experience AI Specialist");
addIf(/vr\/ar ai content designer/, "VR/AR AI Content Designer");
addIf(/digital interaction ai designer/, "Digital Interaction AI Designer");
addIf(/ai creative technology specialist/, "AI Creative Technology Specialist");
addIf(/3d xr ai designer/, "3D XR AI Designer");
addIf(/ai motion graphics specialist/, "AI Motion Graphics Specialist");
addIf(/game ai narrative designer/, "Game AI Narrative Designer");
addIf(/interactive storytelling ai specialist/, "Interactive Storytelling AI Specialist");
addIf(/virtual production ai analyst/, "Virtual Production AI Analyst");
addIf(/ai visual effects specialist/, "AI Visual Effects Specialist");
addIf(/xr creative ai producer/, "XR Creative AI Producer");
addIf(/ai multimedia innovation specialist/, "AI Multimedia Innovation Specialist");
addIf(/interactive media ai specialist/, "Interactive Media AI Specialist");
addIf(/ai experience designer/, "AI Experience Designer");
addIf(/ai digital experience manager/, "AI Digital Experience Manager");
addIf(/ai animation data analyst/, "AI Animation Data Analyst");
addIf(/xr product ai manager/, "XR Product AI Manager");
addIf(/ai-powered creative strategist|ai powered creative strategist/, "AI-Powered Creative Strategist");
addIf(/ai experience innovation specialist/, "AI Experience Innovation Specialist");

// =======================
// Emerging / Miscellaneous - Fringe & Emerging
// =======================
addIf(/cleantech ai specialist/, "CleanTech AI Specialist");
addIf(/sustainable energy ai analyst/, "Sustainable Energy AI Analyst");
addIf(/esg ai consultant/, "ESG AI Consultant");
addIf(/green technology ai specialist/, "Green Technology AI Specialist");
addIf(/autonomous systems ai consultant/, "Autonomous Systems AI Consultant");
addIf(/drone ai operations manager/, "Drone AI Operations Manager");
addIf(/satellite ai technology analyst/, "Satellite AI Technology Analyst");
addIf(/space ai systems engineer/, "Space AI Systems Engineer");
addIf(/bioinformatics ai consultant/, "Bioinformatics AI Consultant");
addIf(/digital health ai analyst/, "Digital Health AI Analyst");
addIf(/medical robotics ai analyst/, "Medical Robotics AI Analyst");
addIf(/smart city ai technology specialist/, "Smart City AI Technology Specialist");
addIf(/autonomous transportation ai specialist/, "Autonomous Transportation AI Specialist");
addIf(/corporate sustainability ai analyst/, "Corporate Sustainability AI Analyst");
addIf(/climate data ai scientist/, "Climate Data AI Scientist");
addIf(/smart infrastructure ai analyst/, "Smart Infrastructure AI Analyst");
addIf(/renewable energy ai project manager/, "Renewable Energy AI Project Manager");
addIf(/sustainable transportation ai analyst/, "Sustainable Transportation AI Analyst");
addIf(/environmental ai innovation specialist/, "Environmental AI Innovation Specialist");
addIf(/digital sustainability ai strategist/, "Digital Sustainability AI Strategist");


  // If nothing detected, provide broad helpful defaults
  if (!roles.size) {
    return [
      "Teacher",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "UI/UX Designer",
      "Product Manager",
    ];
  }

  return Array.from(roles);
};
