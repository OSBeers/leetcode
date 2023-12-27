/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
      return [];
  }
  if (numRows === 1) {
      return [[1]];
  }
  
  let prevRows = generate(numRows - 1);
  let newRow = new Array(numRows).fill(1);
  
  for (let i = 1; i < numRows - 1; i++) {
      newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
  }
  
  prevRows.push(newRow);
  return prevRows;
};

// The problem of generating Pascal's triangle can be approached in various ways.
// Here are some approaches and their intuition to solve the problem:
// Approach 1: Using Recursion

// Intuition: In Pascal's triangle, each element is the sum of the two elements directly above it. 
// We can use a recursive approach to generate the triangle. 
// The base case is when numRows is 1, in which case we return [[1]]. 
// Otherwise, we recursively generate the triangle for numRows - 1 
// and then calculate the current row by summing the adjacent elements 
// from the previous row.
