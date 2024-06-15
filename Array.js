// Array.js

// Initializing a homogeneous array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Traverse through an array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // O(n) - Prints each element in the array
}

// Insertion in an array
array.splice(6, 0, 6.5); // O(n) - Inserts 6.5 at index 6, shifting elements right

// Delete in an array
array.splice(6, 1); // O(n) - Removes 1 element at index 6, shifting elements left

// Searching in an array
const searchedElement = array.find((element) => element === 5); // O(n) - Searches for element 5 in the array

// Update in an array
array[6] = 6.5; // O(1) - Updates the element at index 6 to 6.5

// Append a node
// This function adds a new element to the end of the array
function append(array, element) {
  array[array.length] = element; // O(1) - Adds element to the end of the array
}

// Call the append function to add 11 to the end of the array
append(array, 11);
console.log(array); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Remove last element
// This function removes the last element from the array
function removeLast(array) {
  if (array.length > 0) {
    // Check if the array is not empty
    array.length = array.length - 1; // O(1) - Reduces the length of the array by 1
  }
}

// Call the removeLast function to remove the last element from the array
removeLast(array);
console.log(array); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ----------------- Old code ------------

// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Dynamic array, Homogeneous array

// // In Java
// // int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // Homogeneour array
// // int[] array1 = new int[10];  // Static/Fixed size array

// // In Java you can use collections package to create dynamic arrays
// // Integer[] array = new ArrayList<Integer>();

// // let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd', 'e']; // Heterogeneous array

// array2[2]// 3 // O(1)

// // Traversing through an array

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0 ; i < array.length ;i++) {
//     console.log(array[i]); // O(n)
// }

// // Insertion in an array
// array.splice(6, 0, 6.5); // O(n)

// // Delete in an array
// array.splice(6, 1); // O(n)

// // Searching in an array
// // Search for 5

// const searchedElement = array.find((element) => element === 5); // O(n)

// // Update in an array
// array[6] = 6.5; // O(1)

// // Why shift is O(N) ?
// // [2,3,4,5];
