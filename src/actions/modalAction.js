import { CHANGE_MODAL_ALERT } from "../constants/actions";
export function userStatusIsLoading(bool, msg) {
  return {
    type: CHANGE_MODAL_ALERT,
    isOpen: bool,
    msg
  };
}
