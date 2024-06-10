// o solve the problem of finding the first circular tour that visits all petrol pumps, we need to determine if there is a starting point such that the truck can complete the tour without running out of petrol at any point. Here is a JavaScript function to solve this problem:

// javascript
// Copy code
function canCompleteCircuit(arr) {
    let total_petrol = 0, current_petrol = 0, start_index = 0;
    
    for (let i = 0; i < arr.length; i++) {
        total_petrol += arr[i][0] - arr[i][1];
        current_petrol += arr[i][0] - arr[i][1];
        
        // If current petrol is less than 0, we cannot start from start_index
        if (current_petrol < 0) {
            // Move start index to next station
            start_index = i + 1;
            // Reset current petrol
            current_petrol = 0;
        }
    }
    
    // If total petrol is less than 0, it means we cannot complete the circuit
    return total_petrol >= 0 ? start_index : -1;
}

// Test cases
let arr1 = [[4, 6], [6, 5], [7, 3], [4, 5]];
console.log(canCompleteCircuit(arr1));  // Output: 1

let arr2 = [[6, 4], [3, 6], [7, 3]];
console.log(canCompleteCircuit(arr2));  // Output: 2
// Explanation:
// Initialization:

// total_petrol: This will track the overall balance of petrol after visiting all petrol pumps.
// current_petrol: This tracks the petrol balance while traversing from the current starting point.
// start_index: This will keep track of the potential starting point of the tour.
// Iterate through each petrol pump:

// Calculate the difference between the petrol available at the current pump and the petrol needed to reach the next pump.
// Update total_petrol and current_petrol with this difference.
// Check feasibility:

// If current_petrol becomes less than 0, it means the truck cannot reach the next petrol pump from the current starting point (start_index). Hence, update start_index to i + 1 and reset current_petrol to 0.
// Continue this until all petrol pumps are checked.
// Final check:

// If total_petrol is negative, it means it is not possible to complete the tour from any starting point.
// If total_petrol is non-negative, return start_index as the first feasible starting point.
// This solution has a time complexity of O(N) where N is the number of petrol pumps, as it only requires a single pass through the array.