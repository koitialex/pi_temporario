 const loginRegister = document.getElementById('loginRegister');

  const btnLogin = document.querySelector('.btn-login');
  const btnRegister = document.querySelector('.btn-register');

  btnRegister.addEventListener('click', () => {
    loginRegister.classList.add('active');
  });

  btnLogin.addEventListener('click', () => {
    loginRegister.classList.remove('active');
  });

  const btnEnviarRec = document.getElementById('button-rec');

  window.addEventListener('DOMContentLoaded', () => {
  const btnEnviarRec = document.getElementById('button-rec');

  if (btnEnviarRec) {
    btnEnviarRec.addEventListener('click', () => {
      window.location.href = '/js/novaSenha.html'; // ajuste o caminho se necessário
    });
  } else {
    console.warn('Botão com ID "button-rec" não encontrado.');
  }
});

//--------------------------------------------------------------------------------------

function cadastrar(){
  const usuario = document.getElementById('#user');
  const userLabel1 = document.getElementById('#userLabel');

  const email = document.getElementById('#email'); 
  const emailLabel = document.getElementById('#emailLabel');

  const senha = document.getElementById('#password');
  const senhaLabel = document.getElementById('#senhaLabel');

  const pergunta1 = document.getElementById('#pergunta1');
  const pergunta1Label = document.getElementById('#pergunta1Label');

  const pergunta2 = document.getElementById('#pergunta2');
  const pergunta2Label = document.getElementById('#pergunta2Label');
  
  const resposta1 = document.getElementById('#resposta1');
  const resposta1Label = document.getElementById('#resposta1Label');
  
  const resposta2 = document.getElementById('#resposta2');
  const resposta2Label = document.getElementById('#resposta2Label');

  

  const listUser = [];
  const userValid = {
    nome:'',
    email:'',
    senha:'',
    pergunta1:'',
    pergunta2:'',
    resposta1:'',
    resposta2:'',

  }
  listUser = JSON.parse(localStorage.getItem('listUser'));
  
  listUser.forEach((item) => {
    if(user.value == item.userCad )
  });
}