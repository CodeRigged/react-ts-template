import { AccountCircle, Logout, Settings } from "@mui/icons-material"
import { Divider, IconButton } from "@mui/material"
import AppMenu from "../Menu"
import { MenuListItem } from "../Menu/MenuItems"

/**
 * Renders an account menu component.
 *
 * @todo Change Menu Items
 *
 * @return {JSX.Element} The rendered account menu component.
 */
const AccountMenu = () => {
  return (
    <AppMenu
      Activator={({ onClick }) => (
        <IconButton onClick={onClick} sx={{ ml: 2 }} aria-haspopup="true">
          <AccountCircle />
        </IconButton>
      )}
      items={[
        <MenuListItem icon={<AccountCircle />} text="Profile" to="/profile" />,
        <Divider />,
        <MenuListItem dense icon={<Settings fontSize="small" />} text="Settings" to="/settings" />,
        <MenuListItem dense icon={<Logout fontSize="small" />} text="Logout" to="/logout" />,
      ]}
    />
  )
}
export default AccountMenu
