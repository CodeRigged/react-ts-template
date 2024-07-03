import { createTheme } from "@mui/material"
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
        components: {
          MuiSvgIcon: {
            defaultProps: {
              color: "primary",
            },
          },
        },
      }),
    [mode]
  )
  return theme
}
