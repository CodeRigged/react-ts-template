import { AccountCircle, Logout, Settings } from "@mui/icons-material"
import { Avatar, Divider, IconButton } from "@mui/material"
import AppMenu from "../Menu"
import { MenuListItem } from "../Menu/MenuItems"

const AccountMenu = () => {
  return (
    <AppMenu
      Activator={({ onClick }) => (
        <IconButton onClick={onClick} size="small" sx={{ ml: 2 }} aria-haspopup="true">
          <Avatar />
        </IconButton>
      )}
      items={[
        <MenuListItem icon={<AccountCircle />} text="Profile" />,
        <Divider />,
        <MenuListItem icon={<Settings fontSize="small" />} text="Settings" dense />,
        <MenuListItem icon={<Logout fontSize="small" />} text="Logout" dense />,
      ]}
    />
  )
}
export default AccountMenu
