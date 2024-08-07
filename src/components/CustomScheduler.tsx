import { Paper } from "@mui/material";
import { Appointments, AppointmentTooltip, Scheduler, WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import { AppointmentModel, ViewState } from "@devexpress/dx-react-scheduler";
const testData: AppointmentModel[] = [
    { startDate: '2024-11-01T09:45', endDate: '2024-11-01T11:00', title: 'Meeting' },
    { startDate: '2024-11-01T12:00', endDate: '2024-11-01T13:30', title: 'Go to a gym' }
]
function CustomScheduler() {
    return (
        <Paper>
            <Scheduler data={testData} height={560} locale='pl-PL' firstDayOfWeek={1}>
                <ViewState currentDate={'2024-11-01'}/>
                <WeekView />
                <Appointments />
                <AppointmentTooltip />
            </Scheduler>
        </Paper>
    );
}
export default CustomScheduler