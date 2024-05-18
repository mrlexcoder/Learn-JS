// Problem: Find the Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// For example:

// Input: "abcabcbb"
// Output: 3 ("abc" has the longest substring without repeating characters)
// Input: "bbbbb"
// Output: 1 ("b" is the longest substring without repeating characters)
// Input: "pwwkew"
// Output: 3 ("wke" is the longest substring without repeating characters)
// Here's a JavaScript solution using a sliding window approach:

// javascript
function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (charMap.has(char)) {
      // If the character is repeated, update the start index
      start = Math.max(start, charMap.get(char) + 1);
    }
    charMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test cases
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3
console.log(longestSubstringWithoutRepeating("bbbbb"));    // Output: 1
console.log(longestSubstringWithoutRepeating("pwwkew"));   // Output: 3