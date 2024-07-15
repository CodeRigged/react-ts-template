import createTheme from "@mui/material/styles/createTheme"
import { useMemo } from "react"
import { useThemeStore } from "../stores"

export const useAppTheme = () => {
  const { mode } = useThemeStore()

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )
  return theme
}
