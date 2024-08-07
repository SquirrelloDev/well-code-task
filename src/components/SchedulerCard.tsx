import { Card, CardContent, CardHeader, Divider, SelectChangeEvent } from "@mui/material"
import CustomScheduler from "@/components/CustomScheduler"
import CustomSelect from "@/components/UI/CustomSelect"
import { AppointmentModel } from "@devexpress/dx-react-scheduler"
import { useState } from "react"
import { ViewTypes } from "@/types/CustomScheduler"
import { SelectValues } from "@/types/SchedulerCard"
const testData: AppointmentModel[] = [
    { startDate: '2024-11-01T09:45', endDate: '2024-11-01T11:00', title: 'Meeting' },
    { startDate: '2024-11-01T12:00', endDate: '2024-11-01T13:30', title: 'Go to a gym' }
]
const possibleValues: SelectValues<ViewTypes> = [
    { name: 'Day', displayName: 'Dzień' },
    { name: 'Week', displayName: 'Tydzień' },
    { name: 'Month', displayName: 'Miesiąc' },
]
function SchedulerCard(){
    const [currentViewName, setCurrentViewName] = useState<ViewTypes>('Day')
    const viewSwitchHandler = (event: SelectChangeEvent) => {
        setCurrentViewName(event.target.value as ViewTypes)
    }
    return (
        <Card sx={{ border: '1px solid #ccc', maxWidth: '1440px' }}>
            <CardHeader title="Planer" sx={{ paddingBottom: '0' }}/>
            <CardContent>
                <Divider sx={{ marginBottom: '1em' }}/>
                <CustomSelect possibleValues={possibleValues} selectedValue={currentViewName} onChange={viewSwitchHandler}/>
                <CustomScheduler data={testData} currentViewName={currentViewName} />
            </CardContent>
        </Card>
    )
}
export default SchedulerCard