// this adalah sebuah keyword spesial yg secara otomatis didefinisikan pada setiap function, jadi setiap biki function atau object itu secara langsung ada keyword this yg didefinisikan.
// isi dari this adalah window atau object global.
// var a = 10;
// console.log(this.a);

// membuat object

// cara 1 - function declaration
// function halo() {
//   // properti adalah variable didalam object
//   // method adalah function didalam object
//   console.log(this);
//   console.log("halo");
// }

// this.halo();
// this mengembalikan object global.

// cara 2 - object literal
// const obj = { a: 10, nama: "Rendy" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };

// obj.halo();
// ini hasilnya dia mengembalikan object/objnya atau object ini sendiri atau object yg bersangkutan.

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log("halo");
}

var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat(var obj1, varobj2), karna dia membuat instance atau copy dari function Halo.
// this disini adalah var obj1 dan var obj2.
