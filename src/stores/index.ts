import { PaletteMode } from "@mui/material"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Languages } from "~/types/enums"

interface ThemeStore {
  mode: PaletteMode
  toggleMode: () => void
}
export const useThemeStore = create(
  persist<ThemeStore>(
    set => ({
      mode: "light",
      toggleMode: () => set(state => ({ mode: state.mode === "light" ? "dark" : "light" })),
    }),
    { name: "theme" }
  )
)

interface LanguageStore {
  selectedLanguage: Languages
  updateLanguage: (language: Languages) => void
}
export const useLanguageStore = create(
  persist<LanguageStore>(
    set => ({
      selectedLanguage: Languages.ENGLISH,
      updateLanguage: language => set({ selectedLanguage: language }),
    }),
    { name: "language" }
  )
)
