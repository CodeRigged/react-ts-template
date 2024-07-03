import { AppBar, Grid, useTheme } from "@mui/material"
import { ReactNode } from "react"
import AccountMenu from "./AccountMenu"
import AppLogo from "./AppLogo"
import ThemeSwitch from "./ThemeSwitch"

type NavigationBarProps = {
  children?: ReactNode
}
/**
 * Renders a navigation bar with an app logo, children components, and account and theme switches.
 *
 * @param {Props} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The rendered navigation bar.
 */
const NavigationBar = ({ children }: NavigationBarProps) => {
  const theme = useTheme()
  return (
    <AppBar position="static" color={theme.palette.mode === "light" ? "transparent" : "default"}>
      <Grid container alignItems="center">
        <AppLogo />
        <Grid item xs>
          {children}
        </Grid>
        <Grid justifySelf="center" item>
          <AccountMenu />
          <ThemeSwitch />
        </Grid>
      </Grid>
    </AppBar>
  )
}
export default NavigationBar
