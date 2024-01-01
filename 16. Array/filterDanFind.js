// Method filter dan find
// 2 method ini digunakan untuk mencari elemen pada array
// Hati-hati dalam penggunaannya, find hanya dapat mengembalikan 1 nilai sedangkan filter itu bisa mengembalikan banyak nilai.

// 9. filter & find
// filter, mencari nilai dalam array dan mengembalikannya dalam bentuk array.
// kalo find dia hanya menemukan 1 nilai aja.
let angka = [1, 2, 10, 5, 8, 3, 20, 6, 7, 4];
let angka2 = angka.find(function (x) {
  return x > 5;
});
// find tidak bisa menggunakan .join karna dia bukan array, dia hanya mengembalikan nilai.
console.log(angka2);
