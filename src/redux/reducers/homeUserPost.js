import { SET_PROFILE, SET_SINGLE_PROFILE } from "../actions/homePostAction";

const initialState = {
  user: null, // Stato iniziale per l'utente
  singleProfile: null, // Stato per un singolo profilo
};

const HomeUserPost = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, user: action.payload };
      case SET_SINGLE_PROFILE:
        return { ...state, singleProfile: action.payload };
    default:
      return state;
  }
};

export default HomeUserPost;
