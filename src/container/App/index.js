import {ThemeProvider} from '@material-ui/core/styles';
import theme from "../../common/theme"
import useStyles from "./styles"
import Taskboard from "../Taskboard/index"
const App = ()=>{
    const classes = useStyles();
    return (
    <ThemeProvider theme={theme} >
        <div className={classes.root}>
            <Taskboard />
        </div>
    </ThemeProvider>
    )
}
export default (App);