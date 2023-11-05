import {
  GET_USER_INFO,
  ENROLL_COURSE,
  GET_ENROLLED_COURSES,
  MARK_COMPLETE,
  LOADING,
  ERROR,
} from "./type";
import axios from "axios";

export const getUserInfo = (userID) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const res = await axios.get(
      `${import.meta.env.VITE_URL}/api/user/${userID}`
    );

    dispatch({
      type: GET_USER_INFO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const enrollCourse = (courseID) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const res = await axios.post(
      `${import.meta.env.VITE_URL}/api/user/enroll/${courseID}`
    );

    dispatch({
      type: ENROLL_COURSE,
      payload: res.data.payload,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const markComplete = (courseID) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const res = await axios.put(
      `${import.meta.env.VITE_URL}/api/user/course/${courseID}`
    );

    dispatch({
      type: MARK_COMPLETE,
      payload: res.data.payload,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const getEnrolledCourses = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });

    const res = await axios.get(
      `${import.meta.env.VITE_URL}/api/user/course/enrolled-courses`
    );

    dispatch({
      type: GET_ENROLLED_COURSES,
      payload: res.data.payload,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};
