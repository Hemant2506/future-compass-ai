import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/assessment", label: "Assessment" },
  { to: "/careers", label: "Careers" },
  { to: "/courses", label: "Courses" },
  { to: "/colleges", label: "Colleges" },
  { to: "/compare", label: "Compare" },
  { to: "/what-if", label: "What If?" },
  { to: "/coach", label: "Ask Coach" },
  { to: "/saved", label: "Saved" },
] as const;

export function AppLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-5" />
            </span>
            Career Coach <span className="text-gradient-brand">AI</span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  pathname === n.to && "bg-secondary text-foreground",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/profile">My Profile</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <nav className="grid gap-1 border-t bg-card px-4 py-3 lg:hidden">
            {[...NAV, { to: "/profile", label: "My Profile" }, { to: "/settings", label: "Settings" }].map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Career Coach AI — guidance, not guarantees.</p>
          <p className="mt-2 max-w-3xl">
            AI recommendations are decision support only. Fees, faculty details, admission rules and placement
            information change frequently and must be verified through official college or university sources before
            you make any admission decision. Sample college and faculty data in this prototype is illustrative.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link to="/settings" className="hover:text-foreground">
              Settings & data
            </Link>
            <Link to="/coach" className="hover:text-foreground">
              Ask Career Coach
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold sm:text-3xl">{title}</h1>
          {subtitle && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
