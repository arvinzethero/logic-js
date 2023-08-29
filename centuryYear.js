// Century from year
/*
Diberikan sebuah tahun, kembalikan abad di mana tahun tersebut berada.
Abad pertama berlangsung dari tahun 1 hingga masuk tahun 100, abad kedua - dari tahun 101 
hingga termasuk tahun 200, dan  seterusnya

input = 1905 output = 20
input = 1700 output = 17
 */

const Century = function (year) {
  return Math.floor((year - 1) / 100 + 1);
};

console.log(Century(1700));
