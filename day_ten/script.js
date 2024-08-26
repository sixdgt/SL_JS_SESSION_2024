// date object in javascript

let currentDate = new Date();

console.log(currentDate);
console.log("Current Year: ", currentDate.getFullYear()); // year
console.log("Current Month: ", currentDate.getMonth() + 1); // month
console.log("Currenty Date: ", currentDate.getDate()); // date
console.log("Current Day: ", currentDate.getDay() + 1); // day
console.log("Current Timestamp: ", currentDate.getTime()); // timestamp
// timestamp - numeric value of date and time which contains
// Year + Month + Day + Hour + Minute + Second
console.log("Current Hour: ", currentDate.getHours()); // hour
console.log("Current Minute: ", currentDate.getMinutes()); // minute

// setting date object
let newDate = new Date("2022-05-15");
console.log(newDate);

// formatting date object
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

console.log(newDate.toLocaleDateString('en-US', options)); // May 15, 2022

// converting date to timestamp
let timestamp = new Date("2022-05-15 02:12:25").getTime();
console.log("Timestamp: ", timestamp); // 1652627200000

// calculation timestamp difference
let timeDiff = currentDate.getTime() - timestamp;
console.log("Time difference: ", timeDiff);

// timestamp to date
let humanReadableDate = new Date(timeDiff);
console.log("Human Readable form of Time Difference: ", humanReadableDate);

// date difference

let startDate = new Date("2022-05-15");
let endDate = new Date("2024-06-15");

let diffTime = endDate.getTime() - startDate.getTime();
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // milliseconds to days
let diffYear = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); // milliseconds to days
let diffMonth = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30)); // milliseconds to months
console.log("Start Date: ", startDate);
console.log("End Date: ", endDate);
console.log("Time Difference: ", diffTime);
console.log("Number of days between the dates: ", diffDays);
console.log("Number of years between the dates: ", diffYear);
console.log("Number of months between the dates: ", diffMonth);
