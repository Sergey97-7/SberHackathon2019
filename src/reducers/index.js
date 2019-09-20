import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { administrationReducer } from "./administrationReduser";
import { userReducer } from "./userReducer";
export default combineReducers({
  app: appReducer,
  administration: administrationReducer,
  user: userReducer
});
