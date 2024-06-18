import { ButtonProps, Divider, IconButtonProps } from "@mui/material"
import Menu from "@mui/material/Menu"
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem"
import { ComponentType, ReactNode, useState } from "react"

type MenuItem = { element: ReactNode; menuItemProps?: MenuItemProps }
type AppMenu = {
  Activator: ComponentType<IconButtonProps | ButtonProps>
  items: MenuItem[]
  divideAt?: number[]
}

const AppMenu = ({ Activator, items, divideAt }: AppMenu) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = Boolean(anchorEl)
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Activator
        onClick={handleOpen}
        aria-controls={isOpen ? "account-menu" : undefined}
        aria-expanded={isOpen ? "true" : undefined}
      />
      <Menu
        MenuListProps={{ dense: true }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {items.map(({ element, menuItemProps }, i) => (
          <div key={`menu-${i}`}>
            <MenuItem {...menuItemProps}>{element}</MenuItem>
            {divideAt?.includes(i) && <Divider />}
          </div>
        ))}
      </Menu>
    </>
  )
}

export default AppMenu
