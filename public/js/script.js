/* botões register e login ------------------------------------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const loginRegister = document.getElementById('loginRegister');
  const btnRegisters = document.querySelectorAll('.btn-register');
  const btnLogins = document.querySelectorAll('.btn-login');
  const form = document.querySelector('.register-form');

 btnRegisters.forEach(btn => {
    btn.addEventListener('click', () => {
      loginRegister.classList.add('active');
    });
  });

  btnLogins.forEach(btn => {
    btn.addEventListener('click', () => {
      loginRegister.classList.remove('active');
    });
  /* desabilitar opção para pergunta -------------------------------------------------------------------------------------------------------*/


  form.addEventListener('submit', function (e) {
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
      form.submit();
      limparCamposFormularioCadastro();

    }
  });

});
})



// segue se passar  

function validarNome() {
  const usuario = document.getElementById('nome');
  const userLabel = document.getElementById('nomeLabel');

  // 🔁 Resetar erro antes de tudo
  usuario.setCustomValidity('');
  usuario.style.border = '';
  userLabel.style.color = '';

  const nome = usuario.value.trim();

  if (nome.length === 0) {
    usuario.setCustomValidity('Preencha o campo');
  } else if (nome.length < 3) {
    usuario.setCustomValidity('No mínimo 3 caracteres');
  } 

  // 🔍 Mostra a mensagem se houver erro
  const valido = usuario.checkValidity();
  if (!valido) {
    usuario.reportValidity(); // Mostra o balão
    usuario.style.border = '1px solid red';
    userLabel.style.color = 'red';
    return false;
  }

  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const usuario = document.getElementById('nome');
  const label = document.getElementById('nomeLabel');

  usuario.addEventListener('input', () => {
    usuario.setCustomValidity('');
    usuario.style.border = '';
    label.style.color = '';
  });
})

function validarEmail() {
  const email = document.getElementById('email');
  const emailLabel = document.getElementById('emailLabel');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email.value)) {
    email.setCustomValidity('Email inválido');
    emailLabel.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  email.style.border = '';
  emailLabel.style.color = '';
  email.setCustomValidity('');
  return true;
}

function validarSenha() {
  const senha = document.getElementById('password');
  const senhaLabel = document.getElementById('senhaLabel');

  if (senha.value.length < 6) {
    senha.setCustomValidity('Senha deve ter no mínimo 6 caracteres');
    senhaLabel.style.color = 'red';
    senha.style.border = '1px solid red';
    return false;
  }

  senha.setCustomValidity('');
  senhaLabel.style.color = '';
  senha.style.border = '';
  return true;
}

function validarConfirmarSenha() {
  const senha = document.getElementById('password');
  const confirmar = document.getElementById('confirmarSenha');
  const label = document.getElementById('confirmarSenhaLabel');

  if (senha.value !== confirmar.value) {
    confirmar.setCustomValidity('As senhas não coincidem');
    label.style.color = 'red';
    confirmar.style.border = '1px solid red';
    return false;
  }

  confirmar.setCustomValidity('');
  label.style.color = '';
  confirmar.style.border = '';
  return true;
}

function validarPergunta1() {
  const pergunta = document.getElementById('pergunta1');

  if (!pergunta.value.trim()) {
    pergunta.setCustomValidity('Escolha uma pergunta');
    pergunta.style.border = '1px solid red';
    return false;
  }

  pergunta.setCustomValidity('');
  pergunta.style.border = '';
  return true;
}

function validarResposta1() {
  const resposta = document.getElementById('resposta1');
  const label = document.getElementById('pergunta1Label');

  if (!resposta.value.trim()) {
    resposta.setCustomValidity('Digite a resposta');
    label.style.color = 'red';
    resposta.style.border = '1px solid red';
    return false;
  }

  resposta.setCustomValidity('');
  label.style.color = '';
  resposta.style.border = '';
  return true;
}

function validarPergunta2() {
  const pergunta = document.getElementById('pergunta2');
 

  if (!pergunta.value.trim()) {
    pergunta.setCustomValidity('Escolha uma pergunta');
    pergunta.style.border = '1px solid red';
    return false;
  }

  pergunta.setCustomValidity('');
  pergunta.style.border = '';
  return true;
}

function validarResposta2() {
  const resposta = document.getElementById('resposta2');
  const label = document.getElementById('pergunta2Label');

  if (!resposta.value.trim()) {
    resposta.setCustomValidity('Digite a resposta');
    label.style.color = 'red';
    resposta.style.border = '1px solid red';
    return false;
  }

  resposta.setCustomValidity('');
  label.style.color = '';
  resposta.style.border = '';
  return true;
}



//limpar campos de registro e login
function limparCamposFormularioCadastro() {
  const form = document.querySelector('.register-form');
  form.reset(); // limpa todos os campos automaticamente

  // Também limpa mensagens de erro (se quiser)
  const erros = document.querySelectorAll('.erro');
  erros.forEach((e) => {
    e.textContent = '';
  });

  // Restaura estilos dos labels e inputs
  const labels = form.querySelectorAll('label');
  labels.forEach(label => label.style.color = '');

  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(input => input.style.border = '');
}
function limparCamposFormulariologin() {
  const form = document.getElementById('login-forms-id');
  form.reset();

  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(input => input.style.border = '');
}

function setupLogin() {
  const formLogin = document.getElementById('login-forms-id');

  if (!formLogin) return;

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('input-email-login-id');
    const senhaInput = document.getElementById('input-senha-login-id');

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    // Validação personalizada
    if (email.length === 0 && senha.length === 0) {
      alert("Preencha todos os campos.");
      emailInput.focus();
      return;
    }

    if (email.length === 0) {
      email.setCustomValidity("Por favor, preencha o campo de email.");
      emailInput.focus();
      return;
    }

    if (senha.length === 0) {
      senha.setCustomValidity("Por favor, preencha o campo de senha.");
      senhaInput.focus();
      return;
    }

    // Envia os dados para o servidor
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucesso) {
          alert('Login feito com sucesso!');
          limparCamposFormulariologin();
          window.location.href = '/loginAndRegister/home';
        } else {
          alert('Erro: ' + data.mensagem);
        }
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
      });
  });
}

// Executa a função assim que o DOM carregar
document.addEventListener('DOMContentLoaded', setupLogin);

/*recuperação de senha */

async  function recSenha(){
  
  const pergunta1Rec = document.getElementById('pergunta1-rec').value
  const pergunta2Rec = document.getElementById('pergunta2-rec').value
  const resposta1Rec = document.getElementById('resposta1-rec').value.trim()
  const resposta2Rec = document.getElementById('resposta2-rec').value.trim()
  const emailRec = document.getElementById('email-rec').value

  const resposta = await fetch('/verificar-recuperacao', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailRec, pergunta1Rec, pergunta2Rec, resposta1Rec, resposta2Rec })
  });

  const data = await resposta.json();

  if (data.valido) {
    // Redireciona para página de nova senha
    window.location.href = `/loginAndRegister/recuperacaoSenha/novaSenha?email=${encodeURIComponent(emailRec)}`;
  } else {
    alert('Dados incorretos. Verifique e tente novamente.');
  }

}
function setupRecuperacaoSenhaForm() {
  const formRec = document.getElementById('rec-forms-id');

  if (!formRec) return;

  formRec.addEventListener('submit', (e) => {
    e.preventDefault();
    recSenha();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupRecuperacaoSenhaForm();
});

//nova senha

async function newPassword(){
  const InputnovaSenha = document.getElementById('mudarNomaSenha')
  const InputConfirmarNomaSenha = document.getElementById('mudarConfirmarNomaSenha')

  const novaSenha = InputnovaSenha.value.trim()
  const ConfirmarNomaSenha = InputConfirmarNomaSenha.value.trim()

    // Reset de validade anterior
    
    const params = new URLSearchParams(window.location.search);
    const emailDeRec = params.get('email');
    console.log(`Botão clicado, variaveis ${novaSenha} e ${emailDeRec} ` );
    

  if(novaSenha.length < 6){
    InputnovaSenha.setCustomValidity('Senha deve ter no mínimo 6 caracteres');
    return;
  }
  if( novaSenha !== ConfirmarNomaSenha){
    InputConfirmarNomaSenha.setCustomValidity('senhas não são iquais');
    return;
  }
   try {
    const resposta = await fetch('/novaSenha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ novaSenha, emailDeRec })
    });

    const resultado = await resposta.json();

    if (resultado.sucesso) {
      alert('Senha atualizada com sucesso!');

      window.location.href = '/'; // ou onde quiser redirecionar
      
    } else {
      alert('Erro ao atualizar a senha.');
    }

  } catch (err) {
    console.error(err);
    alert('Erro ao se comunicar com o servidor.');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.getElementById('nova-form-id');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede recarregar a página
      newPassword();
    
    });
  }
});

function toggleBotao(botao, desabilitar = true, textoTemporario = '') {
  if (desabilitar) {
    botao.disabled = true;
    if (textoTemporario) botao.dataset.originalText = botao.innerText;
    if (textoTemporario) botao.innerText = textoTemporario;
  } else {
    botao.disabled = false;
    if (botao.dataset.originalText) botao.innerText = botao.dataset.originalText;
  }
}

/*botão click direcionando para uma nova página */
/*
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
  document.addEventListener('DOMContentLoaded', carregarPaginaCarrinho);
}

*/



