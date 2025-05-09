import { UPDATE_PROFILE_IMAGE } from "../actions/ProfileSection";

const initialState = {
  profileImageURL: "",
};

const profileImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_IMAGE:
      return {
        ...state,
        profileImageURL: action.payload,
      };
    default:
      return state;
  }
};

export default profileImageReducer;
