import {
  GET_USER_INFO,
  ENROLL_COURSE,
  GET_ENROLLED_COURSES,
  MARK_COMPLETE,
  LOADING,
  ERROR,
} from "./type";

let initialState = {
  user: {},
  enrolledCourses: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case ENROLL_COURSE:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_ENROLLED_COURSES:
      return {
        ...state,
        enrolledCourses: action.payload,
        loading: false,
      };
    case MARK_COMPLETE:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
