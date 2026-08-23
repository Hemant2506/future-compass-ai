import { Info, ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Disclaimer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent-foreground",
        className,
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0" />
      <p>{children}</p>
    </div>
  );
}

export function SourceTag({ verified, label }: { verified?: boolean; label: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        verified ? "bg-success/15 text-success" : "bg-primary/10 text-primary",
      )}
    >
      {verified ? <ShieldCheck className="size-3.5" /> : <Sparkles className="size-3.5" />}
      {label}
    </span>
  );
}
