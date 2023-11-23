// Fungsi untuk menghitung total waktu minimum yang diperlukan untuk membaca semua buku
function minimumTotalTimeToReadBooks(n, times) {
  // Mengurutkan waktu baca buku dari yang terbesar ke terkecil
  times.sort((a, b) => b - a);

  // Menjumlahkan semua waktu baca buku
  let totalTime = times.reduce((acc, curr) => acc + curr, 0);

  // Mengurangi waktu baca buku terbesar karena Kotivalo dan Justiina tidak bisa membaca bersamaan
  totalTime -= times[0];

  return totalTime;
}

// Input dari pengguna
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let times = [];

rl.question("Masukkan jumlah buku: ", (numBooks) => {
  n = parseInt(numBooks);
  console.log("Masukkan waktu yang dibutuhkan untuk membaca setiap buku:");

  rl.on("line", (line) => {
    // Mendapatkan waktu yang dibutuhkan untuk membaca setiap buku
    const inputTimes = line.split(" ").map(Number);
    times = inputTimes;

    if (times.length === n) {
      // Menghitung total waktu minimum yang diperlukan menggunakan fungsi
      const totalTime = minimumTotalTimeToReadBooks(n, times);

      // Menampilkan total waktu minimum yang diperlukan
      console.log(`Total waktu minimum yang diperlukan: ${totalTime}`);
      rl.close();
    }
  });
});
