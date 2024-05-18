// FizzBuzz is a classic programming problem often used in coding interviews to assess basic algorithmic skills. The problem typically involves printing numbers from 1 to n, but for multiples of 3, you print "Fizz" instead of the number, for multiples of 5, you print "Buzz," and for multiples of both 3 and 5, you print "FizzBuzz."

// Here is a solution in JavaScript, along with an explanation of the logic:

// FizzBuzz Implementation in JavaScript
// javascript
// Copy code
function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

// Example usage:
let n = 15;
console.log(fizzBuzz(n));