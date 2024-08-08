import { Card, CardContent, CardHeader, Divider } from "@mui/material"
import CustomScheduler from "@/components/CustomScheduler"
import { AppointmentModel } from "@devexpress/dx-react-scheduler"
import { useState } from "react"
import { ViewTypes } from "@/types/CustomScheduler"

const testData: AppointmentModel[] = [
    { startDate: '2024-11-01T09:45', endDate: '2024-11-01T11:00', title: 'Meeting' },
    { startDate: '2024-11-01T12:00', endDate: '2024-11-01T13:30', title: 'Go to a gym' }
]
function SchedulerCard(){
    const [currentViewName, setCurrentViewName] = useState<ViewTypes>('Day')
    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const viewSwitchHandler = (viewName: string) => {
        setCurrentViewName(viewName as ViewTypes)
    }
    const dateSwitchHandler = (date: Date) => {
        setCurrentDate(date)
    }
    return (
        <Card sx={{ border: '1px solid #ccc', maxWidth: '1440px' }}>
            <CardHeader title="Planer" sx={{ paddingBottom: '0' }}/>
            <CardContent>
                <Divider/>
                <CustomScheduler data={testData} currentViewName={currentViewName} currentDate={currentDate} dateSwitchHandler={dateSwitchHandler} viewSwitchHandler={viewSwitchHandler} />
            </CardContent>
        </Card>
    )
}
export default SchedulerCard