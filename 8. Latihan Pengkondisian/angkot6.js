let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  // ingat operator logika &&(dan) kedua kondisinya harus bernilai true, kalo ada 1 yang false maka aksi nya tidak akan dijalankan.
  // maksud dari noAngkot !== 5 ini emang sengaja dibuat false agar dia keluar dari if dan masuk ke else if dan menjalankan aksi di else if.
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot NO." + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot NO." + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot NO." + noAngkot + " sedang tidak beroperasi");
  }
}
