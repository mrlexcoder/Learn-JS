function findCombinations() {
    const results = [];
  
    for (let a = 0; a <= 9; a++) {
      for (let b = 0; b <= 9; b++) {
        for (let c = 0; c <= 9; c++) {
          for (let d = 0; d <= 9; d++) {
            if (a + b + c + d === 16) {
              results.push([a, b, c, d]);
            }
          }
        }
      }
    }
  
    return results;
  }
  
  const combinations = findCombinations();
  console.log('All 4-digit combinations that sum up to 16:', combinations);
  console.log('Total number of combinations:', combinations.length);

//   To generate all possible 4-digit combinations that sum up to 16, we need to consider all combinations of four non-negative integers (each digit can be from 0 to 9) that add up to 16. Here's a JavaScript function that calculates and prints all these combinations:
  