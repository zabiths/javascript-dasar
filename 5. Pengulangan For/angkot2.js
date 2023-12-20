let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot NO." + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

// noAngkot = angkotBeroperasi + 1; noAngkot(ini 7)
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log("Angkot NO." + noAngkot + " sedang tidak beroperasi");
}
