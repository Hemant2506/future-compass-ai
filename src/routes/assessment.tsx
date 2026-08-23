import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AppLayout, PageHeader } from "@/components/AppLayout";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS, TRAIT_LABELS } from "@/lib/data";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Career Interest Assessment — Career Coach AI" },
      {
        name: "description",
        content:
          "Answer 24 quick questions about subjects, problem-solving, creativity and work style to get percentage-based career matches.",
      },
      { property: "og:title", content: "Career Interest Assessment — Career Coach AI" },
      { property: "og:description", content: "Discover which career fields fit your interests and strengths." },
    ],
  }),
  component: AssessmentPage,
});

const PAGE_SIZE = 4;
const SCALE = [
  { v: 1, label: "Not at all" },
  { v: 2, label: "Rarely" },
  { v: 3, label: "Sometimes" },
  { v: 4, label: "Often" },
  { v: 5, label: "Very much" },
];

function AssessmentPage() {
  const { state, update } = useStore();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, number>>(state.answers ?? {});
  const [page, setPage] = useState(0);

  const pages = Math.ceil(QUESTIONS.length / PAGE_SIZE);
  const current = QUESTIONS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const answered = Object.keys(answers).length;
  const pageComplete = current.every((q) => answers[q.id]);
  const progress = Math.round((answered / QUESTIONS.length) * 100);

  const finish = () => {
    update({ answers, assessmentDone: true });
    navigate({ to: "/results" });
  };

  const traitPreview = useMemo(
    () => Object.entries(TRAIT_LABELS).slice(0, 4).map(([, label]) => label),
    [],
  );

  return (
    <AppLayout>
      <PageHeader
        title="AI Interest & Career Assessment"
        subtitle={`24 questions across ${traitPreview.length}+ interest dimensions. There are no right or wrong answers — answer honestly.`}
      >
        <div className="w-full sm:w-64">
          <p className="mb-2 text-xs font-semibold text-muted-foreground">
            {answered}/{QUESTIONS.length} answered
          </p>
          <Progress value={progress} />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
        <p className="text-sm font-semibold text-muted-foreground">
          Section {page + 1} of {pages}
        </p>

        {current.map((q) => (
          <Card key={q.id} className="card-lift">
            <CardContent className="p-6">
              <p className="font-display text-base font-semibold">{q.text}</p>
              <p className="mt-1 text-xs text-muted-foreground">Measures: {TRAIT_LABELS[q.trait]}</p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {SCALE.map((s) => (
                  <button
                    key={s.v}
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: s.v }))}
                    className={cn(
                      "rounded-xl border px-2 py-3 text-xs font-medium transition-all",
                      answers[q.id] === s.v
                        ? "border-primary bg-primary text-primary-foreground shadow-md"
                        : "hover:border-primary/50 hover:bg-secondary",
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
            <ArrowLeft className="mr-1 size-4" /> Back
          </Button>
          {page < pages - 1 ? (
            <Button disabled={!pageComplete} onClick={() => setPage((p) => p + 1)}>
              Next <ArrowRight className="ml-1 size-4" />
            </Button>
          ) : (
            <Button disabled={answered < QUESTIONS.length} onClick={finish}>
              See my career matches <ArrowRight className="ml-1 size-4" />
            </Button>
          )}
        </div>

        <Disclaimer>
          This assessment produces AI-generated recommendations based on your stated interests. It is not a guaranteed
          career prediction or an aptitude certification.
        </Disclaimer>
      </div>
    </AppLayout>
  );
}
