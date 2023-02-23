/*
  Lav en variabel der hedder alder og som indeholder en alder (fx 5).
  Lav betingelser så du får tre tilfælde:

  Alder under 3
  Alder fra 3 til under 6
  Alder fra 6 til under 16

  I hvert af de tre tilfælde udskrives en af teksterne svarende til alderen:

  “Vuggestue”
  “Børnehave”
  “Skole”

  Hvis alder falder uden for de tre betingelser, udskrives

  “Voksen”
*/

let alder = 20;

if (alder < 3) {
  console.log("Vuggestue");
} else if (alder < 6) {
  console.log("Børnehave");
} else if (alder < 16) {
  console.log("Skole");
} else {
  console.log("Voksen");
}
