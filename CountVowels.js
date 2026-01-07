const vowels = ["a", "e", "i", "o", "u"];

function countVowels(text) {
  if (typeof text != "string") {
    return "Invalid Input!";
  }
  let vowelCount = 0;

  text
    .toLowerCase()
    .split("")
    .map((character) => {
      if (vowels.includes(character)) {
        vowelCount += 1;
      }
    });

  return vowelCount;
}

console.log(countVowels("My Name is Ovi"));
