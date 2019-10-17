import {
  USER_STATUS_SUCCESS_FETCH,
  USER_STATUS_HAS_ERRORED,
  USER_STATUS_IS_LOADING,
  USER_STATUS_FORM_INPUT_CHANGE,
  USER_STATUS_DATE_CHANGE
} from "../constants/actions";
import { userStatusState, statusForm } from "../constants/initialState";
export function statusReducer(state = userStatusState, action) {
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
          msg: action.msg,
          status: action.status
        }
      });
    case USER_STATUS_DATE_CHANGE:
      return Object.assign({}, state, {
        dateInput: action.value,
        currentUserId: action.id
      });
    default:
      return state;
  }
}
export function statusFormReducer(state = statusForm, action) {
  switch (action.type) {
    case USER_STATUS_FORM_INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.field]: action.value
      });
    default:
      return state;
  }
}
