import { ViewTypes } from "@/types/CustomScheduler";
import { SchedulerProps, ViewState } from "@devexpress/dx-react-scheduler";
import { Appointments, AppointmentTooltip, CurrentTimeIndicator, DateNavigator, DayView, MonthView, Scheduler, Toolbar, WeekView, ViewSwitcher } from "@devexpress/dx-react-scheduler-material-ui";
import { Box } from "@mui/material";
interface CustomSchedulerProps extends Pick<SchedulerProps, 'data'> {
    currentViewName: ViewTypes
    currentDate: Date
    viewSwitchHandler: (viewName: string) => void
    dateSwitchHandler: (date: Date) => void
}
function CustomScheduler({ data, currentViewName, currentDate, viewSwitchHandler, dateSwitchHandler }: CustomSchedulerProps) {
    return (
        <Box>
            <Scheduler data={data} height={360} locale='pl-PL' firstDayOfWeek={1}>
                <ViewState currentDate={currentDate} currentViewName={currentViewName} onCurrentViewNameChange={viewSwitchHandler} onCurrentDateChange={dateSwitchHandler}/>
                <DayView displayName="Dzień"/>
                <WeekView displayName="Tydzień"/>
                <MonthView displayName="Miesiąc"/>
                <Appointments />
                <AppointmentTooltip />
                <Toolbar />
                <DateNavigator />
                <ViewSwitcher />
                <CurrentTimeIndicator updateInterval={60000} />
            </Scheduler>
        </Box>
    );
}
export default CustomScheduler