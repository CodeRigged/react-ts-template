import { PaletteMode } from "@mui/material"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface useThemeStore {
  mode: PaletteMode
  toggleMode: () => void
}
export const useThemeStore = create(
  persist<useThemeStore>(
    set => ({
      mode: "light",
      toggleMode: () => set(state => ({ mode: state.mode === "light" ? "dark" : "light" })),
    }),
    { name: "theme" }
  )
)
