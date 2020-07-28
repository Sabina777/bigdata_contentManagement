import { GET_POSTS, POST_ERROR, GET_POST, CLEAR_POST } from "../actions/types";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case GET_POST:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case CLEAR_POST:
      return {
        ...state,
        posts: null,
        repos: [],
        loading: false,
      };
    default:
      return state;
  }
}
