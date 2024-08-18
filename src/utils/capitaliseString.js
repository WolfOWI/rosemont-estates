export function capitaliseString(text) {
  let words = text.split(" ");
  let capitalisedText = "";
  let firstWord = true;

  words.forEach((word) => {
    let capitalisedWord = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    if (firstWord) {
      capitalisedText += capitalisedWord;
      firstWord = false;
    } else {
      capitalisedText += " " + capitalisedWord;
    }
  });

  return capitalisedText;
}
