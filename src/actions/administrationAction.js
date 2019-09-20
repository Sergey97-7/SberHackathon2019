import { CHANGE_ADMIN_SEARCH_INPUT } from "../constants/actions";
export function changeAdminSearchInput(value) {
  return {
    type: CHANGE_ADMIN_SEARCH_INPUT,
    value
  };
}