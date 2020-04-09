/*

Given an integer array arr, count element x such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.

linear time
linear space

declare result 0
O(n) - space
declasre hashset
O(n) - time
iterate
current + 1 add to hashset if not exist
else add one

O(n) - time
loop hashset and check key if its included input and if it is greater than 0
if yes add to result

return

*/

function count