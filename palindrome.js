function checkPalindrome(text) {
  if (typeof text != "string") {
    return "Invalid Input!";
  }
  const loweredText = text.toLowerCase();
  const reversedString = loweredText.split("").reverse().join("");

  if (loweredText === reversedString) {
    return true;
  }
  return false;
}

console.log(checkPalindrome("Madam"));
