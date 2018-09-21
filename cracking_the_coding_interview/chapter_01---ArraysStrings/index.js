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

const sample0 = "ABC"
const sample1 = "BCA"

// console.log(`\n\n${sample0} is a permutation of ${sample1} --- ${is_permutation(sample0, sample1)}\n\n`)