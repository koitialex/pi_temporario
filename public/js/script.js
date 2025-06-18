/* botões register e login ------------------------------------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const loginRegister = document.getElementById('loginRegister');
  const btnLogin = document.querySelector('.btn-login');
  const btnRegister = document.querySelector('.btn-register');
  const form = document.querySelector('.register-form');

  btnRegister.addEventListener('click', () => {
    loginRegister.classList.add('active');
  });

  btnLogin.addEventListener('click', () => {
    loginRegister.classList.remove('active');
  });
/* desabilitar opção para pergunta -------------------------------------------------------------------------------------------------------*/ 

  document.addEventListener('DOMContentLoaded', () => {
    const pergunta1 = document.getElementById('pergunta1');
    const pergunta2 = document.getElementById('pergunta2');

    function sincronizarSelects(primario, secundario) {
      const selecionado = primario.value;

      // Reativa todas as opções do segundo select
      for (const opt of secundario.options) {
        opt.disabled = false;
      }

      // Desativa a mesma opção do outro select (se estiver selecionada)
      if (selecionado !== "") {
        for (const opt of secundario.options) {
          if (opt.value === selecionado) {
            opt.disabled = true;
            break;
          }
        }
      }
    }

    pergunta1.addEventListener('change', () => {
      sincronizarSelects(pergunta1, pergunta2);
    });

    pergunta2.addEventListener('change', () => {
      sincronizarSelects(pergunta2, pergunta1);
    });
  });



  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const senhaValida = validarSenha();
    const confirmarSenhaValida = validarConfirmarSenha();
    const pergunta1Valida = validarPergunta1();
    const resposta1Valida = validarResposta1();   // corrigido
    const pergunta2Valida = validarPergunta2();
    const resposta2Valida = validarResposta2();   // corrigido

    if (
      !nomeValido ||
      !emailValido ||
      !senhaValida ||
      !confirmarSenhaValida ||
      !pergunta1Valida ||
      !resposta1Valida ||
      !pergunta2Valida ||
      !resposta2Valida
    ) {
      alert("Falha no cadastro. Corrija os erros.");
    } else {
      alert("Cadastrado com sucesso!");
      form.submit(); // opcional: envia o form se quiser
      document.querySelector('.btn-login').click();
      
    }
  });

});

  // segue se passar  

function validarNome() {
  const usuario = document.getElementById('nome');
  const userLabel = document.getElementById('nomeLabel');
  const erro = document.getElementById('ErroNome');

  if (usuario.value.trim().length <= 2) {
    userLabel.style.color = 'red';
    erro.style.color = 'red';
    erro.textContent = 'Precisa no mínimo 3 caracteres';
    return false;
  }

  userLabel.style.color = '';
  userLabel.textContent = 'Nome';
  return true;
}

function validarEmail() {
  const email = document.getElementById('email');
  const emailLabel = document.getElementById('emailLabel');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const erro = document.getElementById('ErroEmail');

  if (!regex.test(email.value)) {
    emailLabel.style.color = 'red';
    erro.style.color = 'red';
    erro.textContent = 'Email inválido';
    return false;
  }

  emailLabel.style.color = '';
  emailLabel.textContent = 'Email';
  return true;
}

function validarSenha() {
  const senha = document.getElementById('password');
  const senhaLabel = document.getElementById('senhaLabel');
  const erro = document.getElementById('ErroSenha');

  if (senha.value.length < 6) {
    senhaLabel.style.color = 'red';
    erro.style.color = 'red';
    erro.textContent = 'Senha deve ter no mínimo 6 caracteres';
    return false;
  }

  senhaLabel.style.color = '';
  senhaLabel.textContent = 'Senha';
  return true;
}

function validarConfirmarSenha() {
  const senha = document.getElementById('password');
  const confirmar = document.getElementById('confirmarSenha');
  const label = document.getElementById('confirmarSenhaLabel');
  const erro = document.getElementById('ErroConfirmarSenha');

  if(!confirmar.value.trim()){
    label.style.color = 'red';
    erro.style.color = 'red';
    label.textContent = 'Senhas não coincidem';
    return false;

  }
  if(senha.value !== confirmar.value){
    label.style.color = 'red';
    erro.style.color = 'red';
    label.textContent = 'Senhas não coincidem';
    return false;
  }

  label.style.color = '';
  label.textContent = 'Confirmar Senha';
  return true;
}

function validarPergunta1() {
  const pergunta = document.getElementById('pergunta1');
  const label = document.getElementById('pergunta1Label');
  const erro = document.getElementById('ErroPergunta1');

  if (!pergunta.value.trim()) {
    erro.style.color = 'red';
    label.style.color = 'red';
    label.textContent = 'Escolha uma pergunta';
    return false;
  }

  label.style.color = '';
  label.textContent = 'Primeira pergunta';
  return true;
}

function validarResposta1() {
  const resposta = document.getElementById('resposta1');

  if (!resposta.value.trim()) {
    resposta.style.border = '1px solid red';
    return false;
  }

  resposta.style.border = '';
  return true;
}

function validarPergunta2() {
  const pergunta = document.getElementById('pergunta2');
  const label = document.getElementById('pergunta2Label');
  const erro = document.getElementById('ErroPergunta2');

  if (!pergunta.value.trim()) {
    label.style.color = 'red';
    erro.style.color = 'red';
    label.textContent = 'Escolha uma pergunta';
    return false;
  }

  label.style.color = '';
  label.textContent = 'Segunda pergunta';
  return true;
}

function validarResposta2() {
  const resposta = document.getElementById('resposta2');

  if (!resposta.value.trim()) {
    resposta.style.border = '1px solid red';
    return false;
  }

  resposta.style.border = '';
  return true;
}

function carregarPaginaCarrinho() {
  const carrinho = document.querySelector('.fa-solid.fa-cart-shopping');

  if (carrinho) {
    carrinho.addEventListener('click', (e) => {
      e.preventDefault(); // impede o <a href="#"> de recarregar a página
      window.location.href = 'carrinho.html';
    });
  } else {
    console.error('Botão do carrinho não encontrado');
  }
}

document.addEventListener('DOMContentLoaded', carregarPaginaCarrinho);

  // segue se passar


