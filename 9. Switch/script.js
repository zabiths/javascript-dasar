// parseInt ini berfungsi untuk memaksa apa yang diinputkan oleh user menjadi angka.
// let angka = parseInt(prompt("masukkan angka"));

// if (angka === 1) {
//   alert("anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("anda memasukkan angka 2");
// } else {
//   alert("angka yang anda masukkan salah!");
// }

let angka = prompt("masukan \n angka :");

switch (angka) {
  // 1 disini type datanya string.
  case "1":
    alert("anda memasukkan angka 1");
    break;
  case "2":
    alert("anda memasukkan angka 2");
    break;
  default:
    alert("angka yang anda masukkan salah!");
    break;
}

