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
      // SPACE = WORD BREAK
      morse.value += "   ";
      break;
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

  // this does text to morse - repair later
  plainText.value = morse
    .map(letter => {
      for (let key in DICTIONARY) {
        if (key === letter) {
          return DICTIONARY[key];
        }
      }
    })
    .join("   ");
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
