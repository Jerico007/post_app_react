import { POST_FETCHING,POST_SUCCESS,POST_ERROR } from "../Actions/actions";

let initial = {
    fetching : false,
    data : [],
    error : null
}

const postReducer = (state=initial , action)=>{

    if(action.type === POST_FETCHING)
    {
        return {...state,fetching : true};
    }
    if(action.type === POST_SUCCESS)
    {
        return {...state,fetching:false,data:action.payLoad,error:null};
    }
    if(action.type === POST_ERROR)
    {
        return {...state , fetching:false,data:[],error:action.payLoad};
    }
    return state;
}

export default postReducer;