import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Compass,
  Route as RouteIcon,
  School,
  GraduationCap,
  Scale,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Career Coach AI — Discover Your Career, Choose Your Future" },
      {
        name: "description",
        content:
          "An AI-powered platform that helps students after 10th and 12th discover suitable careers, explore courses and colleges, preview faculty teaching, and make informed decisions.",
      },
      { property: "og:title", content: "Career Coach AI — Discover Your Career, Choose Your Future" },
      {
        property: "og:description",
        content:
          "Discover careers, build roadmaps, find courses and colleges, experience faculty teaching, and compare your options.",
      },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: Brain, title: "Discover Your Interests", text: "A 24-question interest assessment turns confusion into a clear interest profile." },
  { icon: Compass, title: "Find Suitable Careers", text: "Percentage-based career matches with the reasons behind every score." },
  { icon: RouteIcon, title: "Build Your Roadmap", text: "Step-by-step learning path with time estimates, projects and progress tracking." },
  { icon: School, title: "Find the Right College", text: "Filter by course, city, budget, hostel and type — with a personal match score." },
  { icon: GraduationCap, title: "Experience Faculty Teaching", text: "Preview faculty, subjects and sample lectures before you choose a college." },
  { icon: Scale, title: "Compare Your Options", text: "Side-by-side college comparison and a What If? career simulator." },
];

const JOURNEY = [
  ["Mujhe kya karna chahiye?", "Discover Career"],
  ["Mere liye kaunsa career suitable hai?", "AI Career Match"],
  ["Is career ke liye kya karna hoga?", "Career Roadmap"],
  ["Kaunsa course karun?", "Course Finder"],
  ["Kaunsa college choose karun?", "College Finder"],
  ["College ke teachers kaise padhate hain?", "Faculty & Teaching Preview"],
  ["Mere liye kaunsa option better hai?", "Compare & Decide"],
];

function Landing() {
  return (
    <AppLayout>
      <section className="surface-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              For students after 10th & 12th
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Career Coach <span className="text-gradient-brand">AI</span>
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-white/90 sm:text-2xl">
              Discover Your Career. Explore Your Options. Choose Your Future.
            </p>
            <p className="mt-5 max-w-2xl text-base text-white/70">
              An AI-powered platform that helps students discover suitable career paths, explore courses and colleges,
              and make informed decisions about their future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/assessment">
                  Discover My Career <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/colleges">Explore Colleges</Link>
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck className="size-4" /> The platform never decides for you — it gives you information so you
              can decide.
            </p>
          </div>

          <div className="animate-float-soft self-center rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Sample AI career match</p>
            <div className="mt-4 space-y-3">
              {[
                ["Software Engineering", 92],
                ["Cybersecurity", 87],
                ["Data Science", 81],
              ].map(([label, score]) => (
                <div key={label as string} className="rounded-xl bg-ink/40 p-4">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span>{label}</span>
                    <span className="text-accent">{score}% Match</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${score}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/60">
              Illustrative example. Your own results depend on your assessment answers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Everything you need to decide</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Discover → Explore → Compare → Experience → Decide.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="card-lift card-lift-hover border-border/70">
              <CardContent className="p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Your complete journey</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {JOURNEY.map(([question, answer]) => (
              <div key={question} className="flex items-center gap-4 rounded-xl border bg-background p-4">
                <p className="flex-1 text-sm font-medium">“{question}”</p>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                <p className="w-40 shrink-0 text-sm font-semibold text-primary">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <Disclaimer>
          AI recommendations are guidance, not guaranteed predictions. College fees, faculty details, admission rules
          and placement information change and must be verified through official college or university sources. This
          prototype uses clearly-labelled sample data and does not fabricate verified statistics.
        </Disclaimer>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/profile">Set up my profile</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/coach">Ask Career Coach AI</Link>
          </Button>
        </div>
      </section>
    </AppLayout>
  );
}
