// a, b adalah parameter.
function tambah(a, b) {
  return a + b;
}
 
function kali(a, b) {
  return a * b;
}

// let a = parseInt(prompt("Masukkan nilai 1 :"));
// let b = parseInt(prompt("Masukkan nilai 2 :"));
// let hasil = tambah(a, b);

// 2, 3 ini adalah "argument" untuk dikirim ke parameter.
// console.log(tambah(2, 3));

let hasil = kali(tambah(1, 2), tambah(3, 4));

console.log(hasil);
