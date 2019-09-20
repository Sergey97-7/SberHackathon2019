import { administrationState } from "../constants/initialState";
import { CHANGE_ADMIN_SEARCH_INPUT } from "../constants/actions";
export function administrationReducer(state = administrationState, action) {
  switch (action.type) {
    case CHANGE_ADMIN_SEARCH_INPUT:
      return Object.assign({}, state, {
        userSearchInputValue: action.value
      });

    default:
      return state;
  }
}