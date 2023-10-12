let dataLogin = [
  {
    email: 'tes@tes.com',
    pass: '123',
  },
  {
    email: 'aku@tes.com',
    pass: '12345',
  },
]

function login (inputEmail, inputPass) {
  for (let index = 0; index < dataLogin.length; index++) {

    if(inputEmail == dataLogin[index].email && inputPass == dataLogin[index].pass) {
      console.log(`Selamat datang ${inputEmail}`);
      return;
    }    
  }
  console.log('Email atau Password tidak cocok!');
}

login('aku@tes.com', '123');