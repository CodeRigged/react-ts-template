import { Typography } from "@mui/material"
import { ChildComponent } from "~/types/common"
import useDocumentTitle from "~/utils/hooks/useDocumentTitle"

interface PageLayoutProps extends ChildComponent {
  documentTitle: string
}
const PageLayout = ({ documentTitle, children }: PageLayoutProps) => {
  useDocumentTitle(documentTitle)
  return (
    <div className="container">
      <Typography variant="h4">{documentTitle}</Typography>
      {children}
    </div>
  )
}
export default PageLayout
