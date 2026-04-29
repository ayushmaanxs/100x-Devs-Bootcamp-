/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    // ignore cases so making all as small letters
    str = str.toLowerCase();

    // new string will store only letters not panctuations
    let clean = "";

    for (let i = 0; i < str.length; i++) {
        if (
            (str[i] >= 'a' && str[i] <= 'z') ||
            (str[i] >= '0' && str[i] <= '9')
        ) {
            clean = clean + str[i];
        }
    }

    // palindrome check on the punctuation free string
    let low = 0;
    let high = clean.length - 1;

    while (low < high) {
        if (clean[low] != clean[high]) {
            return false;
        }

        low++;
        high--;
    }

    return true;
}

module.exports = isPalindrome;