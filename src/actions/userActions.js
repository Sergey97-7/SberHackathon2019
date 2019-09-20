import {
  USER_LIST_SUCCESS_FETCH,
  USER_LIST_HAS_ERRORED,
  USER_LIST_IS_LOADING
} from "../constants/actions";
import { fetchDataRedux } from "../utils/fetch";
export function userListHasErrored(bool, msg) {
  return {
    type: USER_LIST_HAS_ERRORED,
    hasErrored: bool,
    msg
  };
}
export function userListisLoading(bool) {
  return {
    type: USER_LIST_IS_LOADING,
    isLoading: bool
  };
}
export function userListSuccessFetch(userList) {
  return {
    type: USER_LIST_SUCCESS_FETCH,
    userList
  };
}
export function userListFetch(url) {
 return dispatch => fetchDataRedux(
    url,
    dispatch,
    userListisLoading,
    userListHasErrored,
    userListSuccessFetch
  );
}
