/*
  Algoritma mencari Bilangan Prima
  1. Input angka
  2. Index=1
*/

const apakahBilanganPrima = (angka) => {
  if(angka<=1) {
    return false;
  }
  if (angka <=3) return true;


  let pembagi = 0;
  for (let index = 2; index * index <= angka; index++) {
    if(angka % index === 0) {
      return false;
    }    
  }

  // if(pembagi == 2) {
  //   console.log('Bilangan prima');
  // } else {
  //   console.log('Bukan bilangan prima');
  // }
}
let angka = 6;
if (apakahBilanganPrima(angka)) {
  console.log(`angka = ${angka} adalah bilangan prima`);
} else {
  console.log(`angka = ${angka} bukan bilangan prima`)
}