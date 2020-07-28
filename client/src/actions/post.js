import axios from "axios";
import {
  GET_POSTS,
  POST_ERROR,
  GET_POST,
  CLEAR_POST,
  CREATE_POST,
} from "./types";
import { setAlert } from "./alert";

//get all posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get current user posts
export const getMyPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/:id");
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const clearPost = () => (dispatch) => {
  dispatch({ type: CLEAR_POST });
};
