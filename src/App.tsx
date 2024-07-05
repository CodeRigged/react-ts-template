import { CssBaseline, ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import router from "./plugins/router"
import { useAppTheme } from "./theme"

function App() {
  const theme = useAppTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
