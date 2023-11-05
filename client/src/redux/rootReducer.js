import course from "./course/reducer.js";
import user from "./user/reducer.js";
import auth from "./auth/reducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  course,
  user,
  auth,
});

export default rootReducer;
