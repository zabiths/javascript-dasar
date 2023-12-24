function tambah() {
  let hasil = 0;
  //   looping nilai dari isi let coba
  for (let i = 0; i < arguments.length; i++) {
    // menjumlahkan semua dari hasil looping
    hasil += arguments[i];
  }
  //   mengembalikan total hasil ke function tambah()
  return hasil;
}

let coba = tambah(1, 2, 3, 4);
// cetak hasil dari penjumlahan function tambah.
console.log(coba);
