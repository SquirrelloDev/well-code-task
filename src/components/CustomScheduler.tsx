import { ViewTypes } from "@/types/CustomScheduler";
import { SchedulerProps, ViewState } from "@devexpress/dx-react-scheduler";
import { Appointments, AppointmentTooltip, DayView, MonthView, Scheduler, WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import { Box } from "@mui/material";
interface CustomSchedulerProps extends Pick<SchedulerProps, 'data'> {
    currentViewName: ViewTypes
}
function CustomScheduler({ data, currentViewName }: CustomSchedulerProps) {
    return (
        <Box>
            <Scheduler data={data} height={360} locale='pl-PL' firstDayOfWeek={1}>
                <ViewState currentDate={'2024-11-01'} currentViewName={currentViewName}/>
                <DayView />
                <WeekView />
                <MonthView />
                <Appointments />
                <AppointmentTooltip />
            </Scheduler>
        </Box>
    );
}
export default CustomScheduler