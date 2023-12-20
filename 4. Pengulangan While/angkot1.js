let jumlahAngkot = 10;
let noAngkot = 1;

// cara kerja kode dibawah ini, yang pertama cek dulu kondisi nya apakah noAngkot lebih kecil dari pada jumlahAngkot, jika bernilai true lakukan kondisi nya, lalu increment diakhir loop nya, lalu ulang lagi sampai noAngkot nya lebih dari jumlahAngkot keluar dari loop nya.
while (noAngkot <= jumlahAngkot) {
  console.log("Angkot NO." + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}
