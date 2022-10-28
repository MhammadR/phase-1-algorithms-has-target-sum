function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  O{n^2} quadratic
*/

/* 
  Add your pseudocode here

  Iterate through the array index i
    Iterate again through the rest of the array index j = i + 1
      if the value of the array at index i + the value of the array at index j = target
        return true
  return false
*/

/*
  Add written explanation of your solution here

  I need to check if the sum of 2 different items in the array are equal to the given target number. If they are equal the output should return true and if they are not equal, I return false.
  To get all the pair combinations of an array, I first iterate through the array and get the indexes. Then I iterate again to get all the other indexes that can be combined with the first indexes. For instance, if the first index is 2 for an array of length = 4, the other index should be 0, 1, and 3 in order to get all the combinations.
  After getting all the combinations, we check for the sum of each pair if it is equal to the target number or not.
  (array[2] + array[0] === target) 
  (array[2] + array[1] === target) 
  (array[2] + array[3] === target) 
  we then return true or false based on the value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 5, 15, 4, 6, 7], 12));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 4], 8));
}

module.exports = hasTargetSum;
