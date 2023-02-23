let dyr = "kat";

console.log(dyr.charAt(0));



function forbogstaver(tekst1, tekst2) {
    // TODO
    // 1. Sæt de to forbogstaver sammen
    // 2. Return dem

    let fb1 = tekst1.charAt(0);
    let fb2 = tekst2.charAt(0);
    let resultat = fb1 + fb2;
    return resultat;
}

console.log(forbogstaver("hund", "kat"));