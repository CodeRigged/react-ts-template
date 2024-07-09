import { Divider, Typography } from "@mui/material"
import SelectBox, { SelectBoxOption } from "~/components/inputs/select/SelectBox"
import SettingsSection from "~/components/pages/Settings/SettingsSection"
import { useLanguageStore } from "~/stores/index"
import { Languages } from "~/types/enums"

const GeneralTab = () => {
  const { selectedLanguage, updateLanguage } = useLanguageStore()
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
            selected={selectedLanguage}
            options={languageOptions}
            onChange={(_event, selectedOption) => updateLanguage(selectedOption?.value as Languages)}
          />,
        ]}
      />
    </div>
  )
}
export default GeneralTab
