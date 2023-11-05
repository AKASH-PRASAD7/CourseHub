import { SIGN_IN, SIGN_UP, SIGN_OUT, LOADING, ERROR } from "./type";
import axios from "axios";

export const signIn = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const res = await axios.post(
      `${import.meta.env.VITE_URL}/api/auth/signin`,
      formData
    );

    dispatch({
      type: SIGN_IN,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const signUp = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const res = await axios.post(
      `${import.meta.env.VITE_URL}/api/auth/signup`,
      formData
    );

    dispatch({
      type: SIGN_UP,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const res = await axios.get(`${import.meta.env.VITE_URL}/api/auth/signout`);

    dispatch({
      type: SIGN_OUT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};
