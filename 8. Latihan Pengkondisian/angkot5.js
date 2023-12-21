let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot NO." + noAngkot + " beroperasi dengan baik");
    // ingat operator ||(OR) ini diantara kedua kondisinya harus lah bernilai true agar bisa menjalankan aksinya.
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot NO." + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot NO." + noAngkot + " sedang tidak beroperasi");
  }
}
