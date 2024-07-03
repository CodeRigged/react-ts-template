import { ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import router from "./plugins/router"
import { useAppTheme } from "./theme"

function App() {
  const theme = useAppTheme()
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
