"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    useRef,
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
    const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);

    /* On mount, sync with the DOM class already established by the pre-hydration head script */
    useEffect(() => {
        try {
            const isDark = document.documentElement.classList.contains("dark");
            setTheme(isDark ? "dark" : "light");
        } catch {
            // Silently fallback if DOM is not accessible
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const currentIsDark = root.classList.contains("dark");
        const nextTheme: Theme = currentIsDark ? "light" : "dark";

        // 1. Activate coordinated theme transition class
        root.classList.add("theme-transition");

        // 2. Synchronously apply dark/light class on <html> with zero latency
        if (nextTheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        // 3. Persist to storage immediately
        try {
            localStorage.setItem("theme", nextTheme);
        } catch {
            // Silently fallback if localStorage is restricted
        }

        // 4. Update React state
        setTheme(nextTheme);

        // 5. Clean up transition class after animation completes
        if (transitionTimerRef.current) {
            clearTimeout(transitionTimerRef.current);
        }
        transitionTimerRef.current = setTimeout(() => {
            root.classList.remove("theme-transition");
        }, 350);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
