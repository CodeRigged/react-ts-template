import { createBrowserRouter } from "react-router-dom"
import AppLayout from "~/layouts/AppLayout"
import LandingPage from "~/pages/LandingPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
])

export default router
