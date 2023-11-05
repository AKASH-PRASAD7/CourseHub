import {
  GET_NEXT_COURSES,
  GET_COURSE_BY_ID,
  LIKE_COURSE,
  SEARCH_COURSE,
  GET_ENROLLED_COURSES,
  LOADING,
  ERROR,
} from "./type";

let initialState = {
  courses: [],
  course: {},
  enrolledCourses: [],
  loading: false,
  error: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEXT_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false,
        error: null,
      };
    case GET_COURSE_BY_ID:
      return {
        ...state,
        course: action.payload,
        loading: false,
        error: null,
      };
    case LIKE_COURSE:
      return {
        ...state,
        course: action.payload,
        loading: false,
        error: null,
      };
    case SEARCH_COURSE:
      return {
        ...state,
        courses: action.payload,
        loading: false,
        error: null,
      };
    case GET_ENROLLED_COURSES:
      return {
        ...state,
        enrolledCourses: action.payload,
        loading: false,
        error: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
