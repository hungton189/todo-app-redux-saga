import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from "./styles"
const TaskItem = ({task,status}) =>{
    const classes = useStyles();
    return (
        <Box mb={2} className={classes.taskItem}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.content}>
                        <h2 className={classes.title}>{task.title}</h2>
                        <h5 className={classes.description}>{task.description}</h5>
                    </div>
                    <div className={classes.status}>{status.label}</div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <IconButton className={classes.buttonEdit} >
                        <EditIcon fontSize="small"/>
                    </IconButton>
                    <IconButton className={classes.buttonDelete} >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}
export default TaskItem;