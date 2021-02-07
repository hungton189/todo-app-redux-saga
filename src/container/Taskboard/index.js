import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import useStyles from "./styles"
import Grid from '@material-ui/core/Grid';
import {STATUSES} from "../../constants/index"
import TaskList from "../../components/TaskList/index"
import TaskForm from "../../components/TaskForm/index"
import * as actions from "../../Actions/ActonsType"
import {useDispatch} from "react-redux"

const listTask = [
    {
        id:1,
        title:"Đi chơi",
        description:"Đi chơi",
        status:0
    },
    {
        id:2,
        title:"Read book",
        description:"Read material ui book",
        status:1
    },
    {
        id:3,
        title:"Đi ngủ",
        description:"Đi ngủ",
        status:2
    },
    {
        id:4,
        title:"Học bài",
        description:"Học bài",
        status:1
    }
];

const Taskboard = ()=>{
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        console.log("HandleClickOpen");
        dispatch(actions.openForm())
    };
    const classes = useStyles();
    const renderBoard = ()=>{
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status,index)=>{
                        const taskFilterWithStatus = listTask.filter(item=>item.status === status.value)
                        return <TaskList tasks={taskFilterWithStatus} status={status}/>
                    })
                }
            </Grid>
        )
        return xhtml;
    }
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                <AddIcon />
                Thêm công việc
            </Button>
            <div>{renderBoard()}</div>
            <TaskForm />
        </div>
    )
}
export default Taskboard;