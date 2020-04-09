/*

Given an array of strings, group anagrams together.
All inputs will be in lowercase.
The order of your output does not matter.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

declare anagramChecker (hashtable)
iterate through input
take the current split, sort, join
if undefined set to an arrage
else push to array

iterate anagramchecker and build the result array

return



*/


function groupAnagrams(strs) {
  let anagramChecker = {};
  for (let i = 0; i < strs.length; i++) {
    let current = strs[i].split('').sort().join('');
    if (!anagramChecker[current]) {
      anagramChecker[current] = [strs[i]]
    } else {
      anagramChecker[current].push(strs[i])
    }
  }
  let result = []
  for (let anagrams in anagramChecker) {
    result.push(anagramChecker[anagrams]);
  }
  return result
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))