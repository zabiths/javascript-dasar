let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let p = prompt("pilih: gajah, semut, orang");

  // menangkap pilihan dari komputer
  // memebangkitkan bilangan random
  let comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  let hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "MENANG";
    //   } else {
    //     hasil = "KALAH";
    //   }

    //   OPERATOR TERNARY
    //   CARA BACANYA, CEK DULU APAKAH KOMPUTER MEMILIH ORANG, JIKA IYA MAKA STRING MENANG AKAN MASUK KE VARIABLE HASIL
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    //   if (comp == "gajah") {
    //     hasil = "KALAH";
    //   } else {
    //     hasil = "MENANG";
    //   }
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }

  // tampilkan hasil
  alert("Kamu memilih : " + p + " dan Komputer memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);

  tanya = confirm("Lagi?");
}

alert("Terima Kasih sudah bermain Game Suwit Jawa");
