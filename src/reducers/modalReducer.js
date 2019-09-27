import { modalAlertState } from "../constants/initialState";
import { CHANGE_MODAL_ALERT } from "../constants/actions";
export function appReducer(state = modalAlertState, action) {
  switch (action.type) {
    case CHANGE_MODAL_ALERT:
      return Object.assign({}, state, {
        modalAlrt: {
          isOpen: action.isOpen,
          msg: action.msg,
          timer: action.timer,
          importance: action.importance
        }
      });
    default:
      return state;
  }
}
