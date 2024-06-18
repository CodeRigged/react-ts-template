import { AppBar, Grid } from "@mui/material"
import { ReactNode } from "react"
import AccountMenu from "./AccountMenu"
import AppLogo from "./AppLogo"
import ThemeSwitch from "./ThemeSwitch"

type Props = {
  children?: ReactNode
}
const NavigationBar = ({ children }: Props) => {
  return (
    <AppBar position="static">
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
