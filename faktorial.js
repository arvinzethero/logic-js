// Faktorial
/*
Temukan lah faktorial 4. faktorial adalah
angka yang akan dikalikan contoh
4 x 3 x 2 x 1 = faktorila dari 4
 */

const faktorial = function (num) {
  let hasil = 1;
  for (let i = num; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
};

console.log(faktorial(4));
