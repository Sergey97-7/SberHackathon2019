import {
  USER_LIST_SUCCESS_FETCH,
  USER_LIST_HAS_ERRORED,
  USER_LIST_IS_LOADING,
  CHANGE_CURRENT_USER,
  CREATE_CURRENT_USER
} from "../constants/actions";
import { userState } from "../constants/initialState";
export function userReducer(state = userState, action) {
  switch (action.type) {
    case USER_LIST_SUCCESS_FETCH:
      return Object.assign({}, state, {
        userList: action.userList
      });
    case USER_LIST_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    case USER_LIST_HAS_ERRORED:
      return Object.assign({}, state, {
        error: {
          hasErrored: action.hasErrored,
          msg: action.msg
        }
      });
    case CHANGE_CURRENT_USER:
      return Object.assign({}, state, {
        userList: state.userList.map(user =>
          user.id === action.user.id ? action.user : user
        )
      });
    case CREATE_CURRENT_USER:
      return Object.assign({}, state, {
        userList: [...state.userList, action.user]
      });

    default:
      return state;
  }
}
