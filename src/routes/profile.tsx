import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AppLayout, PageHeader } from "@/components/AppLayout";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import type { Profile } from "@/lib/data";
import { profileCompletion, useStore } from "@/lib/store";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Student Profile — Career Coach AI" },
      {
        name: "description",
        content:
          "Set up your student profile: marks, stream, subjects, interests, budget and location preferences to personalise career and college recommendations.",
      },
      { property: "og:title", content: "Student Profile — Career Coach AI" },
      { property: "og:description", content: "Personalise your career and college recommendations." },
    ],
  }),
  component: ProfilePage,
});

const EMPTY: Profile = {
  name: "",
  age: "",
  educationLevel: "",
  tenth: "",
  twelfth: "",
  stream: "",
  favouriteSubjects: "",
  dislikedSubjects: "",
  interests: "",
  hobbies: "",
  skills: "",
  preferredLocation: "",
  studyMode: "",
  budget: 100000,
  collegePreference: "No preference",
  hostelRequired: false,
  careerGoal: "",
};

function ProfilePage() {
  const { state, update, hydrated } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState<Profile>(state.profile ?? EMPTY);

  useEffect(() => {
    if (hydrated && state.profile) setForm(state.profile);
  }, [hydrated, state.profile]);

  const set = <K extends keyof Profile>(key: K, value: Profile[K]) => setForm((f) => ({ ...f, [key]: value }));
  const completion = profileCompletion(form);

  const save = (next?: "assessment" | "dashboard") => {
    update({ profile: form, loggedIn: true });
    toast.success("Profile saved");
    if (next) navigate({ to: next === "assessment" ? "/assessment" : "/dashboard" });
  };

  return (
    <AppLayout>
      <PageHeader
        title="Student Profile"
        subtitle="The more you share, the more personal your career matches and college match scores become. You can edit this any time."
      >
        <div className="w-full sm:w-56">
          <p className="mb-2 text-xs font-semibold text-muted-foreground">Profile completion — {completion}%</p>
          <Progress value={completion} />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10">
        <Card className="card-lift">
          <CardHeader>
            <CardTitle className="font-display text-lg">Basic details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name">
              <Input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
            </Field>
            <Field label="Age">
              <Input value={form.age} onChange={(e) => set("age", e.target.value)} inputMode="numeric" placeholder="e.g. 17" />
            </Field>
            <Field label="Current education level">
              <Select value={form.educationLevel} onValueChange={(v) => set("educationLevel", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Studying in 10th", "Completed 10th", "Studying in 12th", "Completed 12th", "Diploma", "Undergraduate"].map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Stream">
              <Select value={form.stream} onValueChange={(v) => set("stream", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stream" />
                </SelectTrigger>
                <SelectContent>
                  {["Science", "Commerce", "Arts/Humanities", "Diploma", "Other"].map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="10th percentage">
              <Input value={form.tenth} onChange={(e) => set("tenth", e.target.value)} inputMode="decimal" placeholder="e.g. 78" />
            </Field>
            <Field label="12th percentage (if applicable)">
              <Input value={form.twelfth} onChange={(e) => set("twelfth", e.target.value)} inputMode="decimal" placeholder="e.g. 72" />
            </Field>
          </CardContent>
        </Card>

        <Card className="card-lift">
          <CardHeader>
            <CardTitle className="font-display text-lg">Interests & strengths</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <Field label="Favourite subjects">
              <Textarea value={form.favouriteSubjects} onChange={(e) => set("favouriteSubjects", e.target.value)} placeholder="Maths, Computer Science…" />
            </Field>
            <Field label="Subjects you dislike">
              <Textarea value={form.dislikedSubjects} onChange={(e) => set("dislikedSubjects", e.target.value)} placeholder="Chemistry…" />
            </Field>
            <Field label="Interests">
              <Textarea value={form.interests} onChange={(e) => set("interests", e.target.value)} placeholder="Technology, gaming, robotics…" />
            </Field>
            <Field label="Hobbies">
              <Textarea value={form.hobbies} onChange={(e) => set("hobbies", e.target.value)} placeholder="Sketching, cricket…" />
            </Field>
            <Field label="Existing skills">
              <Textarea value={form.skills} onChange={(e) => set("skills", e.target.value)} placeholder="Basic Python, Excel, video editing…" />
            </Field>
            <Field label="Career goals (if already known)">
              <Textarea value={form.careerGoal} onChange={(e) => set("careerGoal", e.target.value)} placeholder="Optional" />
            </Field>
          </CardContent>
        </Card>

        <Card className="card-lift">
          <CardHeader>
            <CardTitle className="font-display text-lg">College preferences</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred location (city)">
              <Input value={form.preferredLocation} onChange={(e) => set("preferredLocation", e.target.value)} placeholder="e.g. Ahmedabad" />
            </Field>
            <Field label="Preferred study mode">
              <Select value={form.studyMode} onValueChange={(v) => set("studyMode", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["Full-time", "Part-time", "Distance", "Online"].map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Government / Private preference">
              <Select value={form.collegePreference} onValueChange={(v) => set("collegePreference", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["No preference", "Government", "Private"].map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label={`Approximate annual budget — ₹${form.budget.toLocaleString("en-IN")}`}>
              <Slider
                value={[form.budget]}
                min={10000}
                max={600000}
                step={10000}
                onValueChange={([v]) => set("budget", v)}
                className="pt-3"
              />
            </Field>
            <div className="flex items-center justify-between rounded-xl border p-4 sm:col-span-2">
              <div>
                <p className="text-sm font-medium">Hostel required</p>
                <p className="text-xs text-muted-foreground">Colleges without hostel will score lower for you.</p>
              </div>
              <Switch checked={form.hostelRequired} onCheckedChange={(v) => set("hostelRequired", v)} />
            </div>
          </CardContent>
        </Card>

        <Disclaimer>
          We only ask for information used to personalise guidance. Everything is stored locally in your browser for
          this prototype and can be cleared from Settings.
        </Disclaimer>

        <div className="flex flex-wrap gap-3">
          <Button onClick={() => save()}>Save profile</Button>
          <Button variant="secondary" onClick={() => save("assessment")}>
            Save & start assessment
          </Button>
          <Button variant="outline" onClick={() => save("dashboard")}>
            Save & go to dashboard
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
