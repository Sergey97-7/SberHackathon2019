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
  console.info("info", moment.utc(date, "DD-MM-YYYY HH:mm:ss").local().format())
  let a = moment(date, "DD-MM-YYYY HH:mm:ss").format()
  console.info("info2", moment(date, "DD-MM-YYYY HH:mm:ss").format())
 return +moment(date, "DD-MM-YYYY hh:mm:ss").toDate();
}
  
export const getDataFromBack = date => {
  // let a = moment(date, "DD-MM-YYYY hh:mm:ss").format().local().format()
  let a = moment.utc(date, "DD-MM-YYYY HH:mm:ss").format()
  // let b = moment(date, "DD-MM-YYYY hh:mm:ss").utc(date).toDate().local().format()
  console.log("UTC", a)
  // console.log("UTC2", b)
}