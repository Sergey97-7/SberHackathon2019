import moment from "moment";
export const getFormattedDate = date => {
  return moment(date).format("YYYY-MM-DDTHH:mm:ss");
};
/**
 * converts date from backend (user status) to unix time
 * @param {String} date String format - "26-09-2019 08:21:12"
 * @returns {Number} - unix time
 */
export const getUnixDate = date => {
 return +moment(date, "DD-MM-YYYY hh:mm:ss").toDate();
}