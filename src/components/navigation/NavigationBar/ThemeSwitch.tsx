import { DarkMode, LightMode } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "@mui/material/styles"
import { useThemeStore } from "~/stores/index"

const ThemeSwitch = () => {
  const theme = useTheme()
  const { toggleMode } = useThemeStore()
  return <IconButton onClick={toggleMode}>{theme.palette.mode === "light" ? <LightMode /> : <DarkMode />}</IconButton>
}

export default ThemeSwitch
