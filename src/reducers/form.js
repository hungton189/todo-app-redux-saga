import * as types from "../constants/reducer"
const initialState = false;

const form = (state = initialState,actions)=>
{
    switch(actions.type) {
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true;
        default:
            return state;
    }
}
export default form;