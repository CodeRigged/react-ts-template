import Tabs, { TabType } from "~/components/navigation/Tabs"
import PageLayout from "~/layouts/PageLayout"
import AdvancedTab from "./AdvancedTab"
import GeneralTab from "./GeneralTab"

const SettingsPage = () => {
  const tabs: TabType[] = [
    { label: "General", content: <GeneralTab /> },
    { label: "Advanced", content: <AdvancedTab /> },
  ]
  return (
    <PageLayout documentTitle="Settings">
      <Tabs tabs={tabs} />
    </PageLayout>
  )
}
export default SettingsPage
