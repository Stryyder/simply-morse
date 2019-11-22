let morse = document.getElementById("arrowRight"); // morse to text
let plainText = document.getElementById("arrowLeft"); // text to morse

let morseIn = morse.value;
let plainTextIn = plainText.value;

morse.addEventListener("onclick", morseToText());
plainText.addEventListener("onclick", textToMorse());

const DICTIONARY = {
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

function morseToText(e) {
  plainTextIn.value = "";
  for (let i = 0; i < morse.value.length; i++) {
    plainTextIn.value += "letter";
    console.log("fired m2t");
  }
}

function textToMorse(e) {
  morseIn.value = "";
  for (let i = 0; i < morse.value.length; i++) {
    morseIn.value += "letter";
    console.log("fired t2m");
  }
}
