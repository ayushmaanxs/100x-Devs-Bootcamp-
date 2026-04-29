/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2) {

    // Agar length same nahi hai to anagram nahi hoga like cat and cats never equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Dono strings ko lowercase karo ---> as dono lowercase and uppercase equal nhi hote
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Dono ko characters me todke sort karo
    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');
    //split will break the string into char array the sort us array ko sort krega then join krke firse string mil gyaa

    // Compare karo
    if (sorted1 === sorted2) {
        return true;
    } else {
        return false;
    }
}

module.exports = isAnagram;