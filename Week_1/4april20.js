/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

*/

// function maxSubArray(numArr) {
//   tempSum = numArr[0];
//   maxSum = numArr[0];

//   for (let i = 1; i < numArr.length; i++) {
//     tempSum = Math.max(tempSum + numArr[i], numArr[i]);
//     maxSum = Math.max(tempSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(largestSum([-2,1,-3,4,-1,2,1,-5,4]))


/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

declare firstNonZero and lastNonZero both to null
iterate through the input arr
if current is 0
  and next is not 0
    swap current and next
  if next is 0

  lastNonZero--
  push 0 to nums

*/
// Very slow!! Not good solution
function moveZeroes(nums) {
  let length = nums.length;
  let lastIdx = nums.length - 1
  let zeroCount = 0
  for (let i = length - 1; i > -1; i--) {
    let current = nums[i];
    let correct = nums[i + 1];
    if (current === 0) {
      [nums[i], nums[lastIdx]] = [nums[lastIdx], nums[i]]
      current = nums[i];
      lastIdx--;
      while (correct && current !== correct) {
        [nums[i], nums[lastIdx]] = [nums[lastIdx], nums[i]]
        current = nums[i];
        lastIdx--
      }
      zeroCount++
      lastIdx = nums.length - zeroCount
    }
  }
}

// sort first
let input = [0, 1, 0]
let input1 = [0,1,0,3,12]
let input2 = [0,0,1]
let input3 = [1,0,1]
let input4 = [4,2,4,0,0,3,0,5,1,0]
let input5 = [-959151711,623836953,209446690,-1950418142,1339915067,-733626417,481171539,-2125997010,-1225423476,1462109565,147434687,-1800073781,-1431212205,-450443973,50097298,753533734,-747189404,-2070885638,0,-1484353894,-340296594,-2133744570,619639811,-1626162038,669689561,0,112220218,502447212,-787793179,0,-726846372,-1611013491,204107194,1605165582,-566891128,2082852116,0,532995238,-1502590712,0,2136989777,-2031153343,371398938,-1907397429,342796391,609166045,-2007448660,-1096076344,-323570318,0,-2082980371,2129956379,-243553361,-1549960929,1502383415,0,-1394618779,694799815,78595689,-1439173023,-1416578800,685225786,-333502212,-1181308536,-380569313,772035354,0,-915266376,663709718,1443496021,-777017729,-883300731,-387828385,1907473488,-725483724,-972961871,-1255712537,383120918,1383877998,1722751914,0,-1156050682,1952527902,-560244497,1304305692,1173974542,-1313227247,-201476579,-298899493,-1828496581,-1724396350,1933643204,1531804925,1728655262,-955565449,0,-69843702,-461760848,268336768,1446130876]
moveZeroes(input5)
console.log(input5)