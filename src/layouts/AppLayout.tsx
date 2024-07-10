import { Outlet } from "react-router-dom"
import LoadingOverlay from "~/components/feedback/LoadingOverlay"
import NavigationBar from "~/components/navigation/NavigationBar"

/**
 * Renders the main layout of the application.
 *
 * @todo update navigation bar children
 *
 * @return {JSX.Element} The rendered layout.
 */
const AppLayout = () => (
  <>
    <LoadingOverlay />
    <NavigationBar />
    <Outlet />
  </>
)

export default AppLayout
