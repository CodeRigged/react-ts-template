import { AccountCircle, Logout, Settings } from "@mui/icons-material"
import { Avatar, IconButton, ListItemIcon } from "@mui/material"
import AppMenu from "../AppMenu"

const AccountMenu = () => {
  return (
    <AppMenu
      Activator={({ onClick }) => (
        <IconButton onClick={onClick} size="small" sx={{ ml: 2 }} aria-haspopup="true">
          <Avatar />
        </IconButton>
      )}
      divideAt={[0]}
      items={[
        {
          element: (
            <>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              Profile
            </>
          ),
        },
        {
          element: (
            <>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </>
          ),
        },
        {
          element: (
            <>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </>
          ),
        },
      ]}
    />
  )
}
export default AccountMenu
