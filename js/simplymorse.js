let DICTIONARY = {
  A: ". _",
  N: "_ .",
  B: "_ . . .",
  O: "_ _ _",
  C: "_ . _ .",
  P: ". _ _ .",
  D: "_ . .",
  Q: "_ _ . _",
  E: ".",
  R: ". _ .",
  F: ". . _ .",
  S: ". . .",
  G: "_ _ .",
  T: "_",
  H: ". . . .",
  U: ". . _",
  I: ". .",
  V: ". . . _",
  J: ". _ _ _",
  W: ". _ _",
  K: "_ . _",
  X: "_ . . _",
  L: ". _ . .",
  Y: "_ . _ _",
  M: "_ _",
  Z: "_ _ . .",

  1: ". _ _ _ _",
  6: "_ . . . .",
  2: ". . _ _ _",
  7: "_ _ . . .",
  3: ". . . _ _",
  8: "_ _ _ . .",
  4: ". . . . _",
  9: "_ _ _ _ .",
  5: ". . . . .",
  0: "_ _ _ _ _"
};

document
  .getElementById("morseDisplay")
  .addEventListener("keydown", arrowKeysToMorse);

// 37 left arrow = DOT, 39 right arrow = DASH
function arrowKeysToMorse(e) {
  let morse = document.getElementById("morseDisplay");
  e.preventDefault();
  switch (e.keyCode) {
    case 37:
      // LEFT Arrow = DOT
      morse.value += ". ";
      break;

    case 39:
      // RIGHT Arrow = DASH
      morse.value += "_ ";
      break;

    case 32:
      // SPACE = LETTER BREAK
      morse.value += "|";
      break;

    case 8:
      // Backspace to allow deletion (deletes one char from end)
      morse.value = morse.value.slice(0, -1);
      break;

    case 13:
      // Enter for a new word
      morse.value = morse.value + "   "; // push to an array but also keep stuff in a line like normal text
      break;

    case 27:
      // escape key to clear input
      morse.value = "";
    default:
      alert(
        "Please only include morse code in this box by using the left and right arrow keys + space for word breaks"
      );
  }
}

function morseToText() {
  document.getElementById("plainTextDisplay").value = "";
  let plainText = document.getElementById("plainTextDisplay");
  let morse = document
    .getElementById("morseDisplay")
    .value.toString()
    .toUpperCase()
    .split("");

  let morseWithoutSpaces = morse.filter(character => character !== " ");
  // need to break on end of letter

  console.log("MWS: " + morseWithoutSpaces);
  console.log("DWS: " + dictWithoutSpaces);
  //plainText.value =
}

function textToMorse() {
  document.getElementById("morseDisplay").value = "";
  let morse = document.getElementById("morseDisplay");
  let plainText = document
    .getElementById("plainTextDisplay")
    .value.toString()
    .toUpperCase()
    .split("");

  morse.value = plainText
    .map(letter => {
      for (let key in DICTIONARY) {
        if (key === letter) {
          return DICTIONARY[key];
        }
      }
    })
    .join("   ");
}

function toggleCheatSheet() {
  let elem = document.getElementById("quick-view");
  elem.classList.toggle("cheat-sheet-on");
}
