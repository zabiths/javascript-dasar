// alert("Hello World");
// alert("saya adalah");
// alert("joko");

// popup box yg ada textboxnya
// prompt ini mengembalikkan nilai inputannya
// let hari = prompt("Apakah ini hari selasa ?");

// console.log(hari);

// confirm ini mengembalikan nilai true jika ditekan "ok" dan false "jika cancel".
// let tes = confirm("kamu akan menghapus data hari ini ?");

// if (tes === true) {
//   alert("menekan ok");
// } else {
//   alert("user menekan Cancel");
// }

alert("Selamat datang..");
let lagi = true;

// cara bacanya, selama lagi itu nilai nya terus maka pengulangan nya akan jalan terus,
while (lagi) {
  // kalo user menekan tombol oke maka iya akan masuk ke perulangan lagi
  let nama = prompt("masukan nama:");
  alert("halo " + nama);

  // ketika user menekan tombol cancel maka dia akan keluar dari pengulangannya
  lagi = confirm("coba lagi");
}

alert("terima kasih");
