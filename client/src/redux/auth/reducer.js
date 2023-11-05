import { SIGN_IN, SIGN_UP, SIGN_OUT, LOADING, ERROR } from "./type";

let initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
    case SIGN_OUT:
      return {
        ...state,
        user: action.payload,
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

export default authReducer;
