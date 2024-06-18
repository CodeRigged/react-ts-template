import { SvgIconProps } from "@mui/material"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import { ComponentType } from "react"
import { Link, To } from "react-router-dom"

type LinkIconButtonProps = {
  Icon: ComponentType<SvgIconProps>
  linkTo: To
}
/**
 * Renders a LinkIconButton component.
 *
 * @param {LinkIconButtonProp} Icon - The Icon component to display.
 * @param {To} linkTo - The link destination.
 * @param {IconButtonProps} iconButtonProps - Additional properties from the icon button component.
 * @return {ReactNode} The rendered LinkIconButton component.
 */
const LinkIconButton = ({ Icon, linkTo, ...iconButtonProps }: LinkIconButtonProps & IconButtonProps) => {
  return (
    <IconButton component={Link} to={linkTo} {...iconButtonProps}>
      <Icon />
    </IconButton>
  )
}
export default LinkIconButton
