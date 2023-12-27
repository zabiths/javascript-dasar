// ini infinite loop
// while (true) {
//     console.log('hello world');
// }

// let ulang = true;

// // cara bacanya selama nilainya true lakukan aksi didalamnya.
// while (ulang) {
//   console.log("Hello World");
//   // ingat confirm ini memiliki aksi oke dan cancel
//   ulang = confirm("lagi ?");
// }

// atau kita bisa menghentikan perulangannya dari while tersebut

let nilaiAwal = 1;
let input = parseInt(prompt("masukkan angka"));
while (nilaiAwal <= input) {
  console.log("Hello World " + nilaiAwal + "x");
  nilaiAwal++;
}
