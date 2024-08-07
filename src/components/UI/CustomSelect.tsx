import { SelectValues } from "@/types/SchedulerCard"
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material"

interface CustomSelectProps<T extends string>{
    onChange: (event: SelectChangeEvent) => void
    selectedValue: T
    possibleValues: SelectValues<T>
}
function CustomSelect<T extends string>({ onChange, selectedValue, possibleValues } : CustomSelectProps<T>) {
    return (
        <FormControl>
            <Select
            id="range-select"
            value={selectedValue}
            onChange={onChange}
            >
                {possibleValues.map(possibleValue => <MenuItem key={possibleValue.name} value={possibleValue.name}>{possibleValue.displayName}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
export default CustomSelect