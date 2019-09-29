import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { administrationReducer } from "./administrationReduser";
import { userReducer } from "./userReducer";
import { statusReducer, statusFormReducer } from "./statusReducer";
import { modalReducer } from "./modalReducer";
export default combineReducers({
  app: appReducer,
  administration: administrationReducer,
  user: userReducer,
  status: statusReducer,
  statusForm: statusFormReducer,
  modal: modalReducer
});
