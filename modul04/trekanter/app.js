
for (let i = 0; i < 10; i++) {
  let output = "";
  for (let j = 0; j < 10 - i; j++) {
    output = output + " ";
  }
  for (let j = 9 - i; j < 10; j++) {
    output = output + "*";
  }
  console.log(output);
}
