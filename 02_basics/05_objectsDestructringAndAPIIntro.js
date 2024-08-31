// Objects Detructring and API Intro

const course = {
  courseDomain: "JavaScript",
  coursePrice: "100$",
  courseIntructor: "Hashim Malik",
};

// console.log(course.courseIntructor); // output Hashim Malik

let { courseIntructor } = course; // This is a compact and best method of accessing value
// console.log(courseIntructor); // output Hashim Malik

let { courseIntructor: Teacher } = course; // more compact method + inshort
// console.log(Teacher); // output Hashim Malik

// let name = (props.fullName) => { // using props in React
//   return fullName;
// };
// console.log(name('Hashim')); // otuput Hashim

// let name = ({fullName}) => { // {fullName} parameter '{}' is called De-Structring (Best way to use props)
//   return fullName;
// };
// console.log(name("Hashim")); // otuput Hashim

// { // writing an Object without name & writing keys in double or single qoutes is called "JSON"
//     'name': 'Hashim',
//     'age': 23,
//     'isAdult': true,
// }

// API Intro
[ // some cases APIs are in array form
    {},
    {},
    {}
]

// APIs in JSON commonly