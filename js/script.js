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

