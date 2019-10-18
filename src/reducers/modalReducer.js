import { modalAlertState } from "../constants/initialState";
import { CHANGE_MODAL_ALERT } from "../constants/actions";
export function modalReducer(state = modalAlertState, action) {
  switch (action.type) {
    case CHANGE_MODAL_ALERT:
      return Object.assign({}, state, {
        isOpen: action.isOpen,
        msg: action.msg,
        time: action.time,
        importance: action.importance
      });
    default:
      return state;
  }
}
