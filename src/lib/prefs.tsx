import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { copy, type Lang } from "./content";

export type Theme = "light" | "dark";

type Prefs = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const PrefsContext = createContext<Prefs | null>(null);

const LANG_KEY = "lang";
const THEME_KEY = "theme";

function read(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private mode or blocked storage: the choice just won't outlive the tab.
  }
}

/**
 * Runs in <head> before first paint, so a stored or system dark theme never
 * flashes light. Kept as a string because it must not wait for the bundle.
 */
export const THEME_BOOT = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

/**
 * Language and theme, shared by every page. The server always renders
 * English; a stored Portuguese preference — or a Portuguese browser — swaps
 * in after hydration.
 */
export function PrefsProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = read(LANG_KEY);
    if (stored === "en" || stored === "pt") setLangState(stored);
    else if (navigator.language.toLowerCase().startsWith("pt")) setLangState("pt");

    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    write(LANG_KEY, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      write(THEME_KEY, next);
      return next;
    });
  }, []);

  return (
    <PrefsContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs() {
  const prefs = useContext(PrefsContext);
  if (!prefs) throw new Error("usePrefs must be used inside PrefsProvider");
  return prefs;
}

/** The copy for the current language. */
export function useCopy() {
  return copy[usePrefs().lang];
}
