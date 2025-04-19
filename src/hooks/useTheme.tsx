import { useState, useEffect } from "react";

type Theme = "dark" | "light" | "system";

const useTheme = (): [Theme, (newTheme: Theme | ((prevTheme: Theme) => Theme)) => void] => {
    const [theme , setThemeState] = useState<Theme>(localStorage.getItem("theme") as Theme || "system");

    const element: HTMLElement = document.documentElement;
    const darkQuery: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const onWindowMatch = () : void => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    };

    // const setTheme = (newTheme: Theme | ((prevTheme: Theme) => Theme)) => {
    //     setThemeState((prevTheme) => {
    //         const resolvedTheme = typeof newTheme === "function" ? newTheme(prevTheme) : newTheme;
    //         return resolvedTheme;
    //     });
    // };

    // useEffect for initial theme setup
    useEffect(() => {
        onWindowMatch();
    }, []);

    // useEffect for theme state changes
    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem("theme", "dark");
                break;
            case "light":
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
                break;
            default:
                localStorage.removeItem("theme");
                onWindowMatch();
                break;
        };
    }, [theme]);


    // tracking the system theme changes
    useEffect(() => {
        const changeHandler = (e: MediaQueryListEvent) => {
            if(!("theme" in localStorage)) {
                if (e.matches) {
                    element.classList.add("dark");
                } else {
                    element.classList.remove("dark");
                }
            }
        };

        darkQuery.addEventListener("change", changeHandler);

        return () => {
            darkQuery.removeEventListener("change", changeHandler);
        };
    }, []);

    return [theme, setThemeState];
};

export default useTheme;