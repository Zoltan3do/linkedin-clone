import { ADD_HOME_POST, FETCH_HOME_POSTS, DELETE_HOME_POST } from "../actions/homePostAction";

const initialState = {
  homeposts: [],
};

const homePost = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOME_POST:
      return { ...state, homeposts: [action.payload, ...state.homeposts] };
    case FETCH_HOME_POSTS:
      return { ...state, homeposts: action.payload };
    case DELETE_HOME_POST:
      return { ...state, homeposts: state.homeposts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};

export default homePost;
