/*

"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

O: int; the position of the closing paren. to the opening paren
I: str; a sentence & int; the opening paren. position
C: can solve in O(n) time and O(1) space
E: In the example string on line 3. Pass in the string along with 10 as the opening paren. position
iterate the string and keep track of any other opening parens
increment if there are other opening strings and decrement if there are closing string
We can reach our conclusion by making sure we find all closing parenthesis
If all nested parens are accounted for, the next closing paren is returned
in this example the closing parent position is 79

split the string to make as an array to loop through the sentence
declare openParenCount to 0
iterate through th string starting at the position of the open paren.
  if there is a char. "(" then add to openParenCount
  else the char. is ")" the minus from openParenCount
    can check if openParenCount is back to Zero
      return the position of the closing paren
*/

function getClosingParen(sentence, openParenIdx) {
  sentence = sentence.split('');
  let openParenCount = 0;

  for (let i = openParenIdx + 1; i < sentence.length; i++) {
    if (sentence[i] === "(") {
      openParenCount++
    } else if (sentence[i] === ")") {
      if (openParenCount === 0) {
        return i
      } else {
        openParenCount--
      }
    }
  }

  throw new Error('No closing parenthesis :(');
}

console.log(getClosingParen("()()((()()))", 5))