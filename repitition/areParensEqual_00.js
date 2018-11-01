// Given a string of parentheses/brackets, return true if every opening paren matches its closing partner.

/* Sudo Code *//*
    * scan the string/array left to right
        * if the element is an opening bracket, push it to the stack
        * if the element is a closing bracket, see if it matches the last element in the stack
            * if it does, pop that element off the stack and move on to the next element
    * if the stack is empty, return true!
*/

function areParensEqual(str) {
  const stack = [];
  const map = {
    open: ["(", "{", "["],
    close: [")", "}", "]"],
    full: ["()", "{}", "[]"]
  };

  for (let i = 0; i < str.length; i++) {
    if (map.open.includes(str[i])) {
      stack.push(str[i]);
    } 
    else if (map.close.includes(str[i])) {
      const topOfStack = stack[stack.length-1];
      const combined = topOfStack + str[i];
      if (map.full.includes(combined)) stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(areParensEqual("{}{()"));