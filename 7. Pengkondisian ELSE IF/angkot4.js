let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot NO." + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8 ) {
    console.log("Angkot NO." + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot NO." + noAngkot + " sedang tidak beroperasi");
  }
}
