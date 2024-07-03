import HomeIcon from "@mui/icons-material/Home"
import LinkIconButton from "../../buttons/LinkIconButton"

/**
 * A function that renders the AppLogo component.
 *
 * @todo Change Logo
 *
 * @return {JSX.Element} The rendered AppLogo component.
 */
const AppLogo = () => {
  return <LinkIconButton Icon={HomeIcon} linkTo="/" />
}
export default AppLogo
