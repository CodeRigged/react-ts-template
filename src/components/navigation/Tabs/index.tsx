import Box from "@mui/material/Box"
import { ReactNode, useState } from "react"
import PanelHeader from "./PanelHeader"
import TabPanel from "./TabPanel"

export type Selected = string | number

export type TabType = {
  content: ReactNode
  label: string
}

interface TabsProps {
  tabs: TabType[]
}

const Tabs = ({ tabs }: TabsProps) => {
  const [selected, setSelected] = useState<Selected>(0)

  return (
    <Box>
      <PanelHeader selected={selected} setSelected={setSelected} tabs={tabs} />
      {tabs.map(({ label, content }, i) => (
        <TabPanel key={label} index={i} value={selected}>
          <div className="container">{content}</div>
        </TabPanel>
      ))}
    </Box>
  )
}
export default Tabs
