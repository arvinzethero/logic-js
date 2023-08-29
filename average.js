// Mudah
/*
Jika sebuah mahasiswa mempunya banyak nilai
dan ingin mengetahui rata-tata dari nilai tersebut
 */
const average = function (numb) {
  return numb.reduce((a, b) => a + b) / numb.length;
};

let mhs = [7, 8, 7, 9, 7, 8, 6, 7];
console.log(average(mhs));

// Banyak
const averageBa = function (nums) {
  let hasil = 0;
  for (let i = 0; i < nums.length; i++) {
    hasil += nums[i];
  }
  return hasil / nums.length;
};

console.log(averageBa(mhs));
