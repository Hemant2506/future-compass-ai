import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AppLayout } from "@/components/AppLayout";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Login or Sign Up — Career Coach AI" },
      { name: "description", content: "Create your Career Coach AI student account to save careers, colleges and roadmap progress." },
      { property: "og:title", content: "Login or Sign Up — Career Coach AI" },
      { property: "og:description", content: "Create your student account to save your career discovery progress." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { state, update } = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState(state.profile?.name ?? "");
  const [email, setEmail] = useState("");

  const signIn = () => {
    update({ loggedIn: true });
    if (name.trim()) {
      update({
        loggedIn: true,
        profile: {
          ...(state.profile ?? {
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
            budget: 0,
            collegePreference: "",
            hostelRequired: false,
            careerGoal: "",
          }),
          name: name.trim(),
        },
      });
    }
    toast.success("Signed in (prototype session stored on this device only)");
    navigate({ to: "/dashboard" });
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-md px-4 py-16">
        <Card className="card-lift">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Welcome to Career Coach AI</CardTitle>
            <CardDescription>Prototype sign-in — your data stays in this browser.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signup">
              <TabsList className="w-full">
                <TabsTrigger value="signup" className="flex-1">
                  Sign up
                </TabsTrigger>
                <TabsTrigger value="login" className="flex-1">
                  Login
                </TabsTrigger>
              </TabsList>
              <TabsContent value="signup" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Hemant" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional in prototype)</Label>
                  <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
                <Button className="w-full" onClick={signIn}>
                  Create account & continue
                </Button>
              </TabsContent>
              <TabsContent value="login" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email2">Email</Label>
                  <Input id="email2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
                <Button className="w-full" onClick={signIn}>
                  Continue
                </Button>
              </TabsContent>
            </Tabs>
            <Disclaimer className="mt-6">
              We only collect what is needed for guidance. No marks, budget or personal details leave your device in
              this prototype.
            </Disclaimer>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
