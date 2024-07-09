import { Divider, Typography } from "@mui/material"
import { useState } from "react"
import SelectBox, { SelectBoxOption } from "~/components/inputs/select/SelectBox"
import SettingsSection from "~/components/pages/Settings/SettingsSection"
import { Languages } from "~/types/enums"

const GeneralTab = () => {
  const [selected, setSelected] = useState<Languages>(Languages.ENGLISH)
  const languageOptions: SelectBoxOption<Languages>[] = [
    { label: "English", value: Languages.ENGLISH },
    { label: "French", value: Languages.FRENCH },
    { label: "German", value: Languages.GERMAN },
  ]
  return (
    <div>
      <Typography variant="h6">Language & Time</Typography>
      <Divider />
      <SettingsSection
        components={[
          <SelectBox
            label="Language"
            selected={selected}
            options={languageOptions}
            onChange={(_event, selectedOption) => setSelected(selectedOption?.value as Languages)}
          />,
        ]}
      />
    </div>
  )
}
export default GeneralTab
