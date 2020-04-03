'use strict'

/*


Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

O: no return, mutate input array in memory
I: an array of characters
C: goal linear
E: if array length is 1 or less then return

['o', 'l', 'l', 'e', 'h'] --> ['h', 'e', 'l', 'l', 'o'] (change in memory)

find the mid point (loop stops here)
if length is even, substract midpoint by 1
iterate through the input; stop at the mid point
  take the current element and swap with th element based off of input length minus i

*/


function reverseWords(message) {
  let midPoint = Math.floor(message.length / 2);

  for (let i = 0; i < midPoint; i++) {
    // let current = message[i];
    // let change = message[message.length - 1 - i];
    // [current, change] = [change, current];
    [message[i], message[message.length - 1 - i]] = [message[message.length - 1 - i], message[i]]
    console.log(message)
  }
}



// function reverseWords (arr) {

//   var midPoint = Math.floor(message.length/2);

//   for (var i = 0; i < midPoint; i++) {
  //     var temp = message[i];
  //     message[i] = message[message.length - 1 - i];
  //     message[message.length - 1 - i] = temp;
  //   }

  // }

let message = ['o', 'l', 'l', 'e', 'h']
reverseWords(message)
console.log(message)