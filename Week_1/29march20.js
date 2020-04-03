/*

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

The take-out orders as they were entered into the system and given to the kitchen. (take_out_orders)
The dine-in orders as they were entered into the system and given to the kitchen. (dine_in_orders)
Each customer order (from either register) as it was finished by the kitchen. (served_orders)

Given all three lists, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

O: boolean; if the order got served in first come first serve
I: three arrays; takeOutOrders, dineInOrders, servedOrders
C: O(n) time
E:
Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]
false

Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 3, 5, 4, 6]
true

function checkServedOrders (takeOutOrders, dineInOrders, servedOrders)
  loop through served orders
    check if current element is equal to first element of tak out
      slice off first element
    check if current element is equal to first of dine in
      slice off first
    otherwise return false


    return true

*/

// function checkServedOrders (takeOutOrders, dineInOrders, servedOrders) {
//   if (servedOrders.length === 0) {
//     return true;
//   }

//   for (let i = 0; i < servedOrders.length; i++) {
//     if (servedOrders[i] === takeOutOrders[0]) {
//       takeOutOrders.shift();
//       continue;
//     } else if (servedOrders[i] === dineInOrders[0]) {
//       dineInOrders.shift();
//       continue;
//     } else {
//       return false
//     }
//   }

//   return true;
// }

// function checkServedOrders (takeOutOrders, dineInOrders, servedOrders, takeOutOrderIdx = 0, dineInOrderIdx = 0, servedOrderIdx = 0) {

//   if (servedOrders.length === servedOrderIdx) {
//     return true;
//   }

//   for (let i = 0; i < servedOrders.length; i++) {
//     if (takeOutOrders.length > 0 && takeOutOrders[takeOutOrderIdx] === servedOrders[servedOrderIdx]) {
//       takeOutOrderIdx++
//       servedOrderIdx++
//       continue;
//     } else if (dineInOrderIdx < dineInOrders.length && dineInOrders[dineInOrderIdx] === servedOrders[servedOrderIdx]) {
//       dineInOrderIdx++
//       servedOrderIdx++
//       continue;
//     } else {
//       return false
//     }
//   }
//  return true
// }



var cakeOrders = function(arr1, arr2, arr3) {
  var takeIdx = 0;
  var dineIdx = 0;

  if (arr1.length + arr2.length !== arr3.length) {
    return false;
  }

  for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] === arr1[takeIdx]) {
      takeIdx++;
    } else if (arr3[i] === arr2[dineIdx]) {
      dineIdx++;
    } else return false;
  }
  return true;
}
console.log(cakeOrders([1, 3, 5], [2, 4, 6], [1, 2, 3, 5, 4, 6]))