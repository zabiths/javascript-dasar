function tampilAngka(n) {
  // base case
  if (n === 0) return;
  // akhir base case
  console.log(n);
  return tampilAngka(n - 1);
}

// looping faktorial dengan rekursif
// function faktorial(n) {
//   if (n === 0) return 1;
//   return n * faktorial(n - 1);
// }

tampilAngka(10);
