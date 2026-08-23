import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Answers, Profile } from "./data";

export type SavedKind = "career" | "course" | "college" | "faculty" | "video" | "resource";
export type SavedItem = { kind: SavedKind; id: string; label: string; sublabel?: string; href?: string };

export type AppState = {
  loggedIn: boolean;
  profile: Profile | null;
  answers: Answers;
  assessmentDone: boolean;
  saved: SavedItem[];
  roadmapProgress: Record<string, string[]>; // careerSlug -> completed step titles
  compare: string[]; // college ids
  settings: { disclaimers: boolean; hindiHints: boolean };
};

const DEFAULT_STATE: AppState = {
  loggedIn: false,
  profile: null,
  answers: {},
  assessmentDone: false,
  saved: [],
  roadmapProgress: {},
  compare: [],
  settings: { disclaimers: true, hindiHints: true },
};

const KEY = "career-coach-ai:v1";

type Ctx = {
  state: AppState;
  update: (patch: Partial<AppState>) => void;
  toggleSave: (item: SavedItem) => void;
  isSaved: (kind: SavedKind, id: string) => boolean;
  toggleStep: (careerSlug: string, step: string) => void;
  toggleCompare: (collegeId: string) => void;
  reset: () => void;
  hydrated: boolean;
};

const StoreContext = createContext<Ctx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState({ ...DEFAULT_STATE, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  const value = useMemo<Ctx>(
    () => ({
      state,
      hydrated,
      update: (patch) => setState((s) => ({ ...s, ...patch })),
      toggleSave: (item) =>
        setState((s) => {
          const exists = s.saved.some((i) => i.kind === item.kind && i.id === item.id);
          return {
            ...s,
            saved: exists ? s.saved.filter((i) => !(i.kind === item.kind && i.id === item.id)) : [...s.saved, item],
          };
        }),
      isSaved: (kind, id) => state.saved.some((i) => i.kind === kind && i.id === id),
      toggleStep: (careerSlug, stepTitle) =>
        setState((s) => {
          const done = s.roadmapProgress[careerSlug] ?? [];
          const next = done.includes(stepTitle) ? done.filter((d) => d !== stepTitle) : [...done, stepTitle];
          return { ...s, roadmapProgress: { ...s.roadmapProgress, [careerSlug]: next } };
        }),
      toggleCompare: (collegeId) =>
        setState((s) => {
          const exists = s.compare.includes(collegeId);
          if (exists) return { ...s, compare: s.compare.filter((c) => c !== collegeId) };
          if (s.compare.length >= 4) return s;
          return { ...s, compare: [...s.compare, collegeId] };
        }),
      reset: () => setState(DEFAULT_STATE),
    }),
    [state, hydrated],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export function profileCompletion(profile: Profile | null) {
  if (!profile) return 0;
  const fields = Object.entries(profile).filter(([k]) => k !== "hostelRequired");
  const filled = fields.filter(([, v]) => (typeof v === "number" ? v > 0 : String(v ?? "").trim() !== "")).length;
  return Math.round((filled / fields.length) * 100);
}
