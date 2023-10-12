/* 
    algoritma liniar search
*/  

function linierSearch(data, target) {
  for (let index = 0; index < data.length; index++) {
    // const element = data[index];
    if (data[index] == target) {
      return index;
    }
  }

  return -1;
}

const myData = [1,2,3,4,5,6,7,8,9,10];
let target = 8;

let resault = linierSearch(myData, target);

if(resault != -1) {
  console.log(`Data ditemukan di index ke-${resault}`);
} else {
  console.log('Data tidak ditemukan');
}