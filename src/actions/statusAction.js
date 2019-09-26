import {
  USER_STATUS_SUCCESS_FETCH,
  USER_STATUS_HAS_ERRORED,
  USER_STATUS_IS_LOADING,
  CHANGE_CURRENT_USER,
  CREATE_CURRENT_USER,
  USER_STATUS_FORM_INPUT_CHANGE,
  USER_STATUS_DATE_CHANGE
} from "../constants/actions";
import { fetchDataRedux } from "../utils/fetch";
export function userStatusHasErrored(bool, msg) {
  return {
    type: USER_STATUS_HAS_ERRORED,
    hasErrored: bool,
    msg
  };
}
export function userStatusIsLoading(bool) {
  return {
    type: USER_STATUS_IS_LOADING,
    isLoading: bool
  };
}
export function userStatusSuccessFetch(user) {
  return {
    type: USER_STATUS_SUCCESS_FETCH,
    user
  };
}
export function userStatusFetch(url, type, body) {
  return dispatch =>
    fetchDataRedux(
      url,
      dispatch,
      userStatusIsLoading,
      userStatusHasErrored,
      userSetStatus,
      type,
      body
    );
}
export function userStatusFormInputChange(field, value) {
  return {
    type: USER_STATUS_FORM_INPUT_CHANGE,
    field,
    value
  };
}
export function userStatusDateInputChange(value) {
  return {
    type: USER_STATUS_DATE_CHANGE,
    value
  };
}
import { getFormattedDate } from "../utils/tools";
export function userSetStatus(user) {
  return dispatch => {
    const sorted = user.sort((a, b) => a.timestamp - b.timestamp);
    console.log("DATE:", getFormattedDate(user[0].timestamp));
    console.log("DATE@: ", sorted[0].timestamp);
    dispatch(userStatusDateInputChange(sorted[0].timestamp));
    dispatch(userStatusSuccessFetch(sorted));
  };
}
