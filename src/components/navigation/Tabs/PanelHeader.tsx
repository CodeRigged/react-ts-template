import { Tab, Tabs } from "@mui/material"
import { Dispatch, SetStateAction, SyntheticEvent } from "react"
import { Selected, TabType } from "./"

interface PanelHeaderProps {
  selected: Selected
  setSelected: Dispatch<SetStateAction<Selected>>
  tabs: TabType[]
}

const PanelHeader = ({ selected, setSelected, tabs }: PanelHeaderProps) => {
  const handleChange = (_e: SyntheticEvent, newValue: Selected) => {
    setSelected(newValue)
  }

  return (
    <Tabs value={selected} onChange={handleChange} aria-label="tabpanel">
      {tabs.map(({ label }) => (
        <Tab id={`tab-${label}`} key={`tab-${label}`} aria-controls={`tabpanel-${label}`} label={label} />
      ))}
    </Tabs>
  )
}
export default PanelHeader
