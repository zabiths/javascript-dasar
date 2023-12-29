// Manipulasi Array

// 1. Menambah isi Array
// let arr = ["a", 1, true];
// // ini menampilkan isi array
// console.log(arr[1]);
// let arr = [];
// arr[0] = "Muhammad";
// arr[1] = "Rendy";
// arr[2] = "Alfian";
// arr[6] = "Joko";

// console.log(arr);

// 2. Menghapus isi array

// let arr = ["Muhammad", "Rendy", "Alfian"];

// arr[0] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// let arr = ["Muhammad", "Rendy", "Alfian"];

// for (let i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke- " + (i + 1) + " : " + arr[i]);
// }

// Method pada array
let arr = ["Muhammad", "Rendy", "Alfian"];
// 1. join
// console.log(arr.join(" - "));

// 2. push & pop
// push menambah elemen terakhir sebuah array
// push juga bisa untuk menambahkan beberapa elemen sekaligus.
// pop menghapus elemen terakhir sebuah array
// joko akan ditambah kedalam array dengan menggunakan method push.
// arr.push("Joko");
// arr.pop();
// arr.pop();
// console.log(arr.join(" - "));

// 3. unsift & shift
// sama seperti push & pop, tapi ini menambah dan menghapus elemen pertama.
// arr.unshift("Dodo");
// arr.shift();
console.log(arr.join(" - "));
