import { Button, ButtonProps } from "@mui/material"
import { Link, To } from "react-router-dom"

type LinkButton = {
  label: string
  to: To
}
/**
 * Renders a LinkButton component with the provided label, linkTo, and additional button properties.
 *
 * @param {string} label - The label to be displayed on the button.
 * @param {To} linkTo - The destination link for the button.
 * @param {ButtonProps} buttonProps - Additional properties  from the button component.
 * @return {JSX.Element} The rendered LinkButton component.
 */
const LinkButton = ({ label, to, ...buttonProps }: LinkButton & ButtonProps) => {
  return (
    <Button component={Link} to={to} {...buttonProps}>
      {label}
    </Button>
  )
}
export default LinkButton
