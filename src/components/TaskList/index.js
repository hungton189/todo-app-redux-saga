import {Grid} from "@material-ui/core"
import Box from '@material-ui/core/Box'
import TaskItem from "../TaskItem/index"
const TaskList = ({tasks,status}) => {
    return (
        <Grid item md={4}>
            <Box mt={2} mb={2}>
                <div>{status.label}</div>
            </Box>
            <div>
            {tasks.map((task,index)=>{
                return <TaskItem 
                            task={task} 
                            status={status} 
                            key={index}
                        />
            })}
            </div>
        </Grid>
    )
}
export default TaskList;