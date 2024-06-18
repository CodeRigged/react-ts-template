import { ThemeProvider, createTheme } from "@mui/material"
import { useMemo } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./plugins/router"
import { useThemeStore } from "./stores"

function App() {
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
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
