let s = "";

// gunakan decrement atau -- supaya mundur
for (let i = 10; i > 0; i--) {
  // apakah 0/j lebih kecil sama dengan 0/i, baru true nilainya jalankan aksinya.
  for (let j = 0; j < i; j++) {
    // sama aja dengan s = s +"*";
    s += "*";
  }
  s += "\n";
}

console.log(s);
