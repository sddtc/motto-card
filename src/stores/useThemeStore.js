import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("change-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("change-theme", theme)
        set({ theme })
    }
}));