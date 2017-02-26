var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X')); // seconds
// console.log(now.format('x')); // milliseconds
// console.log(now.valueOf());

var timestamp = 1488123485808;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format("hh:mm a"));  //11:06 am

// console.log(now.format('MMM Do YYYY, h:mm a'));
