import { CAREERS, COLLEGES, COURSES, getCareer, type Profile } from "./data";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/**
 * Mock "AI" reply engine for the prototype. The structure (profile + question in,
 * grounded answer out) mirrors a real AI gateway call so it can be swapped for
 * a server function later without changing the UI.
 */
export function coachReply(question: string, profile: Profile | null): string {
  const q = question.toLowerCase();
  const name = profile?.name ? profile.name.split(" ")[0] : "there";

  const matchCareer = CAREERS.find((c) => q.includes(c.name.toLowerCase().split(" ")[0]) && c.name.length > 3);

  if (q.includes("roadmap") && matchCareer) {
    const steps = matchCareer.roadmap.map((s, i) => `${i + 1}. ${s.title} — ${s.time}`).join("\n");
    return `Here is a suggested roadmap for ${matchCareer.name}, ${name}:\n\n${steps}\n\nOpen the interactive roadmap to tick off each step and see resources and projects. Remember this is AI guidance — adjust it to your own pace and college syllabus.`;
  }

  if ((q.includes("b.tech") || q.includes("btech")) && q.includes("bca")) {
    return "B.Tech (4 years) is an engineering degree that needs 12th with Physics & Maths and usually an entrance exam like JEE Main or a state CET. It goes deeper into core engineering, maths and systems, and is often preferred for core engineering and PSU roles.\n\nBCA (3 years) is an applications degree open to most streams, cheaper, and focused on programming and software applications. Many BCA students later do MCA.\n\nIf you enjoy maths and want maximum options, B.Tech CSE. If you want a faster, lower-cost software route, BCA is genuinely fine — your projects and skills matter most either way.";
  }

  if ((q.includes("maths") || q.includes("math")) && (q.includes("computer") || q.includes("technology"))) {
    return `Maths + computers is a strong combination, ${name}. Career options worth exploring: Software Engineering, Data Science, Artificial Intelligence, Cybersecurity and Electronics/VLSI.\n\nTypical routes: B.Tech CSE / B.Tech AI-DS / BCA / B.Sc. Data Science.\n\nRun the interest assessment to get percentage-based matches for your own answers.`;
  }

  const pctMatch = q.match(/(\d{2})\s*%/);
  if (pctMatch || q.includes("percent")) {
    const pct = pctMatch ? Number(pctMatch[1]) : Number(profile?.twelfth ?? 0);
    const line =
      pct >= 85
        ? "With that score most competitive programmes are open to you, including government engineering and medical counselling (subject to entrance exam scores)."
        : pct >= 70
          ? "That score is comfortable for most degree programmes. Entrance exam performance will matter more than board percentage for engineering, medical, law and design."
          : "Many good options remain: BCA, B.Sc., B.Com, diploma programmes (with lateral entry into degrees later), design and media courses. Skills and projects will matter more than percentage.";
    return `${line}\n\nCourses to consider: ${COURSES.slice(0, 6)
      .map((c) => c.name)
      .join(", ")}. Use Course Finder with your stream and budget filters for a shortlist. Always confirm cut-offs on official admission portals.`;
  }

  if (q.includes("budget") || q.includes("fees") || q.includes("afford")) {
    const budget = profile?.budget ?? 100000;
    const list = COLLEGES.filter((c) => c.feesMin <= budget);
    return `Based on the budget in your profile (${inr(budget)} per year), these sample colleges have programmes starting within range: ${
      list.length ? list.map((c) => `${c.name} (${c.city}, from ${inr(c.feesMin)})`).join("; ") : "none in this sample dataset — try increasing the budget filter"
    }.\n\nFee figures here are illustrative sample data. Verify the current fee structure, scholarships and government fee-regulation notices on the official college website.`;
  }

  if (q.includes("faculty") || q.includes("teacher") || q.includes("padha") || q.includes("lecture")) {
    return "Yes — open any college profile and go to the Faculty & Teaching Preview tab. You will see department, subject, qualification, teaching areas, a linked sample lecture and an AI summary of observable teaching characteristics (concept explanation, practical examples, visual explanation, step-by-step pace, demonstrations).\n\nImportant: that summary describes what is observable in the linked lecture. It is not a judgement of whether a teacher is good or bad.";
  }

  if (q.includes("college") && (q.includes("which") || q.includes("kaunsa") || q.includes("suggest"))) {
    return "Open College Finder — it scores every college against your profile (course, city, budget, government/private preference, hostel, study mode) and shows the reasons behind each match score. Shortlist 3-4 and use the Compare page to see fees, location, hostel, faculty previews and match score side by side.";
  }

  if (matchCareer) {
    const c = matchCareer;
    return `${c.name}: ${c.overview}\n\nEducation: ${c.education.join(", ")}\nKey skills: ${c.skills.join(", ")}\nEntrance exams: ${c.exams.join(", ")}\nJob roles: ${c.roles.join(", ")}\n\nOpen the career page for the full roadmap, projects and learning resources. This is AI guidance, not a prediction of your outcome.`;
  }

  if (q.includes("confused") || q.includes("kya karna") || q.includes("what should i do")) {
    return `Let's start structured, ${name}:\n\n1. Complete your profile (marks, stream, subjects you like/dislike, budget, location).\n2. Take the interest assessment — 24 quick questions.\n3. Review your top career matches with percentage scores and reasons.\n4. Pick 2-3 careers and compare them in the What If? simulator.\n5. Use Course Finder, then College Finder, then Faculty & Teaching Preview.\n6. Compare shortlisted colleges and decide yourself — the platform only gives you information.`;
  }

  return `I can help with career direction, courses, roadmaps, colleges, fees and faculty teaching previews.\n\nTry asking: "Mujhe maths aur computer pasand hai, mere liye kya career options hain?", "Mere 12th mein 72% hain, kya courses consider karun?", "Cybersecurity ka roadmap kya hoga?", "B.Tech aur BCA mein kya difference hai?" or "Mere budget ke according kaunse colleges hain?"\n\n${
    getCareer("software-engineering") ? "" : ""
  }Every answer is AI-style guidance based on your profile and the sample data in this prototype — verify important details officially.`;
}

export const SAMPLE_QUESTIONS = [
  "Mujhe Maths aur Computer pasand hai, mere liye kya career options hain?",
  "Mere 12th mein 72% hain, mujhe kya courses consider karne chahiye?",
  "Mujhe cybersecurity mein jaana hai, roadmap kya hoga?",
  "B.Tech aur BCA mein kya difference hai?",
  "Mere budget ke according kaunse colleges consider kar sakta hoon?",
  "Is college ke faculty lectures available hain?",
];
