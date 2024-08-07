import { Card, CardContent, CardHeader } from "@mui/material"
import CustomScheduler from "./CustomScheduler"

function SchedulerCard(){
    return (
        <Card sx={{ border: '1px solid #ccc', maxWidth: '1440px' }}>
            <CardHeader title="Planer"/>
            <CardContent>
                <CustomScheduler />
            </CardContent>
        </Card>
    )
}
export default SchedulerCard