import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { administrationReducer } from "./administrationReduser";
import { userReducer } from "./userReducer";
import { statusReducer, statusFormReducer } from "./statusReducer";
export default combineReducers({
  app: appReducer,
  administration: administrationReducer,
  user: userReducer,
  status: statusReducer,
  statusForm: statusFormReducer
});
