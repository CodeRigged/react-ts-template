import { Autocomplete, TextField } from "@mui/material"
import { SyntheticEvent } from "react"

export type SelectBoxOption<T> = {
  hint?: string
  label: string
  value: NonNullable<T>
}

interface SelectBoxProps {
  label?: string
  onChange: (event: SyntheticEvent, selectedOption: SelectBoxOption<unknown> | null) => void
  options: SelectBoxOption<unknown>[]
  selected: unknown
}

const SelectBox = ({ label, options, selected, onChange }: SelectBoxProps) => {
  const selectedOption = options.find(option => option.value === selected)
  const containsHints = options.some(option => option.hint)
  const hint = containsHints ? selectedOption?.hint ?? " " : ""

  return (
    <Autocomplete
      value={selectedOption || null}
      onChange={onChange}
      disablePortal
      options={options}
      renderInput={params => <TextField {...params} label={label} helperText={hint} />}
    />
  )
}
export default SelectBox
