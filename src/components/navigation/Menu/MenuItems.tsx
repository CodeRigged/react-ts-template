import { ListItemIcon, MenuItem, MenuItemProps } from "@mui/material"
import { ReactElement, ReactNode } from "react"
import { Link, To } from "react-router-dom"

type ItemProps = {
  icon?: ReactNode
  props?: MenuItemProps
  text: string
  to?: To
}

export const MenuListItem = ({
  icon,
  text,
  to,
  ...props
}: ItemProps & MenuItemProps): ReactElement<typeof MenuItem> => (
  <MenuItem component={Link} to={to} {...props}>
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    {text}
  </MenuItem>
)
