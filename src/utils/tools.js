import moment from "moment";
export const getFormattedDate = date => {
  return moment(date).format("YYYY-MM-DDTHH:mm:ss");
};
export const getUnixDate = date => +moment(date);
