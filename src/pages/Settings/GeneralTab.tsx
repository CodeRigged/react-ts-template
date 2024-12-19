import { Divider, Typography } from "@mui/material"
import { FormattedMessage, useIntl } from "react-intl"
import SelectBox, { SelectBoxOption } from "~/components/inputs/select/SelectBox"
import SettingsSection from "~/components/pages/Settings/SettingsSection"
import { useLocaleStore } from "~/stores/index"
import { Locales } from "~/types/enums"

const GeneralTab = () => {
  const { formatMessage } = useIntl()
  const { selectedLocale, updateLocale } = useLocaleStore()

  const localeOptions: SelectBoxOption<Locales>[] = [
    { label: formatMessage({ id: "languages.en-US" }), value: Locales.ENGLISH },
    { label: formatMessage({ id: "languages.fr-FR" }), value: Locales.FRENCH },
    { label: formatMessage({ id: "languages.de-DE" }), value: Locales.GERMAN },
  ]

  return (
    <div>
      <Typography variant="h6">
        <FormattedMessage id="pages.settings.tabs.general.sections.locale" />
      </Typography>
      <Divider />
      <SettingsSection
        components={[
          <SelectBox
            label={formatMessage({ id: "pages.settings.tabs.general.sections.locale" })}
            selected={selectedLocale}
            options={localeOptions}
            onChange={(_event, selectedOption) => updateLocale(selectedOption?.value as Locales)}
          />,
        ]}
      />
    </div>
  )
}
export default GeneralTab
