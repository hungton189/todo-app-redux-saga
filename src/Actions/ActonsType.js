import * as types from "../constants/reducer"
export const openForm = ()=> {
    return{
        type:types.OPEN_FORM
    }
}
export const closeForm = ()=> {
    return{
        type:types.CLOSE_FORM
    }
}