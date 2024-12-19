import { PaletteMode } from "@mui/material"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Locales } from "~/types/enums"
import { createPendingSlice, PendingState } from "./state-handlers"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppStore extends PendingState {}

export const useAppStore = create<AppStore>((...a) => ({
  ...createPendingSlice(...a),
}))

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

interface LocaleStore {
  selectedLocale: Locales
  updateLocale: (locale: Locales) => void
}

export const useLocaleStore = create(
  persist<LocaleStore>(
    set => ({
      selectedLocale: Locales.ENGLISH,
      updateLocale: locale => set({ selectedLocale: locale }),
    }),
    { name: "locale" }
  )
)
