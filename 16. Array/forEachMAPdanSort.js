// Method forEach dan map digunakan untuk melakukan looping pada array.
// dengan mengguanakan 2 method ini kita bisa menggunakan sesuatu pada elemen array secara otomatis.

// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// for ini bisa diganti dengan forEach.
// 6. forEach
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let nama = ["Muhammad", "Rendy", "Alfian"];
// sama persis seperti "looping for" diatas, penjelasannya, untuk setiap elemen yang ada didalam elemen angka lakukan fungsi berikut ini .
// ini menggunakan function expression tapi ditaro didalam forEachnya langsung.
// angka.forEach(function (e) {
//   console.log(e);
// });

// atau kita bisa keluarkan menggunakan function sendiri.
// function expression ditaro dalam sebuah variable.
// let cetak = function (e) {
//   console.log(e);
// };

// // ini untuk menjalankannya.
// angka.forEach(cetak);

// e disini mengacu kedalam elemen pada variable nama.
// i mengacu pada indexnya.
// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke- " + (i + 1) + " adalah " + e);
// });

// 7. map
// ingat method map ini megembalikan nilai array.
// sedangkan forEach itu ti
let angka = [1, 2, 10, 5, 8, 3, 20, 6, 7, 4];
// let angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2.join(" - "));

// 8. sort
// Method sort ini berfungsi untuk mengurutkan.

// ini sebelum diurutkan
console.log(angka.join(" - "));

// apabila terdapat angka puluhan atau lebih dari satuan, maka mehtod akan mengambil awalan elemen untuk diurutkan, nah ni menjadi masala h seperti 1, 10, 2, 20, 3, 4, dan seterusnya.
// solusinya kita buat perbandingan menggunakan function expresision didalam parameter sort seperti dibawah ini.
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - "));
