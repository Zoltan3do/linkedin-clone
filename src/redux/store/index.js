import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileSectionReducer from "../reducers/ProfileSection";
import postReducers from "../reducers/Post";
import homePost from "../reducers/homePost";
import HomeUserPost from "../reducers/homeUserPost";

const globalReducer = combineReducers({
  profile: ProfileSectionReducer,
  posts: postReducers,
  homePosts: homePost,
  user: HomeUserPost
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
