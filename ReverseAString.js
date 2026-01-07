function reverseString(text) {
  if (typeof text != "string") {
    return "Invalid Input!";
  }

  const reversedString = text.split("").reverse().join("");
  return reversedString;
}

console.log(reverseString("My Name is Ovi"));
