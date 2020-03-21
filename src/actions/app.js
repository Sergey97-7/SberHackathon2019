import { CHANGE_PAGE, GET_CONFIG } from "../constants/actions";
export function changePage(currentPage) {
  return {
    type: CHANGE_PAGE,
    currentPage
  };
}
export function getAppConfig(appConfig) {
  return {
    type: GET_CONFIG,
    appConfig
  };
}

//TODO handle errors and load config
// export function userListHasErrored(bool, msg) {
//   return {
//     type: USER_LIST_HAS_ERRORED,
//     hasErrored: bool,
//     msg
//   };
// }
// export function userListisLoading(bool) {
//   return {
//     type: USER_LIST_IS_LOADING,
//     isLoading: bool
//   };
// }
// export function userListSuccessFetch(userList) {
//   return {
//     type: USER_LIST_SUCCESS_FETCH,
//     userList
//   };
// }
// export function userListFetch(url) {
//  return dispatch => fetchDataRedux(
//     url,
//     dispatch,
//     userListisLoading,
//     userListHasErrored,
//     userListSuccessFetch
//   );
// }