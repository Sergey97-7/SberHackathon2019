import {
  USER_STATUS_SUCCESS_FETCH,
  USER_STATUS_HAS_ERRORED,
  USER_STATUS_IS_LOADING,
  CHANGE_CURRENT_USER,
  CREATE_CURRENT_USER,
  USER_STATUS_FORM_INPUT_CHANGE,
  USER_STATUS_DATE_CHANGE
} from "../constants/actions";
import { getFormattedDate } from "../utils/tools";
import { fetchDataRedux } from "../utils/fetch";
export function userStatusHasErrored(bool, msg, status) {
  return {
    type: USER_STATUS_HAS_ERRORED,
    hasErrored: bool,
    msg,
    status
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

export function userSetStatus(user) {
  return dispatch => {
    user.sort((a, b) => b.timestamp - a.timestamp);
    // console.log("DATE:", getFormattedDate(user[0].timestamp));
    // console.log("DATE@: ", sorted[0].timestamp);
    dispatch(userStatusDateInputChange(user[0].timestamp));
    dispatch(userStatusSuccessFetch(user));
  };
}
