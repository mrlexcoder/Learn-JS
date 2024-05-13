// Let's solve another simple data structure and algorithm problem in JavaScript. How about we work on finding the sum of all elements in an array? This is a basic problem that can help reinforce your understanding of loops and basic arithmetic operations.

// Here's a straightforward approach using a loop to iterate through the array and calculate the sum:

// javascript
// Copy code
function findSum(arr) {
  let sum = 0; // Initialize sum to 0

  // Loop through the array and add each element to the sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add the current element to the sum
  }

  return sum; // Return the total sum
}

// Example usage
const numbers = [3, 7, 2, 9, 1, 5];
const totalSum = findSum(numbers);
console.log("The sum of all elements is:", totalSum); // Output: The sum of all elements is: 27
// In this code, findSum is a function that takes an array (arr) as input and returns the sum of all elements in the array. It initializes the sum variable to 0 and then uses a loop to iterate through the array, adding each element to the sum. Finally, it returns the total sum.