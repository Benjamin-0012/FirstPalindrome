// Question 4
function firstPalindrome(words) {
  const lens = words.length;
  for (let i = 0; i < lens; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
}