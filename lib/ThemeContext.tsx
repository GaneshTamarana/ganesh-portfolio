"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: "dark",
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    /* On mount, read persisted preference or system preference */
    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme") as Theme | null;

            if (stored === "dark" || stored === "light") {
                setTheme(stored);
            } else if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            }
        } catch {
            // Silently fallback if localStorage is restricted (e.g. mobile private browsing)
        }

        setMounted(true);
    }, []);

    /* Apply / remove the .dark class on <html> */
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        try {
            localStorage.setItem("theme", theme);
        } catch {
            // Silently fallback if localStorage is restricted
        }
    }, [theme, mounted]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
