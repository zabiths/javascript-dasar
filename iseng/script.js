let firstNumber = 1;

let input = parseInt(prompt("Masukkan jumlah rasa rindumu ke dalam 'Kotak Rindu'"));

if (input) {
  while (firstNumber <= input) {
    document.write("<p>aku merindukan kamu lebih dari " + firstNumber + "x" + "</p>");
    firstNumber++;
  }
} else {
  alert("Tidak Boleh kosong & Hanya ANGKA yang dapat diproses");
  document.write("<h3>Wah sepertinya kamu tidak memasukkan sesuatu atau angka kamu masukan yang salah, coba <i>REFRESH<i/> </h3>");
}
