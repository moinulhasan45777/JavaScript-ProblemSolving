function capitalize(text) {
  if (typeof text != "string") {
    return "Invalid Input!";
  }

  const newSplitCapitalizedArray = [];

  const splittedText = text.split(" ");

  splittedText.map((word) => {
    newSplitCapitalizedArray.push(word[0].toUpperCase() + word.slice(1));
  });

  return newSplitCapitalizedArray.join(" ");
}

console.log(capitalize("hello world"));
