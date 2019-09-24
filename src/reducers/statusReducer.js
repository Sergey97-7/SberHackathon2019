import {
  USER_STATUS_SUCCESS_FETCH,
  USER_STATUS_HAS_ERRORED,
  USER_STATUS_IS_LOADING,
  CHANGE_CURRENT_USER,
  CREATE_CURRENT_USER
} from "../constants/actions";
import { userState } from "../constants/initialState";
export function statusReducer(state = userState, action) {
  switch (action.type) {
    case USER_STATUS_SUCCESS_FETCH:
      return Object.assign({}, state, {
        user: action.user
      });
    case USER_STATUS_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    case USER_STATUS_HAS_ERRORED:
      return Object.assign({}, state, {
        error: {
          hasErrored: action.hasErrored,
          msg: action.msg
        }
      });
    default:
      return state;
  }
}
