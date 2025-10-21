"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const themes = ["light", "dark", "system"] as const;

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark" | "system">("system");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme") as typeof themes[number] | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    if (currentTheme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", currentTheme);
    }

    if (
      currentTheme === "dark" ||
      (currentTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [currentTheme, initialized]);

  return [currentTheme, setCurrentTheme] as const;
};

export function ThemeSwitcherHome() {
  const [, setCurrentTheme] = useTheme();

  return (
    <div className="flex gap-3">
      {themes.map((theme) => (
        <button key={theme} name="theme" onClick={() => setCurrentTheme(theme)}>
          {theme === "light" ? (
            <Sun className="h-4 w-4 text-primary/80 hover:text-primary" />
          ) : theme === "dark" ? (
            <Moon className="h-4 w-4 text-primary/80 hover:text-primary" />
          ) : (
            <Monitor className="h-4 w-4 text-primary/80 hover:text-primary" />
          )}
        </button>
      ))}
    </div>
  );
}
