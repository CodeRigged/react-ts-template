import { useIntl } from "react-intl"
import PageLayout from "~/layouts/PageLayout"
import LandingMessage from "./LandingMessage"

const LandingPage = () => {
  const { formatMessage } = useIntl()

  return (
    <PageLayout documentTitle={formatMessage({ id: "pages.landing.title" })}>
      <LandingMessage />
    </PageLayout>
  )
}
export default LandingPage
