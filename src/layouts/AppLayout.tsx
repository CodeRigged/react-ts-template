import { Outlet } from "react-router-dom"
import NavigationBar from "~/components/navigation/NavigationBar"
const AppLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}
export default AppLayout
