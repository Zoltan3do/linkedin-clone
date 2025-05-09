export const MY_PROFILE = "MY_PROFILE";
export const ADD_POST = "ADD_POST";
export const ADD_IMAGE_TO_POST = "ADD_IMAGE_TO_POST";
export const MOD_POST = "MOD_POST";
export const SET_IMAGE = "SET_IMAGE";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";
import token from "../../components/tooken.json"
 
// Action per ottenere il profilo dell'utente
const API_KEY = token.AUTH
export const myProfile = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/me";
  return async (dispatch) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `${API_KEY}`, 
        },
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: MY_PROFILE, payload: data });
      } else {
        throw new Error(`${res.status} - Errore nella fetch`);
      }
    } catch (err) {
      console.log("Errore durante il fetch del profilo:", err);
    }
  };
};

// Azioni per la gestione dei post
export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const modPost = (post) => {
  return {
    type: MOD_POST,
    payload: post,
  };
};

export const addImageToPost = (postId, imageUrl) => {
  return {
    type: ADD_IMAGE_TO_POST,
    payload: { postId, imageUrl },
  };
};

export const setImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
});

export const deleteFromFavouriteAction = (postId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            token.AUTH
        },
      }
    );
    if (response.ok) {
      dispatch({ type: DELETE_FROM_FAVOURITES, payload: postId });
    } else {
      console.error("Errore nella cancellazione del post.");
    }
  } catch (error) {
    console.error("Errore nella cancellazione del post", error);
  }
};

