import { POST_ERROR,POST_SUCCESS,POST_FETCHING } from "./actions";
// import store from "../store";
import Axios from "axios";


export const post_fetching = ()=>{
    return {
        type : POST_FETCHING
    }
}

export const post_success = (data)=>{
    return {
        type : POST_SUCCESS,
        payLoad : data
    }
}

export const post_error = (error)=>{
    return {
        type : POST_ERROR,
        payLoad : error
    }
}


export const fetchFunction = (dispatch)=>{
    return  async function getData() {
        const url = "https://gauravgitacc.github.io/postAppData/posts.json";
          try {
           dispatch(post_fetching());
            let response = await Axios.get(url);
            console.log(response);
          dispatch(post_success(response.data));
          } catch (error) {
            console.log(error.message);
            dispatch(post_error(error.message));
          }
        }
}