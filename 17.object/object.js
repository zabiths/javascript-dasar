// membuat object
// Object Literal
let mhs1 = {
  // variable didalam object disebut properti
  nama: "Rendy Alfian",
  nim: "161450043",
  email: "renvian09@gmail.com",
  jurusan: "Manajemen Informatika",
};

let mhs2 = {
  // variable didalam object disebut properti
  nama: "Joko",
  nim: "161450045",
  email: "jokotinkir09@gmail.com",
  jurusan: "Teknik Informatika",
};

// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

let mhs3 = buatObjectMahasiswa("Muhammad", "16145003", "mamad@gmail.com", "Sistem Informasi");

// Function Constructor, pada nama functionnya sama seperti declaration tapi awalan namanya functionnya menggunakan huruf besar.
function Mahasiswa(nama, nim, email, jurusan) {
  // let this ={};
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
  // return this;
}

// cara manggil function constructor
// ketika memanggil function constructor wajib menggunakan new.
let mhs4 = new Mahasiswa("Erik", "213312", "erik@gmail.com", "Teknik Nuklir");
