let num = 12324343411;
let str = String(num);
let sum = 0;

for (let i = 0; i < str.length; i += 3) {
  let numbers = str[i] + str[i + 1] + str[i + 2];
  sum += parseInt(numbers);
}

console.log(sum);
