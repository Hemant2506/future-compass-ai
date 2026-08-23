export type RoadmapStep = {
  title: string;
  what: string;
  why: string;
  time: string;
  resources: string[];
  projects: string[];
};

export type Career = {
  slug: string;
  name: string;
  category: string;
  emoji: string;
  overview: string;
  education: string[];
  courses: string[];
  skills: string[];
  exams: string[];
  certifications: string[];
  roles: string[];
  future: string;
  pros: string[];
  challenges: string[];
  projects: string[];
  resources: { label: string; url: string }[];
  roadmap: RoadmapStep[];
  traits: Record<string, number>; // trait -> weight 0..1
};

export const TRAITS = [
  "technology",
  "logic",
  "maths",
  "creativity",
  "communication",
  "biology",
  "business",
  "leadership",
  "people",
  "practical",
  "research",
  "design",
] as const;
export type Trait = (typeof TRAITS)[number];

export const TRAIT_LABELS: Record<Trait, string> = {
  technology: "Technology",
  logic: "Logical thinking",
  maths: "Mathematics",
  creativity: "Creativity",
  communication: "Communication",
  biology: "Biology & life sciences",
  business: "Business sense",
  leadership: "Leadership",
  people: "Working with people",
  practical: "Practical / hands-on work",
  research: "Research & analysis",
  design: "Design & aesthetics",
};

const step = (
  title: string,
  what: string,
  why: string,
  time: string,
  resources: string[],
  projects: string[],
): RoadmapStep => ({ title, what, why, time, resources, projects });

const genericRoadmap = (field: string): RoadmapStep[] => [
  step(
    "Complete 12th / Diploma",
    `Finish your qualifying exam with subjects relevant to ${field}.`,
    "Eligibility for most degree programmes depends on this.",
    "1-2 years",
    ["School / board syllabus", "NCERT & state board books"],
    ["Small subject-based project"],
  ),
  step(
    "Degree or Diploma",
    `Enrol in a recognised programme related to ${field}.`,
    "Formal qualification is required by most employers and exams.",
    "3-4 years",
    ["University syllabus", "NPTEL / SWAYAM courses"],
    ["Semester mini-projects"],
  ),
  step(
    "Core fundamentals",
    `Build strong basics of ${field}.`,
    "Fundamentals decide how quickly you can grow later.",
    "6-12 months",
    ["NPTEL", "YouTube lectures", "Standard textbooks"],
    ["Fundamentals practice notebook"],
  ),
  step(
    "Tools & practical skills",
    `Learn the tools used daily in ${field}.`,
    "Practical tool knowledge is what interviews test.",
    "4-6 months",
    ["Official tool documentation", "Free online labs"],
    ["Tool-based practice project"],
  ),
  step(
    "Portfolio projects",
    "Build 3-5 real projects and document them.",
    "Projects prove your skills better than marks.",
    "3-6 months",
    ["GitHub", "Open datasets"],
    ["Capstone project with write-up"],
  ),
  step(
    "Internship",
    "Do an internship or apprenticeship.",
    "Real work experience makes your profile credible.",
    "2-6 months",
    ["College placement cell", "Internship portals"],
    ["Internship report"],
  ),
  step(
    "Certifications",
    "Add recognised certifications.",
    "Certifications validate skills for recruiters.",
    "2-4 months",
    ["Official certification bodies"],
    ["Certification practice labs"],
  ),
  step(
    "Entry-level job",
    `Apply for entry-level roles in ${field}.`,
    "First job builds experience and direction.",
    "Ongoing",
    ["Job portals", "Alumni network"],
    ["Interview preparation kit"],
  ),
];

export const CAREERS: Career[] = [
  {
    slug: "software-engineering",
    name: "Software Engineering",
    category: "Technology",
    emoji: "💻",
    overview:
      "Software engineers design, build and maintain applications and systems used by people and businesses every day.",
    education: ["B.Tech/B.E. CSE or IT", "BCA + MCA", "B.Sc. Computer Science", "Polytechnic diploma + degree"],
    courses: ["B.Tech CSE", "BCA", "B.Sc. CS", "Diploma in Computer Engineering"],
    skills: ["Programming", "Data structures & algorithms", "Databases", "Version control", "Problem solving"],
    exams: ["JEE Main", "State CET", "University entrance", "CUET"],
    certifications: ["Cloud practitioner certifications", "Full-stack development certificates"],
    roles: ["Software Developer", "Backend Engineer", "Frontend Engineer", "Mobile App Developer", "QA Engineer"],
    future: "Demand continues to grow across product companies, services, startups and government digital projects.",
    pros: ["Strong job market", "Remote-friendly", "Skill-based growth", "Good starting salaries"],
    challenges: ["Continuous learning required", "Deadline pressure", "Highly competitive entry level"],
    projects: ["Personal portfolio site", "REST API for a college app", "Expense tracker", "Chat application"],
    resources: [
      { label: "NPTEL Programming Courses", url: "https://nptel.ac.in" },
      { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
    ],
    roadmap: [
      step("Complete 12th (PCM preferred)", "Finish 12th with Maths.", "Maths is required for most engineering courses.", "1-2 years", ["Board syllabus"], ["Basic programming practice"]),
      step("Degree / Diploma", "B.Tech CSE, BCA or Diploma in Computer Engineering.", "Formal eligibility for developer roles.", "3-4 years", ["University syllabus"], ["Semester projects"]),
      step("Programming fundamentals", "Learn one language deeply (C++, Java or Python).", "All later skills build on this.", "3-4 months", ["NPTEL", "freeCodeCamp"], ["50 small programs"]),
      step("Data structures & algorithms", "Arrays, linked lists, trees, graphs, sorting, complexity.", "Core of technical interviews.", "5-6 months", ["Standard DSA textbook", "Practice platforms"], ["DSA problem journal"]),
      step("Databases & SQL", "Relational design, queries, indexing.", "Almost every app stores data.", "2 months", ["SQL tutorials"], ["Library management DB"]),
      step("Web / app development", "Frontend, backend and APIs.", "Turns knowledge into working products.", "4-6 months", ["MDN", "Framework docs"], ["Full-stack project"]),
      step("Projects & GitHub", "Publish 3-5 documented projects.", "Recruiters review your portfolio.", "3 months", ["GitHub"], ["Capstone project"]),
      step("Internship", "Work with a real engineering team.", "Experience with real codebases.", "2-6 months", ["Placement cell"], ["Internship report"]),
      step("Entry-level developer job", "Apply, interview, iterate.", "Start of professional growth.", "Ongoing", ["Job portals"], ["Interview prep"]),
    ],
    traits: { technology: 1, logic: 1, maths: 0.8, research: 0.4, creativity: 0.4, practical: 0.5 },
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    category: "Technology",
    emoji: "🛡️",
    overview:
      "Cybersecurity professionals protect systems, networks and data from attacks, and respond when incidents happen.",
    education: ["B.Tech CSE (Cyber Security)", "BCA in Cyber Security", "B.Sc. Cyber Forensics"],
    courses: ["B.Tech CSE - Cyber Security", "BCA Cyber Security", "PG Diploma in Information Security"],
    skills: ["Networking", "Linux", "Threat analysis", "Scripting", "Incident response"],
    exams: ["JEE Main", "State CET", "University entrance"],
    certifications: ["CompTIA Security+", "CEH", "Cisco networking certifications"],
    roles: ["Security Analyst", "SOC Analyst", "Penetration Tester", "Security Engineer"],
    future: "Rapid growth as digital services, banking and government infrastructure expand online.",
    pros: ["High demand", "Strong specialisation value", "Global opportunities"],
    challenges: ["Requires constant updating", "On-call/shift work in SOC roles", "Steep initial learning curve"],
    projects: ["Home lab with virtual machines", "Vulnerability report on a test app", "Network traffic analysis"],
    resources: [
      { label: "TryHackMe learning paths", url: "https://tryhackme.com" },
      { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
    ],
    roadmap: [
      step("Complete 12th", "Finish 12th, Science preferred.", "Eligibility for technical degrees.", "1-2 years", ["Board syllabus"], ["Basic computer literacy"]),
      step("Degree / Diploma", "CSE, IT or cyber security programme.", "Formal foundation and eligibility.", "3-4 years", ["University syllabus"], ["Semester projects"]),
      step("Networking fundamentals", "TCP/IP, DNS, routing, firewalls.", "Attacks and defences happen on networks.", "3 months", ["Cisco networking basics"], ["Home network map"]),
      step("Linux", "Command line, permissions, services, scripting.", "Most security tooling runs on Linux.", "2-3 months", ["Linux Journey"], ["Harden a Linux VM"]),
      step("Cybersecurity fundamentals", "CIA triad, threats, cryptography basics.", "Shared vocabulary of the field.", "3 months", ["Security+ syllabus"], ["Threat model of a college portal"]),
      step("Security tools", "Wireshark, Nmap, Burp Suite, SIEM basics.", "Daily tools of analysts.", "3 months", ["Official tool docs"], ["Packet capture analysis"]),
      step("Projects & CTFs", "Practice labs and capture-the-flag challenges.", "Builds practical attacker/defender thinking.", "3-6 months", ["TryHackMe", "picoCTF"], ["Write-ups of 10 labs"]),
      step("Internship", "SOC or IT security internship.", "Real incident exposure.", "2-6 months", ["Placement cell"], ["Internship report"]),
      step("Certifications", "Security+ or CEH.", "Recruiters filter on these.", "2-4 months", ["Official exam guides"], ["Practice exams"]),
      step("Entry-level security job", "SOC Analyst L1 or security engineer trainee.", "Career entry point.", "Ongoing", ["Job portals"], ["Interview prep"]),
    ],
    traits: { technology: 1, logic: 0.9, research: 0.7, maths: 0.5, practical: 0.6 },
  },
  {
    slug: "data-science",
    name: "Data Science",
    category: "Technology",
    emoji: "📊",
    overview: "Data scientists turn raw data into insight and predictions that guide decisions.",
    education: ["B.Tech CSE/AI-DS", "B.Sc. Statistics/Maths", "BCA + M.Sc. Data Science"],
    courses: ["B.Tech AI & Data Science", "B.Sc. Statistics", "B.Sc. Data Science"],
    skills: ["Statistics", "Python", "SQL", "Data visualisation", "Machine learning"],
    exams: ["JEE Main", "CUET", "State CET"],
    certifications: ["Data analytics certificates", "Cloud data certifications"],
    roles: ["Data Analyst", "Data Scientist", "BI Analyst", "ML Engineer"],
    future: "Every sector from banking to agriculture is investing in analytics teams.",
    pros: ["Cross-industry demand", "Strong salary growth", "Blends maths and technology"],
    challenges: ["Heavy statistics", "Data cleaning is unglamorous", "Needs domain understanding"],
    projects: ["Exam-result analysis dashboard", "Sales forecasting model", "Public dataset study"],
    resources: [
      { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { label: "NPTEL Data Science", url: "https://nptel.ac.in" },
    ],
    roadmap: genericRoadmap("Data Science"),
    traits: { maths: 1, logic: 0.9, technology: 0.8, research: 0.8 },
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    category: "Technology",
    emoji: "🤖",
    overview: "AI engineers build systems that learn from data — from recommendation engines to language models.",
    education: ["B.Tech AI/ML", "B.Tech CSE + AI specialisation", "M.Sc. AI"],
    courses: ["B.Tech AI & ML", "B.Tech CSE", "M.Sc. Artificial Intelligence"],
    skills: ["Linear algebra", "Python", "Deep learning", "Data handling", "Research reading"],
    exams: ["JEE Main", "State CET", "GATE (for PG)"],
    certifications: ["Deep learning specialisations", "Cloud ML certifications"],
    roles: ["ML Engineer", "AI Researcher", "NLP Engineer", "Computer Vision Engineer"],
    future: "One of the fastest growing areas, though entry roles often expect strong maths.",
    pros: ["Cutting-edge work", "High salary ceiling", "Research opportunities"],
    challenges: ["Maths heavy", "Fast-changing", "Often needs postgraduate study"],
    projects: ["Image classifier", "Chatbot with a small model", "Recommendation engine"],
    resources: [{ label: "Papers with Code", url: "https://paperswithcode.com" }],
    roadmap: genericRoadmap("Artificial Intelligence"),
    traits: { maths: 1, logic: 0.9, technology: 1, research: 0.9 },
  },
  {
    slug: "web-development",
    name: "Web Development",
    category: "Technology",
    emoji: "🌐",
    overview: "Web developers build websites and web applications, from user interfaces to server logic.",
    education: ["BCA", "B.Tech CSE/IT", "B.Sc. IT", "Diploma + self-learning"],
    courses: ["BCA", "B.Sc. IT", "B.Tech IT"],
    skills: ["HTML/CSS", "JavaScript", "Frameworks", "APIs", "UI sense"],
    exams: ["University entrance", "CUET"],
    certifications: ["Frontend/backend development certificates"],
    roles: ["Frontend Developer", "Backend Developer", "Full-stack Developer"],
    future: "Steady demand, very accessible for self-taught students with good portfolios.",
    pros: ["Fast to start", "Freelance friendly", "Visible results"],
    challenges: ["Crowded entry level", "Frameworks change often"],
    projects: ["Portfolio", "College event site", "E-commerce clone"],
    resources: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org" }],
    roadmap: genericRoadmap("Web Development"),
    traits: { technology: 0.9, creativity: 0.7, logic: 0.7, design: 0.6 },
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    category: "Engineering",
    emoji: "⚙️",
    overview: "Mechanical engineers design, analyse and manufacture machines and mechanical systems.",
    education: ["B.E./B.Tech Mechanical", "Diploma in Mechanical"],
    courses: ["B.Tech Mechanical", "Diploma Mechanical", "M.Tech Design/Thermal"],
    skills: ["CAD", "Thermodynamics", "Manufacturing processes", "Problem solving"],
    exams: ["JEE Main", "State CET", "GATE"],
    certifications: ["CAD/CAM tool certifications", "Six Sigma"],
    roles: ["Design Engineer", "Production Engineer", "Maintenance Engineer", "Quality Engineer"],
    future: "Core sector jobs plus growth in EV, automation and manufacturing.",
    pros: ["Broad industry options", "Core engineering respect", "Government job routes"],
    challenges: ["Lower starting pay than IT", "Site/shift work"],
    projects: ["CAD model of a gearbox", "Mini go-kart", "Heat exchanger study"],
    resources: [{ label: "NPTEL Mechanical", url: "https://nptel.ac.in" }],
    roadmap: genericRoadmap("Mechanical Engineering"),
    traits: { practical: 1, maths: 0.8, logic: 0.7, technology: 0.5 },
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    category: "Engineering",
    emoji: "🏗️",
    overview: "Civil engineers plan and build infrastructure — buildings, roads, bridges and water systems.",
    education: ["B.E./B.Tech Civil", "Diploma in Civil"],
    courses: ["B.Tech Civil", "Diploma Civil", "M.Tech Structures"],
    skills: ["Structural analysis", "AutoCAD", "Surveying", "Project management"],
    exams: ["JEE Main", "State CET", "GATE", "SSC JE"],
    certifications: ["STAAD Pro", "Primavera"],
    roles: ["Site Engineer", "Structural Engineer", "Planning Engineer", "Government Junior Engineer"],
    future: "Strong government infrastructure spending keeps demand stable.",
    pros: ["Government job opportunities", "Visible real-world impact"],
    challenges: ["Site postings", "Long project cycles"],
    projects: ["Building plan design", "Concrete mix study", "Survey of campus area"],
    resources: [{ label: "NPTEL Civil", url: "https://nptel.ac.in" }],
    roadmap: genericRoadmap("Civil Engineering"),
    traits: { practical: 1, maths: 0.8, leadership: 0.5, logic: 0.6 },
  },
  {
    slug: "electrical-engineering",
    name: "Electrical Engineering",
    category: "Engineering",
    emoji: "⚡",
    overview: "Electrical engineers work with power generation, distribution, machines and control systems.",
    education: ["B.E./B.Tech Electrical", "Diploma in Electrical"],
    courses: ["B.Tech Electrical", "Diploma Electrical"],
    skills: ["Circuit analysis", "Power systems", "PLC/automation", "MATLAB"],
    exams: ["JEE Main", "State CET", "GATE", "PSU exams"],
    certifications: ["PLC & SCADA", "Electrical safety"],
    roles: ["Electrical Engineer", "Power Systems Engineer", "Automation Engineer"],
    future: "Renewables, EV charging and grid modernisation are expanding areas.",
    pros: ["PSU and government roles", "Core sector stability"],
    challenges: ["Field work", "Safety-critical responsibility"],
    projects: ["Solar panel study", "Home automation circuit"],
    resources: [{ label: "NPTEL Electrical", url: "https://nptel.ac.in" }],
    roadmap: genericRoadmap("Electrical Engineering"),
    traits: { practical: 0.9, maths: 0.8, logic: 0.8, technology: 0.6 },
  },
  {
    slug: "electronics",
    name: "Electronics & Communication",
    category: "Engineering",
    emoji: "📡",
    overview: "Electronics engineers design circuits, embedded systems and communication hardware.",
    education: ["B.E./B.Tech ECE", "Diploma in Electronics"],
    courses: ["B.Tech ECE", "Diploma Electronics", "M.Tech VLSI"],
    skills: ["Embedded C", "Microcontrollers", "PCB design", "Signal processing"],
    exams: ["JEE Main", "State CET", "GATE"],
    certifications: ["Embedded systems", "VLSI design tools"],
    roles: ["Embedded Engineer", "VLSI Design Engineer", "Telecom Engineer", "IoT Developer"],
    future: "Semiconductor and IoT investment is creating new roles in India.",
    pros: ["Hardware + software mix", "Growing chip sector"],
    challenges: ["Hardware jobs concentrated in few cities"],
    projects: ["Arduino weather station", "IoT smart lock"],
    resources: [{ label: "NPTEL Electronics", url: "https://nptel.ac.in" }],
    roadmap: genericRoadmap("Electronics"),
    traits: { technology: 0.8, practical: 0.9, maths: 0.7, logic: 0.8 },
  },
  {
    slug: "medicine",
    name: "Medicine (MBBS)",
    category: "Healthcare",
    emoji: "🩺",
    overview: "Doctors diagnose and treat patients, and may specialise after MBBS through postgraduate study.",
    education: ["MBBS", "MD/MS specialisation"],
    courses: ["MBBS", "BDS", "BAMS", "BHMS", "B.Sc. Nursing"],
    skills: ["Biology", "Clinical reasoning", "Empathy", "Stamina", "Communication"],
    exams: ["NEET UG", "NEET PG"],
    certifications: ["Medical council registration", "Specialty fellowships"],
    roles: ["General Physician", "Surgeon", "Specialist Consultant", "Public Health Officer"],
    future: "Consistent demand; long training but strong social respect and stability.",
    pros: ["Meaningful work", "Respected profession", "Stable demand"],
    challenges: ["Very long training", "High competition (NEET)", "Demanding hours"],
    projects: ["Community health survey", "First-aid training programme"],
    resources: [{ label: "NEET official information", url: "https://neet.nta.nic.in" }],
    roadmap: genericRoadmap("Medicine"),
    traits: { biology: 1, people: 0.9, research: 0.6, communication: 0.7 },
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    category: "Healthcare",
    emoji: "💊",
    overview: "Pharmacy professionals work in drug development, quality control, retail and clinical settings.",
    education: ["D.Pharm", "B.Pharm", "M.Pharm", "Pharm.D"],
    courses: ["B.Pharm", "D.Pharm", "Pharm.D"],
    skills: ["Chemistry", "Pharmacology", "Attention to detail", "Regulatory knowledge"],
    exams: ["State pharmacy entrance", "GPAT (for PG)"],
    certifications: ["State Pharmacy Council registration"],
    roles: ["Pharmacist", "QA/QC Executive", "Clinical Research Associate", "Medical Writer"],
    future: "India's large pharma sector offers manufacturing, research and regulatory careers.",
    pros: ["Healthcare career without NEET-level competition", "Industry + retail options"],
    challenges: ["Lower entry salaries", "Strict regulatory environment"],
    projects: ["Drug formulation study", "Pharmacovigilance case review"],
    resources: [{ label: "Pharmacy Council of India", url: "https://www.pci.nic.in" }],
    roadmap: genericRoadmap("Pharmacy"),
    traits: { biology: 0.9, research: 0.7, practical: 0.6, people: 0.5 },
  },
  {
    slug: "architecture",
    name: "Architecture",
    category: "Design",
    emoji: "📐",
    overview: "Architects design buildings and spaces that balance function, safety, cost and aesthetics.",
    education: ["B.Arch (5 years)", "M.Arch"],
    courses: ["B.Arch", "Diploma in Architectural Assistantship"],
    skills: ["Drawing", "Spatial thinking", "CAD & BIM", "Design theory"],
    exams: ["NATA", "JEE Main Paper 2"],
    certifications: ["Council of Architecture registration", "Revit/BIM"],
    roles: ["Architect", "Urban Planner", "Interior Designer", "BIM Specialist"],
    future: "Urbanisation and sustainable design create steady opportunities.",
    pros: ["Creative + technical", "Own practice possible"],
    challenges: ["5-year course", "Long hours in studio", "Slow early earnings"],
    projects: ["Residential design portfolio", "Campus redesign concept"],
    resources: [{ label: "Council of Architecture", url: "https://www.coa.gov.in" }],
    roadmap: genericRoadmap("Architecture"),
    traits: { design: 1, creativity: 0.9, maths: 0.6, practical: 0.7 },
  },
  {
    slug: "commerce-accounting",
    name: "Commerce & Accounting",
    category: "Commerce",
    emoji: "🧾",
    overview: "Commerce careers cover accounting, taxation, audit and financial reporting for organisations.",
    education: ["B.Com", "M.Com", "CA / CMA / CS"],
    courses: ["B.Com", "B.Com (Hons)", "CA Foundation"],
    skills: ["Accounting", "Taxation", "Excel", "Analytical thinking"],
    exams: ["CA Foundation", "CS Executive Entrance", "CUET"],
    certifications: ["Tally", "GST practitioner"],
    roles: ["Accountant", "Tax Consultant", "Auditor", "Chartered Accountant"],
    future: "Compliance and taxation work keeps demand steady across all business sizes.",
    pros: ["Low entry cost", "Self-practice possible", "Every business needs it"],
    challenges: ["CA route is difficult", "Routine work at junior levels"],
    projects: ["Small business bookkeeping", "GST filing simulation"],
    resources: [{ label: "ICAI", url: "https://www.icai.org" }],
    roadmap: genericRoadmap("Commerce & Accounting"),
    traits: { business: 0.9, maths: 0.7, logic: 0.7, research: 0.4 },
  },
  {
    slug: "finance",
    name: "Finance & Investment",
    category: "Commerce",
    emoji: "📈",
    overview: "Finance professionals manage money — investments, risk, banking and corporate finance.",
    education: ["BBA/B.Com Finance", "MBA Finance", "CFA"],
    courses: ["BBA Finance", "B.Com", "MBA Finance"],
    skills: ["Financial modelling", "Markets knowledge", "Excel", "Communication"],
    exams: ["CUET", "CAT (for MBA)", "CFA levels"],
    certifications: ["NISM modules", "CFA"],
    roles: ["Financial Analyst", "Investment Banking Analyst", "Risk Analyst", "Wealth Manager"],
    future: "Growing retail investment and fintech expand finance roles.",
    pros: ["High earning potential", "Corporate exposure"],
    challenges: ["Long hours", "Pedigree-focused hiring"],
    projects: ["Stock valuation report", "Personal finance planner"],
    resources: [{ label: "NSE India investor education", url: "https://www.nseindia.com" }],
    roadmap: genericRoadmap("Finance"),
    traits: { business: 1, maths: 0.8, logic: 0.7, communication: 0.6 },
  },
  {
    slug: "business-management",
    name: "Business Management",
    category: "Commerce",
    emoji: "🏢",
    overview: "Management careers focus on running teams, operations, marketing and strategy.",
    education: ["BBA", "MBA", "PGDM"],
    courses: ["BBA", "BMS", "MBA"],
    skills: ["Leadership", "Communication", "Analytics", "Marketing"],
    exams: ["CUET", "CAT", "XAT", "IPMAT"],
    certifications: ["Digital marketing", "Project management"],
    roles: ["Business Analyst", "Marketing Executive", "Operations Manager", "Entrepreneur"],
    future: "Broad career with entry into almost every industry.",
    pros: ["Versatile", "Leadership track", "Good for entrepreneurs"],
    challenges: ["Value depends heavily on college brand", "Generalist skill risk"],
    projects: ["Market research report", "Campus startup"],
    resources: [{ label: "Harvard Business Review", url: "https://hbr.org" }],
    roadmap: genericRoadmap("Business Management"),
    traits: { business: 1, leadership: 1, communication: 0.9, people: 0.8 },
  },
  {
    slug: "law",
    name: "Law",
    category: "Humanities",
    emoji: "⚖️",
    overview: "Lawyers advise, represent and advocate for clients across civil, criminal and corporate matters.",
    education: ["BA LLB (5 yr)", "LLB (3 yr)", "LLM"],
    courses: ["BA LLB", "BBA LLB", "LLB"],
    skills: ["Reading comprehension", "Argumentation", "Research", "Writing"],
    exams: ["CLAT", "AILET", "State law entrance"],
    certifications: ["Bar Council enrolment"],
    roles: ["Advocate", "Corporate Legal Associate", "Legal Researcher", "Judicial Services"],
    future: "Corporate compliance and litigation both continue to grow.",
    pros: ["Independent practice possible", "Social impact", "Judiciary route"],
    challenges: ["Slow early income in litigation", "Heavy reading"],
    projects: ["Moot court participation", "Case commentary blog"],
    resources: [{ label: "Bar Council of India", url: "http://www.barcouncilofindia.org" }],
    roadmap: genericRoadmap("Law"),
    traits: { communication: 1, research: 0.9, logic: 0.8, people: 0.7 },
  },
  {
    slug: "design",
    name: "Design (UI/UX & Product)",
    category: "Design",
    emoji: "🎨",
    overview: "Designers shape how products look, feel and work for the people using them.",
    education: ["B.Des", "BFA", "Diploma in Design"],
    courses: ["B.Des", "B.Sc. Multimedia", "UI/UX diploma"],
    skills: ["Visual design", "User research", "Prototyping tools", "Typography"],
    exams: ["UCEED", "NID DAT", "NIFT entrance"],
    certifications: ["UX design certificates"],
    roles: ["UI Designer", "UX Designer", "Product Designer", "Graphic Designer"],
    future: "Digital products keep expanding demand for designers who understand users.",
    pros: ["Creative work", "Freelance friendly", "Portfolio matters more than marks"],
    challenges: ["Subjective feedback", "Portfolio pressure"],
    projects: ["App redesign case study", "Design system"],
    resources: [{ label: "Nielsen Norman Group", url: "https://www.nngroup.com" }],
    roadmap: genericRoadmap("Design"),
    traits: { design: 1, creativity: 1, people: 0.6, technology: 0.4 },
  },
  {
    slug: "animation",
    name: "Animation & VFX",
    category: "Design",
    emoji: "🎬",
    overview: "Animators and VFX artists create motion content for films, games, ads and education.",
    education: ["B.Sc. Animation", "B.Des", "Diploma in Animation & VFX"],
    courses: ["B.Sc. Animation & VFX", "Diploma in 3D Animation"],
    skills: ["Drawing", "3D software", "Storytelling", "Compositing"],
    exams: ["Institute-level entrance"],
    certifications: ["Maya/Blender certifications"],
    roles: ["2D/3D Animator", "VFX Artist", "Motion Designer", "Game Artist"],
    future: "Streaming and gaming growth increase demand for skilled artists.",
    pros: ["Highly creative", "Freelance and studio options"],
    challenges: ["Long render/production cycles", "Studio hubs in few cities"],
    projects: ["30-second animated short", "VFX shot breakdown"],
    resources: [{ label: "Blender tutorials", url: "https://www.blender.org" }],
    roadmap: genericRoadmap("Animation & VFX"),
    traits: { creativity: 1, design: 0.9, technology: 0.5, practical: 0.5 },
  },
  {
    slug: "media-journalism",
    name: "Media & Journalism",
    category: "Humanities",
    emoji: "🎙️",
    overview: "Media professionals report, produce and communicate stories across print, digital and broadcast.",
    education: ["BA Journalism & Mass Comm", "MA Mass Communication"],
    courses: ["BJMC", "BA Mass Communication"],
    skills: ["Writing", "Interviewing", "Editing", "Video production"],
    exams: ["CUET", "IIMC entrance"],
    certifications: ["Digital content and SEO certificates"],
    roles: ["Reporter", "Content Writer", "Video Journalist", "PR Executive"],
    future: "Digital media growth offsets decline in traditional print roles.",
    pros: ["Public impact", "Varied work", "Creative expression"],
    challenges: ["Modest starting pay", "Irregular hours"],
    projects: ["Campus news channel", "Investigative article"],
    resources: [{ label: "Reuters Institute", url: "https://reutersinstitute.politics.ox.ac.uk" }],
    roadmap: genericRoadmap("Media & Journalism"),
    traits: { communication: 1, creativity: 0.8, people: 0.8, research: 0.6 },
  },
  {
    slug: "psychology",
    name: "Psychology",
    category: "Humanities",
    emoji: "🧠",
    overview: "Psychologists study behaviour and support mental health in clinical, school and organisational settings.",
    education: ["BA/B.Sc. Psychology", "MA/M.Sc. Psychology", "M.Phil Clinical Psychology"],
    courses: ["BA Psychology", "B.Sc. Psychology", "MA Applied Psychology"],
    skills: ["Empathy", "Research methods", "Statistics", "Counselling skills"],
    exams: ["CUET", "University entrance"],
    certifications: ["RCI registration for clinical practice"],
    roles: ["Counsellor", "Clinical Psychologist", "HR Specialist", "Researcher"],
    future: "Rising mental-health awareness is expanding demand, especially in schools and companies.",
    pros: ["Deeply meaningful work", "Multiple settings"],
    challenges: ["Postgraduate study essential", "Emotionally demanding"],
    projects: ["Survey on student stress", "Peer counselling programme"],
    resources: [{ label: "Rehabilitation Council of India", url: "https://rehabcouncil.nic.in" }],
    roadmap: genericRoadmap("Psychology"),
    traits: { people: 1, research: 0.8, communication: 0.9, biology: 0.5 },
  },
  {
    slug: "teaching",
    name: "Teaching & Education",
    category: "Public Service",
    emoji: "📚",
    overview: "Teachers educate students in schools, colleges and coaching institutes.",
    education: ["B.A./B.Sc. + B.Ed", "M.A./M.Sc. + NET for college"],
    courses: ["B.Ed", "D.El.Ed", "Integrated B.Sc. B.Ed"],
    skills: ["Subject mastery", "Explaining clearly", "Patience", "Classroom management"],
    exams: ["CTET", "State TET", "UGC NET"],
    certifications: ["Teaching methodology certificates"],
    roles: ["School Teacher", "Lecturer", "Curriculum Designer", "Ed-tech Educator"],
    future: "Stable government and private demand plus growing online teaching.",
    pros: ["Job security", "Good work-life balance", "Social respect"],
    challenges: ["Exam-based recruitment", "Salary varies widely by sector"],
    projects: ["Lesson plan portfolio", "YouTube teaching channel"],
    resources: [{ label: "NCERT", url: "https://ncert.nic.in" }],
    roadmap: genericRoadmap("Teaching"),
    traits: { communication: 1, people: 0.9, research: 0.5, leadership: 0.6 },
  },
  {
    slug: "government-services",
    name: "Government Services",
    category: "Public Service",
    emoji: "🏛️",
    overview: "Civil services and government jobs cover administration, banking, railways, defence and more.",
    education: ["Any bachelor's degree", "Subject-specific degrees for technical posts"],
    courses: ["BA", "B.Com", "B.Tech", "B.Sc."],
    skills: ["General studies", "Current affairs", "Aptitude", "Writing"],
    exams: ["UPSC CSE", "SSC CGL", "State PSC", "IBPS", "RRB"],
    certifications: ["Not usually required"],
    roles: ["IAS/IPS Officer", "Bank PO", "SSC Officer", "Railway Officer"],
    future: "Consistently high competition but strong stability and social standing.",
    pros: ["Job security", "Benefits and pension", "Public impact"],
    challenges: ["Very high competition", "Long preparation period", "Uncertain outcome"],
    projects: ["Answer-writing practice", "Current affairs journal"],
    resources: [{ label: "UPSC official site", url: "https://upsc.gov.in" }],
    roadmap: genericRoadmap("Government Services"),
    traits: { communication: 0.8, research: 0.8, leadership: 0.8, people: 0.7 },
  },
];

export const getCareer = (slug: string) => CAREERS.find((c) => c.slug === slug);

// ---------------- Assessment ----------------

export type Question = { id: string; text: string; trait: Trait };

export const QUESTIONS: Question[] = [
  { id: "q1", text: "I enjoy working with computers and new technology.", trait: "technology" },
  { id: "q2", text: "I like solving puzzles and finding logical patterns.", trait: "logic" },
  { id: "q3", text: "I am comfortable with mathematics and numbers.", trait: "maths" },
  { id: "q4", text: "I often come up with new and original ideas.", trait: "creativity" },
  { id: "q5", text: "I can explain things clearly and enjoy speaking to others.", trait: "communication" },
  { id: "q6", text: "I am curious about the human body, plants and living systems.", trait: "biology" },
  { id: "q7", text: "I am interested in how businesses earn and grow money.", trait: "business" },
  { id: "q8", text: "I naturally take the lead when working in a group.", trait: "leadership" },
  { id: "q9", text: "I enjoy helping and working closely with people.", trait: "people" },
  { id: "q10", text: "I like building, repairing or working with my hands.", trait: "practical" },
  { id: "q11", text: "I enjoy researching a topic deeply before deciding.", trait: "research" },
  { id: "q12", text: "I notice colours, layouts and visual details.", trait: "design" },
  { id: "q13", text: "I would enjoy writing code or automating tasks.", trait: "technology" },
  { id: "q14", text: "I like breaking a big problem into small logical steps.", trait: "logic" },
  { id: "q15", text: "Statistics and data interest me.", trait: "maths" },
  { id: "q16", text: "I enjoy drawing, designing or creating content.", trait: "creativity" },
  { id: "q17", text: "I am comfortable presenting in front of a class.", trait: "communication" },
  { id: "q18", text: "I would like to work in healthcare or laboratories.", trait: "biology" },
  { id: "q19", text: "I would like to start my own venture one day.", trait: "business" },
  { id: "q20", text: "I enjoy organising events and coordinating teams.", trait: "leadership" },
  { id: "q21", text: "Teaching or counselling others feels satisfying to me.", trait: "people" },
  { id: "q22", text: "I prefer practical lab or workshop work over theory.", trait: "practical" },
  { id: "q23", text: "I enjoy reading detailed articles and reports.", trait: "research" },
  { id: "q24", text: "I care about how a product looks and feels to use.", trait: "design" },
];

export type Answers = Record<string, number>; // 1..5

export function scoreTraits(answers: Answers): Record<Trait, number> {
  const sums = {} as Record<Trait, { total: number; count: number }>;
  for (const q of QUESTIONS) {
    const v = answers[q.id];
    if (!v) continue;
    if (!sums[q.trait]) sums[q.trait] = { total: 0, count: 0 };
    sums[q.trait].total += (v - 1) / 4;
    sums[q.trait].count += 1;
  }
  const out = {} as Record<Trait, number>;
  for (const t of TRAITS) out[t] = sums[t] ? sums[t].total / sums[t].count : 0;
  return out;
}

export type CareerMatch = { career: Career; score: number; reasons: string[] };

export function matchCareers(answers: Answers, limit = 8): CareerMatch[] {
  const traits = scoreTraits(answers);
  return CAREERS.map((career) => {
    let weighted = 0;
    let weightSum = 0;
    const contributions: { trait: Trait; value: number }[] = [];
    for (const [t, w] of Object.entries(career.traits) as [Trait, number][]) {
      weighted += traits[t] * w;
      weightSum += w;
      contributions.push({ trait: t, value: traits[t] * w });
    }
    const raw = weightSum ? weighted / weightSum : 0;
    const score = Math.round(35 + raw * 62);
    const reasons = contributions
      .sort((a, b) => b.value - a.value)
      .slice(0, 3)
      .map((c) => `${TRAIT_LABELS[c.trait]}: ${Math.round(traits[c.trait] * 100)}% interest level`);
    return { career, score, reasons };
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// ---------------- Courses ----------------

export type Course = {
  id: string;
  name: string;
  degreeType: "Degree" | "Diploma" | "Integrated" | "Certificate";
  stream: string[];
  duration: string;
  eligibility: string;
  entrance: string[];
  feesMin: number;
  feesMax: number;
  careers: string[]; // career slugs
  opportunities: string;
};

export const COURSES: Course[] = [
  { id: "btech-cse", name: "B.Tech Computer Science & Engineering", degreeType: "Degree", stream: ["Science"], duration: "4 years", eligibility: "12th with Physics, Maths (min ~45-50%)", entrance: ["JEE Main", "State CET"], feesMin: 60000, feesMax: 400000, careers: ["software-engineering", "cybersecurity", "data-science", "artificial-intelligence", "web-development"], opportunities: "Software development, IT services, product companies, higher studies." },
  { id: "btech-cyber", name: "B.Tech CSE (Cyber Security)", degreeType: "Degree", stream: ["Science"], duration: "4 years", eligibility: "12th with PCM", entrance: ["JEE Main", "State CET"], feesMin: 80000, feesMax: 350000, careers: ["cybersecurity", "software-engineering"], opportunities: "SOC analyst, security engineering, audits and compliance." },
  { id: "bca", name: "BCA (Bachelor of Computer Applications)", degreeType: "Degree", stream: ["Science", "Commerce", "Arts/Humanities"], duration: "3 years", eligibility: "12th any stream (Maths preferred)", entrance: ["University entrance", "Merit based"], feesMin: 30000, feesMax: 180000, careers: ["software-engineering", "web-development", "cybersecurity"], opportunities: "Application development, support roles, MCA for advancement." },
  { id: "bsc-ds", name: "B.Sc. Data Science", degreeType: "Degree", stream: ["Science"], duration: "3 years", eligibility: "12th with Maths", entrance: ["CUET", "Merit based"], feesMin: 40000, feesMax: 250000, careers: ["data-science", "artificial-intelligence"], opportunities: "Data analyst, BI roles, M.Sc. and analytics careers." },
  { id: "btech-mech", name: "B.Tech Mechanical Engineering", degreeType: "Degree", stream: ["Science"], duration: "4 years", eligibility: "12th with PCM", entrance: ["JEE Main", "State CET"], feesMin: 50000, feesMax: 300000, careers: ["mechanical-engineering"], opportunities: "Manufacturing, automotive, EV, PSU jobs." },
  { id: "btech-civil", name: "B.Tech Civil Engineering", degreeType: "Degree", stream: ["Science"], duration: "4 years", eligibility: "12th with PCM", entrance: ["JEE Main", "State CET"], feesMin: 45000, feesMax: 250000, careers: ["civil-engineering"], opportunities: "Construction, infrastructure, government JE posts." },
  { id: "diploma-comp", name: "Diploma in Computer Engineering", degreeType: "Diploma", stream: ["Science", "Other"], duration: "3 years", eligibility: "10th pass with Maths & Science", entrance: ["State polytechnic admission"], feesMin: 15000, feesMax: 90000, careers: ["software-engineering", "web-development"], opportunities: "Junior developer/technician roles, lateral entry into B.Tech." },
  { id: "diploma-mech", name: "Diploma in Mechanical Engineering", degreeType: "Diploma", stream: ["Science", "Other"], duration: "3 years", eligibility: "10th pass", entrance: ["State polytechnic admission"], feesMin: 12000, feesMax: 80000, careers: ["mechanical-engineering"], opportunities: "Shop-floor supervision, CAD technician, lateral entry to degree." },
  { id: "mbbs", name: "MBBS", degreeType: "Degree", stream: ["Science"], duration: "5.5 years", eligibility: "12th with Physics, Chemistry, Biology (min 50%)", entrance: ["NEET UG"], feesMin: 100000, feesMax: 2500000, careers: ["medicine"], opportunities: "Clinical practice, PG specialisation, public health." },
  { id: "bpharm", name: "B.Pharm", degreeType: "Degree", stream: ["Science"], duration: "4 years", eligibility: "12th with PCB/PCM", entrance: ["State entrance", "Merit based"], feesMin: 60000, feesMax: 400000, careers: ["pharmacy"], opportunities: "Pharma industry, QA/QC, clinical research, retail pharmacy." },
  { id: "barch", name: "B.Arch", degreeType: "Degree", stream: ["Science"], duration: "5 years", eligibility: "12th with Maths, NATA qualified", entrance: ["NATA", "JEE Main Paper 2"], feesMin: 80000, feesMax: 500000, careers: ["architecture"], opportunities: "Architecture firms, urban planning, independent practice." },
  { id: "bcom", name: "B.Com", degreeType: "Degree", stream: ["Commerce"], duration: "3 years", eligibility: "12th, Commerce preferred", entrance: ["CUET", "Merit based"], feesMin: 15000, feesMax: 150000, careers: ["commerce-accounting", "finance"], opportunities: "Accounting, taxation, CA route, banking." },
  { id: "bba", name: "BBA", degreeType: "Degree", stream: ["Commerce", "Arts/Humanities", "Science"], duration: "3 years", eligibility: "12th any stream", entrance: ["CUET", "IPMAT", "Merit based"], feesMin: 40000, feesMax: 350000, careers: ["business-management", "finance"], opportunities: "Management trainee roles, marketing, MBA route." },
  { id: "ballb", name: "BA LLB (Integrated)", degreeType: "Integrated", stream: ["Arts/Humanities", "Commerce", "Science"], duration: "5 years", eligibility: "12th with min 45%", entrance: ["CLAT", "AILET"], feesMin: 60000, feesMax: 600000, careers: ["law"], opportunities: "Litigation, corporate legal teams, judiciary preparation." },
  { id: "bdes", name: "B.Des (Design)", degreeType: "Degree", stream: ["Science", "Commerce", "Arts/Humanities"], duration: "4 years", eligibility: "12th any stream", entrance: ["UCEED", "NID DAT", "NIFT"], feesMin: 90000, feesMax: 600000, careers: ["design", "animation"], opportunities: "UI/UX, product design, studios, freelancing." },
  { id: "bsc-anim", name: "B.Sc. Animation & VFX", degreeType: "Degree", stream: ["Science", "Commerce", "Arts/Humanities"], duration: "3 years", eligibility: "12th any stream", entrance: ["Institute entrance", "Merit based"], feesMin: 60000, feesMax: 350000, careers: ["animation", "design"], opportunities: "Animation studios, ad agencies, gaming." },
  { id: "bjmc", name: "BA Journalism & Mass Communication", degreeType: "Degree", stream: ["Arts/Humanities", "Commerce", "Science"], duration: "3 years", eligibility: "12th any stream", entrance: ["CUET", "Merit based"], feesMin: 25000, feesMax: 250000, careers: ["media-journalism"], opportunities: "Newsrooms, digital media, PR and content." },
  { id: "bapsy", name: "BA/B.Sc. Psychology", degreeType: "Degree", stream: ["Arts/Humanities", "Science"], duration: "3 years", eligibility: "12th any stream", entrance: ["CUET", "Merit based"], feesMin: 20000, feesMax: 200000, careers: ["psychology"], opportunities: "Counselling (after PG), HR, research." },
  { id: "bed", name: "B.Ed", degreeType: "Degree", stream: ["Science", "Commerce", "Arts/Humanities"], duration: "2 years", eligibility: "Graduation with min 50%", entrance: ["State B.Ed CET"], feesMin: 20000, feesMax: 150000, careers: ["teaching"], opportunities: "School teaching, TET/CTET based government posts." },
  { id: "ba-general", name: "BA (General / Honours)", degreeType: "Degree", stream: ["Arts/Humanities"], duration: "3 years", eligibility: "12th any stream", entrance: ["CUET", "Merit based"], feesMin: 8000, feesMax: 90000, careers: ["government-services", "teaching", "media-journalism"], opportunities: "Civil services preparation, teaching, PG studies." },
];

// ---------------- Colleges ----------------

export type Faculty = {
  name: string;
  department: string;
  subject: string;
  qualification: string;
  experience: string;
  areas: string[];
  videoTitle: string;
  videoSource: string;
  videoUrl: string;
  profileUrl: string;
  style: { concept: number; practical: number; visual: number; stepwise: number; demo: number };
  tags: string[];
  summary: string;
};

export type College = {
  id: string;
  name: string;
  city: string;
  state: string;
  type: "Government" | "Private";
  collegeType: string;
  mode: string[];
  hostel: boolean;
  feesMin: number;
  feesMax: number;
  courses: string[]; // course ids
  entrance: string[];
  facilities: string[];
  admission: string;
  placementNote: string;
  dataNote: string;
  faculty: Faculty[];
};

const fac = (
  name: string,
  department: string,
  subject: string,
  qualification: string,
  experience: string,
  areas: string[],
  style: Faculty["style"],
  tags: string[],
): Faculty => ({
  name,
  department,
  subject,
  qualification,
  experience,
  areas,
  videoTitle: `${subject} — sample lecture`,
  videoSource: "Public educational video (NPTEL / official channel)",
  videoUrl: "https://nptel.ac.in",
  profileUrl: "https://nptel.ac.in",
  style,
  tags,
  summary:
    "AI-generated summary of observable teaching characteristics in the linked sample lecture. This is not a judgement of teaching quality.",
});

export const COLLEGES: College[] = [
  {
    id: "gec-ahmedabad",
    name: "Government Engineering College, Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Government",
    collegeType: "Engineering",
    mode: ["Full-time"],
    hostel: true,
    feesMin: 25000,
    feesMax: 60000,
    courses: ["btech-cse", "btech-mech", "btech-civil", "diploma-comp"],
    entrance: ["JEE Main", "State CET"],
    facilities: ["Library", "Computer labs", "Sports ground", "Hostel", "Wi-Fi campus"],
    admission: "Through state counselling based on JEE Main / state merit list.",
    placementNote: "Placement data varies year to year — verify with the official placement cell.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Prof. Rahul Sharma", "Computer Engineering", "Data Structures", "M.Tech Computer Science", "Listed on college site", ["Algorithms", "Programming"], { concept: 4.5, practical: 4, visual: 5, stepwise: 4.5, demo: 4 }, ["Concept-focused", "Visual", "Step-by-step"]),
      fac("Prof. Priya Patel", "Computer Engineering", "Database Management", "Ph.D. (pursuing)", "Listed on college site", ["DBMS", "SQL"], { concept: 4, practical: 4.5, visual: 4, stepwise: 4, demo: 4.5 }, ["Practical", "Example-driven"]),
      fac("Prof. Amit Shah", "Computer Engineering", "Computer Networks", "M.E. Networking", "Listed on college site", ["Networking", "Security basics"], { concept: 4.5, practical: 4, visual: 4.5, stepwise: 4, demo: 3.5 }, ["Concept-focused", "Problem-solving"]),
      fac("Dr. Meera Joshi", "Mechanical", "Thermodynamics", "Ph.D. Mechanical", "Listed on college site", ["Thermal systems"], { concept: 4.5, practical: 3.5, visual: 4, stepwise: 5, demo: 3 }, ["Step-by-step", "Concept-focused"]),
    ],
  },
  {
    id: "abc-institute",
    name: "ABC Institute of Technology",
    city: "Vadodara",
    state: "Gujarat",
    type: "Private",
    collegeType: "Engineering",
    mode: ["Full-time"],
    hostel: true,
    feesMin: 90000,
    feesMax: 180000,
    courses: ["btech-cse", "btech-cyber", "bca", "bsc-ds"],
    entrance: ["JEE Main", "State CET", "Institute merit"],
    facilities: ["Innovation lab", "Hostel", "Cafeteria", "Sports complex", "Placement cell"],
    admission: "State counselling plus management quota seats.",
    placementNote: "Placement figures should be confirmed directly with the institute.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Prof. Nidhi Desai", "Computer Engineering", "Operating Systems", "M.Tech CSE", "Listed on college site", ["OS", "Systems programming"], { concept: 4, practical: 4, visual: 4.5, stepwise: 4.5, demo: 4 }, ["Visual", "Step-by-step"]),
      fac("Prof. Karan Mehta", "Cyber Security", "Network Security", "M.Tech Information Security", "Listed on college site", ["Security", "Ethical hacking"], { concept: 4.5, practical: 5, visual: 4, stepwise: 4, demo: 5 }, ["Practical", "Demo-heavy", "Problem-solving"]),
      fac("Prof. Sneha Rao", "Data Science", "Statistics for Data Science", "M.Sc. Statistics", "Listed on college site", ["Statistics", "Python"], { concept: 4.5, practical: 4, visual: 4, stepwise: 4.5, demo: 4 }, ["Concept-focused", "Example-driven"]),
    ],
  },
  {
    id: "surat-poly",
    name: "Surat Polytechnic & Science College",
    city: "Surat",
    state: "Gujarat",
    type: "Government",
    collegeType: "Polytechnic",
    mode: ["Full-time", "Part-time"],
    hostel: false,
    feesMin: 12000,
    feesMax: 45000,
    courses: ["diploma-comp", "diploma-mech", "bca"],
    entrance: ["State polytechnic admission"],
    facilities: ["Workshops", "Library", "Computer labs"],
    admission: "Merit-based admission on 10th marks through state portal.",
    placementNote: "Diploma placements are mainly local industry; verify with the institute.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Prof. Hitesh Vyas", "Computer Engineering", "Programming in C", "M.C.A.", "Listed on college site", ["Programming basics"], { concept: 4, practical: 4.5, visual: 3.5, stepwise: 4.5, demo: 4.5 }, ["Practical", "Step-by-step"]),
      fac("Prof. Anjali Nair", "Mechanical", "Workshop Technology", "M.E. Production", "Listed on college site", ["Manufacturing"], { concept: 4, practical: 5, visual: 4, stepwise: 4, demo: 4.5 }, ["Practical", "Demo-heavy"]),
    ],
  },
  {
    id: "pune-univ-college",
    name: "Pune Institute of Science & Commerce",
    city: "Pune",
    state: "Maharashtra",
    type: "Private",
    collegeType: "University College",
    mode: ["Full-time", "Distance"],
    hostel: true,
    feesMin: 45000,
    feesMax: 200000,
    courses: ["bcom", "bba", "bca", "bapsy", "bjmc"],
    entrance: ["CUET", "Institute merit"],
    facilities: ["Auditorium", "Hostel", "Library", "Startup incubation cell"],
    admission: "Merit list based on 12th percentage; CUET considered for select programmes.",
    placementNote: "Commerce and management placements vary by specialisation.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Prof. Rohit Kulkarni", "Commerce", "Financial Accounting", "M.Com, CA (Inter)", "Listed on college site", ["Accounting", "Taxation"], { concept: 4.5, practical: 4, visual: 3.5, stepwise: 5, demo: 3.5 }, ["Step-by-step", "Example-driven"]),
      fac("Prof. Sara Fernandes", "Psychology", "Cognitive Psychology", "M.A. Psychology", "Listed on college site", ["Cognition", "Research methods"], { concept: 5, practical: 3.5, visual: 4, stepwise: 4, demo: 3 }, ["Concept-focused", "Research-oriented"]),
    ],
  },
  {
    id: "delhi-medical",
    name: "Delhi Medical & Health Sciences College",
    city: "New Delhi",
    state: "Delhi",
    type: "Government",
    collegeType: "Medical",
    mode: ["Full-time"],
    hostel: true,
    feesMin: 60000,
    feesMax: 150000,
    courses: ["mbbs", "bpharm"],
    entrance: ["NEET UG"],
    facilities: ["Teaching hospital", "Hostel", "Research labs", "Library"],
    admission: "NEET UG score through central/state counselling.",
    placementNote: "Medical colleges follow internship and residency pathways rather than placements.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Dr. Anita Verma", "Physiology", "Human Physiology", "MD Physiology", "Listed on college site", ["Physiology", "Clinical basics"], { concept: 5, practical: 4, visual: 4.5, stepwise: 4.5, demo: 3.5 }, ["Concept-focused", "Visual"]),
      fac("Dr. Suresh Iyer", "Pharmacology", "Pharmacology", "MD Pharmacology", "Listed on college site", ["Drug action"], { concept: 4.5, practical: 4, visual: 4, stepwise: 4, demo: 3.5 }, ["Example-driven"]),
    ],
  },
  {
    id: "jaipur-design",
    name: "Jaipur School of Design & Media",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Private",
    collegeType: "Design",
    mode: ["Full-time"],
    hostel: true,
    feesMin: 120000,
    feesMax: 320000,
    courses: ["bdes", "bsc-anim", "bjmc"],
    entrance: ["UCEED", "NID DAT", "Institute test"],
    facilities: ["Design studio", "Animation lab", "Hostel", "Exhibition gallery"],
    admission: "Portfolio review plus entrance test.",
    placementNote: "Design placements depend strongly on portfolio quality.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Prof. Kavya Singh", "Design", "Interaction Design", "M.Des", "Listed on college site", ["UI/UX", "Prototyping"], { concept: 4, practical: 5, visual: 5, stepwise: 4, demo: 4.5 }, ["Visual", "Practical"]),
      fac("Prof. Devansh Gupta", "Animation", "3D Animation", "B.Des + studio experience", "Listed on college site", ["Blender", "Rigging"], { concept: 3.5, practical: 5, visual: 5, stepwise: 4, demo: 5 }, ["Demo-heavy", "Practical"]),
    ],
  },
  {
    id: "lucknow-law",
    name: "Lucknow National Law College",
    city: "Lucknow",
    state: "Uttar Pradesh",
    type: "Government",
    collegeType: "Law",
    mode: ["Full-time"],
    hostel: true,
    feesMin: 40000,
    feesMax: 120000,
    courses: ["ballb", "ba-general"],
    entrance: ["CLAT", "State law entrance"],
    facilities: ["Moot court hall", "Law library", "Hostel"],
    admission: "CLAT / state law entrance based counselling.",
    placementNote: "Litigation and corporate placements vary; verify with the college.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Prof. Alok Mishra", "Law", "Constitutional Law", "LL.M.", "Listed on college site", ["Constitutional law"], { concept: 5, practical: 3.5, visual: 3.5, stepwise: 4.5, demo: 3 }, ["Concept-focused", "Case-driven"]),
    ],
  },
  {
    id: "bengaluru-tech",
    name: "Bengaluru Institute of Technology & Management",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private",
    collegeType: "Engineering",
    mode: ["Full-time", "Online"],
    hostel: true,
    feesMin: 150000,
    feesMax: 350000,
    courses: ["btech-cse", "bsc-ds", "bca", "bba"],
    entrance: ["JEE Main", "State CET", "Institute merit"],
    facilities: ["AI lab", "Incubation centre", "Hostel", "Gym", "Placement cell"],
    admission: "State counselling, management quota and institute merit.",
    placementNote: "Located in a strong tech hiring market; verify actual figures officially.",
    dataNote: "Sample dataset for prototype. Verify all details on the official college website.",
    faculty: [
      fac("Prof. Vinay Reddy", "Computer Science", "Machine Learning", "Ph.D. CSE", "Listed on college site", ["ML", "AI"], { concept: 5, practical: 4.5, visual: 4.5, stepwise: 4, demo: 4.5 }, ["Concept-focused", "Demo-heavy"]),
      fac("Prof. Divya Menon", "Computer Science", "Web Technologies", "M.Tech CSE", "Listed on college site", ["Web dev"], { concept: 4, practical: 5, visual: 4.5, stepwise: 4.5, demo: 5 }, ["Practical", "Demo-heavy"]),
      fac("Prof. Arjun Nair", "Management", "Marketing Management", "MBA", "Listed on college site", ["Marketing"], { concept: 4, practical: 4.5, visual: 4, stepwise: 3.5, demo: 3.5 }, ["Example-driven", "Discussion-based"]),
    ],
  },
];

export const getCollege = (id: string) => COLLEGES.find((c) => c.id === id);
export const getCourse = (id: string) => COURSES.find((c) => c.id === id);

export const CITIES = Array.from(new Set(COLLEGES.map((c) => c.city))).sort();
export const STATES = Array.from(new Set(COLLEGES.map((c) => c.state))).sort();

export type Profile = {
  name: string;
  age: string;
  educationLevel: string;
  tenth: string;
  twelfth: string;
  stream: string;
  favouriteSubjects: string;
  dislikedSubjects: string;
  interests: string;
  hobbies: string;
  skills: string;
  preferredLocation: string;
  studyMode: string;
  budget: number;
  collegePreference: string;
  hostelRequired: boolean;
  careerGoal: string;
};

export function collegeMatch(college: College, profile: Profile | null, courseId?: string) {
  let score = 55;
  const reasons: string[] = [];
  if (courseId && college.courses.includes(courseId)) {
    score += 15;
    reasons.push("Offers the course you selected");
  }
  if (profile) {
    if (profile.preferredLocation && college.city.toLowerCase().includes(profile.preferredLocation.toLowerCase().trim())) {
      score += 12;
      reasons.push(`Located in your preferred city (${college.city})`);
    }
    if (profile.budget && college.feesMin <= profile.budget) {
      score += 12;
      reasons.push("Fits within your annual budget");
    } else if (profile.budget) {
      score -= 8;
      reasons.push("Fees are above your stated budget");
    }
    if (profile.collegePreference && profile.collegePreference !== "No preference") {
      if (profile.collegePreference === college.type) {
        score += 8;
        reasons.push(`${college.type} college, as you preferred`);
      } else {
        score -= 5;
      }
    }
    if (profile.hostelRequired) {
      if (college.hostel) {
        score += 6;
        reasons.push("Hostel facility available");
      } else {
        score -= 10;
        reasons.push("No hostel facility");
      }
    }
    if (profile.studyMode && college.mode.includes(profile.studyMode)) {
      score += 4;
      reasons.push(`${profile.studyMode} study mode available`);
    }
  }
  if (college.faculty.length >= 3) {
    score += 3;
    reasons.push(`${college.faculty.length} faculty teaching previews available`);
  }
  return { score: Math.max(35, Math.min(98, Math.round(score))), reasons: reasons.slice(0, 5) };
}
