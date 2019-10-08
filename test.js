const moment = require("moment");

// let a = +new Date();
// let b = Date.parse("26-09-2019 08:21:12");
// let c = moment("26-09-2019 08:21:12").format("YYYY-MM-DD");
// let d = "26-09-2019 08:21:12"
// let e = moment(new Date()).format()
// d = d.split(" ").join("T")
// console.log("a: ", a);
// console.log("b: ", b);
// console.log("c: ", c);
// console.log("d: ", moment(d).utc("YYYY-MM-DD"))
// console.log("e: ", e);
// console.log("mom: ", moment("26-09-2019 08:21:12").utcOffset("-000").format())
// console.log("mom: ", moment("26-09-2019 08:21:12").utcOffset("GTM -00:00").format())
// console.log("mom: ", moment(new Date()).utcOffset("GTM -00:00").format())
// console.log("mom: ", moment("26-09-2019 08:21:12").format())
console.log("mom: ", +moment("26-09-2019 08:21:12", "DD-MM-YYYY hh:mm:ss").toDate())
console.log("mom: ", +moment(+new Date()).utcOffset("GTM -00:00").format("DD-MM-YYYY hh:mm:ss"))
console.log("test", moment("26-09-2019 22:21:12", "DD-MM-YYYY hh:mm:ss").utcOffset("GTM -00:00").format("DD-MM-YYYY hh:mm:ss"))