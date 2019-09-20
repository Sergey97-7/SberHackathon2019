import { CHANGE_PAGE, GET_CONFIG } from "../constants/actions";
export function changePage(currentPage) {
  return {
    type: CHANGE_PAGE,
    currentPage
  };
}
export function getAppConfig(appConfig) {
  console.log("config", appConfig);
  return {
    type: GET_CONFIG,
    appConfig
  };
}
