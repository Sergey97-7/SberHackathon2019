import { getFormattedDate } from "../utils/tools";
export const appState = { currentPage: "administration", appConfig: null };
export const administrationState = {
  userSearchInputValue: ""
};
export const userState = {
  error: {
    hasErrored: false,
    msg: ""
  },
  isLoading: false,
  user: null
};
export const statusForm = {
  email: "",
  periodFrom: getFormattedDate(new Date()),
  periodTo: getFormattedDate(new Date())
};