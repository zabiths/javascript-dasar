const penumpang = [];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalannya
        console.log(namaPenumpang + " sudah ada didalam angkot");
        // kemablikan isi array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi arat & keluar dari function
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
    console.log("Angkot masih kosong");
    return penumpang;
  } else {
    // telusuri kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // hapus penumpang degan mengubah namanya, menjadi undefined
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
      }
      //jika tidak ada nama yang sesuai
      else if (i == penumpang.length - 1);
      // tampilkan pesan kesalahannya
      console.log(namaPenumpang + " tidak ada didalam angkot");
      // kembalikan isi array & keluar dari function
      return penumpang;
    }
  }
};
