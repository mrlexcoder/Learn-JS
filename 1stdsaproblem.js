// data structure and algorithm (DSA) problem in JavaScript. How about we work on finding the maximum number in an array? This is a fundamental problem that can help you understand basic concepts like loops and conditional statements in addition to data structures.

// Here's a straightforward approach using a loop to iterate through the array and keep track of the maximum number:

function findMaxNumber(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null; // Return null if the array is empty
    }
  
    let max = arr[0]; // Initialize max to the first element of the array
  
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; // Update max if the current element is greater
      }
    }
  
    return max; // Return the maximum number
  }
  
  // Example usage
  const numbers = [3, 7, 2, 9, 1, 5];
  const maxNumber = findMaxNumber(numbers);
  console.log("The maximum number is:", maxNumber); // Output: The maximum number is: 9
  