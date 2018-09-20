/* 
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures? 
*/

const is_unique = str => {
  const hashed = {};

  for (let i = 0; i < str.length; i++) {
    if (hashed[str[i]]) return false;
    else hashed[str[i]] = 1;
  }

  return true;
}


/* FIREBASE IS A COMPREHENSIVE DEVELOPMENT PLATFORM




What did you contribute to this project?

  I was heavily involved in establishing the server-to-client side connections

    * all the real-time updates
    * custom search engine




What was the hardest part of this project?

  Technically speaking, Firebase, specifically Firestore.

    ...which is one of two database options offered by Firebase.

    ...we chose this over the Real Time Database because
      * it offers more structured data with documents and collections as opposed to on massive JSON tree
      * provides greater speed and scalability than the Real Time Database
    
    ...the primary reason it was the most difficult aspect of this project is because 
      * I had zero prior experience with Firebase
      * and quite frankly, there's a ton of documentation to read and understand
    
    ...I overcame this obsticle with HARD WORK and DETERMINATION




*/