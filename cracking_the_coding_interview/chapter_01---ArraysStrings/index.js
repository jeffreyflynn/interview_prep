/* Implement an algorithm to determine if a string has all unique characters.
   What if you cannot use additional data structures? */

const is_unique = str => {
  const hashed = {};

  for (let i = 0; i < str.length; i++) {
    if (hashed[str[i]]) return false;
    else hashed[str[i]] = 1;
  }

  return true;
}


/* Given two strings, write a method to decide if one is a permutation of the other. */
/* O(idk) */

const is_permutation = (x_str, y_str) => {
  const x_hash = {};
  const y_hash = {};

  if (x_str.length !== y_str.length) return false;

  for (let i = 0; i < x_str.length; i++) {
    if (x_hash[x_str[i]]) x_hash[x_str[i]] += 1;
    else x_hash[x_str[i]] = 1;
  }

  for (let i = 0; i < y_str.length; i++) {
    if (y_hash[y_str[i]]) y_hash[y_str[i]] += 1;
    else y_hash[y_str[i]] = 1;
  }

  for (let key in x_hash) {
    if (!y_hash[key] || y_hash[key] !== x_hash[key]) return false;
  }

  return true;
}

// const sample0 = "ABC"
// const sample1 = "BCA"
// console.log(`\n\n${sample0} is a permutation of ${sample1} --- ${is_permutation(sample0, sample1)}\n\n`)



/*
Write a method to replace all spaces in a string with "%20".

You may assume that the string has sufficient space at the end to hold additional characters, 
  and that you are given the "true" length of the string.

O(n)
*/

const URLify = str => {
  return [...str].reduce((acc, cur) => {
    if (cur === " ") acc += "%20";
    else acc += cur;
    return acc;
  }, "");
}

// const sample = "jeffrey flynn is awesome";
// console.log("result: ", URLify(sample));



/*
Given a string, write a function to check if it is a permutation of a palindrome.

A palindrome is a word or phrase that is the same forwards and backwards.

A permutation is a rearrangement of letters.

The palindrome does not need to be limited to just dictionary words.
*/

const is_permutation_palindrome = str => {}