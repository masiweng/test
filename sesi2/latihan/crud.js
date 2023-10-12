const myData = [
  {
    id: 1,
    user_id: 1,
    title: 'Test title',
    is_done: false
  }
]

function getmyData() {
  console.log(myData);
}

const addData = (inputId, inputUser_id, inputTitle, inputIs_done) => {
  let data = {
    id: inputId,
    user_id: inputUser_id,
    title: inputTitle,
    is_done: inputIs_done,
  }

  myData.push(data);
  console.log('Data berhasil ditambahkan');
  console.log(data);
}

const updateData = function(inputId, inputTitle, inputIs_done) {
  let index = myData.findIndex(item => item.id == inputId);

  if(index >= 0) {
    let data = myData[index];
    data.title = inputTitle;
    data.is_done = inputIs_done;

    console.log('Data berhasil diubah');
    console.log(myData[index]);
  }
}


const deleteData = (inputId) => {
  let index = myData.findIndex(item => item.id == inputId);

  if(index >= 0) {
    myData.splice(index, 1);
    console.log('Data berhasil dihapus');
  } else {
    console.log('Data tidak ditemukan');
  }
}

getmyData();
addData(2,1,'Sungai anak',true);
addData(3,1,'Contoh saja',false);
getmyData();

updateData(1,"Sungai Nil", false);
deleteData(2);
getmyData();
