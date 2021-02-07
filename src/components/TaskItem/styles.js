import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    buttonEdit:{ 
        backgroundColor:"#2052e0de",
        color:"#fff"
    },
    buttonDelete:{
        marginLeft:"2px", 
        backgroundColor:"#d22424de",
        color:"#fff",
        transition:""
    },
    cardActions:{
        display:"flex",
        justifyContent:"flex-end"
    },
    cardContent:{
        position:"relative",
        padding:"12px"
    },
    status: {
        position:"absolute",
        top:"8px",
        right:"8px",
        fontSize:"10px"
    },
    title:{
        margin:"4px 0px"
    },
    description: {
        margin:"4px 0px"
    }
})
export default useStyles; 