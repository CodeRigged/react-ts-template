import { useIntl } from "react-intl"
import PageLayout from "~/layouts/PageLayout"

const LandingPage = () => {
  const { formatMessage } = useIntl()
  return <PageLayout documentTitle={formatMessage({ id: "pages.landing.title" })}>TODO</PageLayout>
}
export default LandingPage
