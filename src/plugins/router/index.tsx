import { createBrowserRouter } from "react-router-dom"
import AppLayout from "~/layouts/AppLayout"
import LandingPage from "~/pages/Landing"
import ProfilePage from "~/pages/Profile"
import SettingsPage from "~/pages/Settings"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
])

export default router
