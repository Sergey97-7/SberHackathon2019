import { getFormattedDate } from "../utils/tools";
export const appState = { currentPage: "administration", appConfig: null };
export const administrationState = {
    userSearchInputValue: ""
};
export const userState = {
    error: {
        hasErrored: false,
        msg: "",
        status: null
    },
    isLoading: false,
    userList: null
};
export const userStatusState = {
    error: {
        hasErrored: false,
        msg: "",
        status: null
    },
    isLoading: false,
    user: null,
    dateInput: null
};
export const statusForm = {
    id: "",
    email: "",
    periodFrom: getFormattedDate(new Date()),
    periodTo: getFormattedDate(new Date())
};
export const modalAlertState = {
    isOpen: false,
    msg: "",
    time: null,
    importance: "info"
};