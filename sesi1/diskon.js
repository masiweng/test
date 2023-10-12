/*
  #Algoritma diskon
  1. Total belanja
  2. Jika total belanja lebih atau sama dengan 300.000 maka lanjut hitung diskon atau masuk ke langkah 3, jika tidak maka lanjut ke langkah 5
  3. Hitung diskon 10% dari total belanja
  4. Kurangi total belanja dengan jumlah diskon yang didapatkan
  5. Tampilkan total belanja yang harus di bayar
*/

const totalPayment = function(totalBelanja) {
  let diskon = 0;
  let totalBayar = totalBelanja;

  if(totalBelanja >= 300000) {
    diskon = 0.1 * totalBelanja;

    totalBayar = totalBayar - diskon;
  }

  return totalBayar;

}

let totalBelanja = 350000
let result =  totalPayment(totalBelanja)
console.log(`Total belanja Rp.${totalBelanja.toLocaleString()}`);
console.log(`yang harus dibayar Rp.${result.toLocaleString()}`);
