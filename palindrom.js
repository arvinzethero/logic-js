// Palindrom kalimat
const palindromWord = function (str) {
  for (let i = 0; i < str.length; i++) {
    let strBegin = str[i];
    let strEnd = str[str.length - i - 1];
    if (strBegin !== strEnd) {
      return false;
    }
  }
  return true;
};

console.log(palindromWord("khdkrhxuk"));

// Palindrom angka
const palindromNumber = function (number) {
  let num = number
    .toString()
    .split("")
    .map((m) => parseInt(m));

  for (let i = 0; i < num.length; i++) {
    let numBegin = num[i];
    let numEnd = num[num.length - i - 1];

    if (numBegin !== numEnd) {
      return false;
    }
  }
  return true;
};
