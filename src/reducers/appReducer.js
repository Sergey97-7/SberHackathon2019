import { appState } from "../constants/initialState";
import { CHANGE_PAGE, GET_CONFIG } from "../constants/actions";
export function appReducer(state = appState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPage: action.currentPage
      });
    case GET_CONFIG:
      console.log("REDUCER,", action)
      return Object.assign({}, state, {
        appConfig: action.appConfig
      });
    default:
      return state;
  }
}
