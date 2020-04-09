/*

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

*/

// Runtime error
// var backspaceCompare = function(S, T) {
//   if (S <= 1 && S >= 200) {
//       return false;
//   }
//   if (T <= 1 && T >= 200) {
//       return false;
//   }

//   S = S.split('')
//   let halfS = Math.floor(S.length / 2)
//   let backspaceSCount = 0
//   T = T.split('')
//   let halfT = Math.floor(T.length / 2)
//   let backspaceTCount = 0

//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === '#') {
//         if (i === 0) {
//             S = S.unshift()
//             continue;
//         };
//         S.splice(i-1, 2)
//         i -= 2
//         backspaceSCount+=1
//         console.log('bakcspace count', backspaceSCount)
//     }
//   }

//   for (let i = 0; i < T.length; i++) {
//     if (T[i] === '#') {
//         if (i === 0) {
//             T =T.unshift()
//             continue;
//         }
//             T.splice(i-1, 2)
//         i -= 2
//         backspaceTCount+=1
//     }
//   }

//   S = S.join('');
//   T = T.join('');
//   return S === T ? true : false;

//     };


// Simple solution using stacks
const backspaceCompare = (S, T) => {
    const strip = str => {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                stack.length > 0 && stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }

    return strip(S) === strip(T);
};


// Test
desc = 'Input 1';
let S = 'ab#c';
let T = 'ab#c';
assertEquals(backspaceCompare(S, T), true, desc);

desc = 'Input 2';
S = "ab##";
T = "c#d#";
assertEquals(backspaceCompare(S, T), true, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}
