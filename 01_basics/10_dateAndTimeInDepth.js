// Date and Tme in Depth in JS

let date = new Date();
// console.log(date);
// console.log(date.toString()); // date and time wth string
// console.log(date.toDateString()); // only date in string
// console.log(date.toLocaleString()); // date in calender form and time in digital form
// console.log(typeof date); // output object

let dateInString = new Date(2024, 7, 8); // January is started from 0
// console.log(dateInString);
// console.log(dateInString.toDateString());
// console.log(dateInString.toString());
// console.log(dateInString.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));

let myDate = new Date("01-12-2024");
// console.log(myDate); // digital date
// console.log(myDate.getDay()); // getting day
// console.log(myDate.getDate()); // getting day
// console.log(myDate.getMonth()); // getting month(only month always in shown in index)
// console.log(myDate.getFullYear()); // getting year

let newDate = new Date();
newDate.toLocaleString("default", { // customized date and time
  weekday: "long",
  month: "long",
});
console.log(newDate.getDay());
console.log(newDate.getMonth());