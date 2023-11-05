import {
  GET_NEXT_COURSES,
  GET_COURSE_BY_ID,
  LIKE_COURSE,
  SEARCH_COURSE,
  GET_ENROLLED_COURSES,
  LOADING,
  ERROR,
} from "./type";
import axios from "axios";

export const getNextCourses = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.get(
      `${import.meta.env.VITE_URL}/api/course?page=${page}&limit=5`
    );
    console.log(res);
    dispatch({
      type: GET_NEXT_COURSES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const getCourseById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.get(`${import.meta.env.VITE_URL}/api/course/${id}`);
    dispatch({
      type: GET_COURSE_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const likeCourse = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.put(`${import.meta.env.VITE_URL}/api/course/${id}`);
    dispatch({
      type: LIKE_COURSE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};

export const searchCourse = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.get(
      `${import.meta.env.VITE_URL}/api/course/search/${keyword}`
    );
    dispatch({
      type: SEARCH_COURSE,
      payload: res.data,
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
      `${import.meta.env.VITE_URL}/api/course/enrolled/course`
    );
    dispatch({
      type: GET_ENROLLED_COURSES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    });
  }
};
