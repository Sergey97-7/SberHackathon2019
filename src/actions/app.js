import { CHANGE_PAGE } from "../constants/actions";
export function changePage(text) {
  return {
    type: CHANGE_PAGE,
    text
  };
}
