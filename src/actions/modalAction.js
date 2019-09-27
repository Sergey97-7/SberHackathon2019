import { CHANGE_MODAL_ALERT } from "../constants/actions";
export function changeModalAlert(bool, msg, timer, importance) {
  return {
    type: CHANGE_MODAL_ALERT,
    isOpen: bool,
    msg,
    timer,
    importance
  };
}
