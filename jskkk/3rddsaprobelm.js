// let's create a data structure and algorithm problem using callbacks, the map function, and timestamps in JavaScript.

// Problem Statement:
// You are given an array of timestamps representing user activities in an online platform. Each timestamp is represented as a Unix timestamp (number of seconds since January 1, 1970). Your task is to convert these timestamps into a human-readable format using a callback function and the map function. The human-readable format should display the date and time in a readable format like "YYYY-MM-DD HH:mm:ss".

// Here's how you can approach this problem:

// javascript
// Copy code
// Sample array of Unix timestamps
const timestamps = [1641351245, 1641424532, 1641508746, 1641613123, 1641717684];

// Function to convert Unix timestamp to human-readable format
function formatTimestamp(timestamp, callback) {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const formattedDate = callback(date);
  return formattedDate;
}

// Callback function to format date and time
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Use the map function with callback to format all timestamps
const formattedTimestamps = timestamps.map(timestamp => formatTimestamp(timestamp, formatDate));

// Output the formatted timestamps
console.log("Formatted Timestamps:");
formattedTimestamps.forEach(timestamp => console.log(timestamp));
// Explanation:

// We have an array timestamps containing Unix timestamps.
// The formatTimestamp function takes a Unix timestamp and a callback function (formatDate) as parameters. It converts the Unix timestamp to a JavaScript Date object, then uses the callback function to format the date and time.
// The formatDate callback function formats the date and time components (year, month, day, hours, minutes, seconds) into a readable format.
// We use the map function to apply the formatTimestamp function with the formatDate callback to all timestamps in the array, resulting in an array of formatted timestamps (formattedTimestamps).
// Finally, we output the formatted timestamps to the console.