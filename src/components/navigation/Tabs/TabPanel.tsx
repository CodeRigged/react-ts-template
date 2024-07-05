import { ChildComponent } from "~/types/common"
import { Selected } from "./"

interface TabPanelProps extends ChildComponent {
  index: number
  value: Selected
}

const TabPanel = ({ index, value, children, ...other }: TabPanelProps) => {
  return value === index ? (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  ) : null
}
export default TabPanel
