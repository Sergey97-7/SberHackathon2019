import { appState } from "../constants/initialState";
import { CHANGE_PAGE } from "../constants/actions";
export function appReducer(state = appState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPage: action.currentPage
      });
    default:
      return state;
  }
}
