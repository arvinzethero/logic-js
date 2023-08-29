const sum = function (str) {
  return str
    .split("")
    .map((m) => parseInt(m))
    .reduce((a, b) => a + b);
};

console.log(sum("29"));

// sum normal
const tambah = function (angka) {
  return angka + angka;
};
