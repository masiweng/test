// Import library crypto untuk mengakses algoritma hash SHA-256
const crypto = require('crypto');

// Fungsi untuk menghasilkan hash dari sebuah string menggunakan SHA-256
function generateSHA256Hash(data) {
  const hash = crypto.createHash('sha256');
  // const hash = crypto.createHash('MD5');
  hash.update(data);
  return hash.digest('hex'); // Mengembalikan hash dalam bentuk heksadesimal
}

// Contoh penggunaan
const inputString = "Contoh String yang Akan di-hash";
const hashResult = generateSHA256Hash(inputString);

console.log("Input String:", inputString);
console.log("SHA-256 Hash:", hashResult);
