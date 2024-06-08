// Step 1: Generate a random array of 100 elements between 1 and 10
const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10) + 1);

// Step 2: Identify the particular value
const targetValue = 5;

// Step 3: Values to add when targetValue is found
const valuesToAdd = [2, 3, 2, 5, 6, 3, 2];

// Efficiently process the array
const resultArray = [];

array.forEach(value => {
    resultArray.push(value);
    if (value === targetValue) {
        resultArray.push(...valuesToAdd);
    }
});

console.log(resultArray);
