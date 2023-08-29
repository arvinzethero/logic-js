// Vowels
/*
Mencari berapa banyak vowels = aiueo di dalam sebuaj
string
 */

const vowels = function (str) {
  let count = 0;
  let vowel = "aiueo";
  for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) > -1) {
      count++;
    }
  }
  return count;
};

console.log(vowels("arvin hidayat"));

const vowel2 = function (str) {
  let v = ["a", "i", "u", "e", "o"];
  let vowel = {
    A: 0,
    I: 0,
    U: 0,
    E: 0,
    O: 0,
  };
  for (let i = 0; i < str.length; i++) {
    if (v[0].indexOf(str[i]) > -1) {
      vowel.A++;
    } else if (v[1].indexOf(str[i]) > -1) {
      vowel.I++;
    } else if (v[2].indexOf(str[i]) > -1) {
      vowel.U++;
    } else if (v[3].indexOf(str[i]) > -1) {
      vowel.E++;
    } else if (v[4].indexOf(str[i]) > -1) {
      vowel.O++;
    }
  }
  return vowel;
};

console.log(vowel2("arvin hidayat"));
