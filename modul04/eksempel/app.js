let numbers = [42, 102, 7, 4];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);

let array = [];
for (let i = 0; i < 100000; i++) {
    array.push(i);
}
console.log(array);

