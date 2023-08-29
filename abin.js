let arr = [];
for (let i = 1; i < 10; i++) {
  if (i % 5 == 0 || i % 5 == 2) {
    arr.push("*");
  } else {
    arr.push(i);
  }
}

console.log(arr);
