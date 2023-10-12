const users = [];

function getUser() {
  console.log(users);
}

const addUser = function(inputId, inputNama, inputEmail, inputPassword) {
  let user = {
    id: inputId,
    name: inputNama,
    email: inputEmail,
    password: inputPassword,
  }

  users.push(user);
  console.log('User berhasil ditambahkan');
  console.log(user);
}

const updateUser = (inputId, inputNama, inputEmail) => {
  let index = users.findIndex( item => item.id == inputId);

  if(index >= 0) {
    let user = users[index];
    user.name = inputNama;
    user.email = inputEmail;

    console.log('Berhasil update data user');
    console.log(users[index]);
  } else {
    console.log('User tidak ditemukan');
  }
}

const deleteUser = (inputId) => {
  let index = users.findIndex( item => item.id == inputId);

  if (index >= 0) {
    users.splice(index, 1);
    console.log('User berhasil dihapus')
  } else {
    console.log('User tidak ditemukan');
  }
}

// addUser(1,"Iwan","tes@tes.com","1234");
getUser();