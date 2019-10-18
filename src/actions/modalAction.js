import { CHANGE_MODAL_ALERT } from "../constants/actions";
export function changeModalAlert(bool, msg, time, importance) {
  return {
    type: CHANGE_MODAL_ALERT,
    isOpen: bool,
    msg,
    time,
    importance
  };
}
export function reopenModalAlert(bool, msg, time, importance) {
  let timer;
  timer = setTimeout(() => changeModalAlert(false, "", 0, "info"),1000)
  return dispatch => {
    // dispatch(changeModalAlert(false, "", 0, "info"));
    clearTimeout(timer)
    dispatch(changeModalAlert(bool, msg, time, importance));
   
  };
}
