// ====================================================================================================
// FUNÇÕES DE VALIDAÇÃO E LIMPEZA (globais, acessíveis de qualquer lugar)
// ====================================================================================================

function validarNome() {
    const usuario = document.getElementById('nome');
    const userLabel = document.getElementById('nomeLabel');

    if (!usuario || !userLabel) { // Verifica se os elementos existem
        console.warn('Elementos "nome" ou "nomeLabel" não encontrados para validação de nome.');
        return false;
    }

    usuario.setCustomValidity('');
    usuario.classList.remove('erro');
    userLabel.classList.remove('erro');
    usuario.style.outline = '';

    const nome = usuario.value.trim();

    if (nome.length === 0) {
        usuario.setCustomValidity('Preencha o campo');
    } else if (nome.length < 3) {
        usuario.setCustomValidity('No mínimo 3 caracteres');
    }

    const valido = usuario.checkValidity();
    if (!valido) {
        usuario.reportValidity();
        usuario.classList.add('erro');
        userLabel.classList.add('erro');
        usuario.style.outline = '2px solid red';
        return false;
    }
    return true;
}

function validarEmail() {
    const email = document.getElementById('email');
    const emailLabel = document.getElementById('emailLabel');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailLabel) { // Verifica se os elementos existem
        console.warn('Elementos "email" ou "emailLabel" não encontrados para validação de email.');
        return false;
    }

    email.setCustomValidity('');
    email.classList.remove('erro');
    emailLabel.classList.remove('erro');
    email.style.outline = '';

    if (!regex.test(email.value)) {
        email.setCustomValidity('Email inválido');
    }

    const valido = email.checkValidity();
    if (!valido) {
        email.reportValidity();
        email.classList.add('erro');
        emailLabel.classList.add('erro');
        email.style.outline = '2px solid red';
        return false;
    }
    return true;
}

function validarSenha() {
    const senha = document.getElementById('password');
    const senhaLabel = document.getElementById('senhaLabel');

    if (!senha || !senhaLabel) { // Verifica se os elementos existem
        console.warn('Elementos "password" ou "senhaLabel" não encontrados para validação de senha.');
        return false;
    }

    senha.setCustomValidity('');
    senha.classList.remove('erro');
    senhaLabel.classList.remove('erro');
    senha.style.outline = '';

    if (senha.value.length < 6) {
        senha.setCustomValidity('Senha deve ter no mínimo 6 caracteres');
    }

    const valido = senha.checkValidity();
    if (!valido) {
        senha.reportValidity();
        senha.classList.add('erro');
        senhaLabel.classList.add('erro');
        senha.style.outline = '2px solid red';
        return false;
    }
    return true;
}

function validarConfirmarSenha() {
    const senha = document.getElementById('password');
    const confirmar = document.getElementById('confirmarSenha');
    const label = document.getElementById('confirmarSenhaLabel');

    if (!senha || !confirmar || !label) { // Verifica se os elementos existem
        console.warn('Elementos de senha ou confirmação de senha não encontrados.');
        return false;
    }

    confirmar.setCustomValidity('');
    confirmar.classList.remove('erro');
    label.classList.remove('erro');
    confirmar.style.outline = '';

    if (senha.value !== confirmar.value) {
        confirmar.setCustomValidity('As senhas não coincidem');
    }

    const valido = confirmar.checkValidity();
    if (!valido) {
        confirmar.reportValidity();
        confirmar.classList.add('erro');
        label.classList.add('erro');
        confirmar.style.outline = '2px solid red';
        return false;
    }
    return true;
}

function validarPergunta1() {
    const pergunta = document.getElementById('pergunta1');
    const label = document.getElementById('pergunta1Label');

    if (!pergunta || !label) { // Verifica se os elementos existem
        console.warn('Elementos "pergunta1" ou "pergunta1Label" não encontrados.');
        return false;
    }

    pergunta.setCustomValidity('');
    pergunta.style.outline = '';

    if (!pergunta.value.trim()) {
        pergunta.setCustomValidity('Escolha uma pergunta');
        pergunta.reportValidity();
        pergunta.style.outline = '1px solid red';
        label.style.color = 'red';
        return false;
    }
    label.style.color = '';
    pergunta.style.outline = '';
    return true;
}

function validarResposta1() {
    const resposta = document.getElementById('resposta1');
    const label = document.getElementById('pergunta1Label');
    const pergunta1 = document.getElementById('pergunta1'); // Necessário para verificar validade da pergunta

    if (!resposta || !label || !pergunta1) { // Verifica se os elementos existem
        console.warn('Elementos "resposta1", "pergunta1Label" ou "pergunta1" não encontrados.');
        return false;
    }

    resposta.setCustomValidity('');
    resposta.style.outline = '';

    if (!resposta.value.trim()) {
        resposta.setCustomValidity('Digite a resposta');
        resposta.reportValidity();
        resposta.style.outline = '1px solid red';
        label.style.color = 'red';
        return false;
    }

    // Só limpa a label se a pergunta também for válida
    if (pergunta1.checkValidity()) {
        label.style.color = '';
    }
    resposta.style.outline = '';
    return true;
}

function validarPergunta2() {
    const pergunta = document.getElementById('pergunta2');
    const label = document.getElementById('pergunta2Label');

    if (!pergunta || !label) { // Verifica se os elementos existem
        console.warn('Elementos "pergunta2" ou "pergunta2Label" não encontrados.');
        return false;
    }

    pergunta.setCustomValidity('');
    pergunta.style.outline = '';

    if (!pergunta.value.trim()) {
        pergunta.setCustomValidity('Escolha uma pergunta');
        pergunta.reportValidity();
        pergunta.style.outline = '1px solid red';
        label.style.color = 'red';
        return false;
    }
    label.style.color = '';
    pergunta.style.outline = '';
    return true;
}

function validarResposta2() {
    const resposta = document.getElementById('resposta2');
    const label = document.getElementById('pergunta2Label');
    const pergunta2 = document.getElementById('pergunta2'); // Necessário para verificar validade da pergunta

    if (!resposta || !label || !pergunta2) { // Verifica se os elementos existem
        console.warn('Elementos "resposta2", "pergunta2Label" ou "pergunta2" não encontrados.');
        return false;
    }

    resposta.setCustomValidity('');
    resposta.style.outline = '';

    if (!resposta.value.trim()) {
        resposta.setCustomValidity('Digite a resposta');
        resposta.reportValidity();
        resposta.style.outline = '1px solid red';
        label.style.color = 'red';
        return false;
    }
    if (pergunta2.checkValidity()) {
        label.style.color = '';
    }
    resposta.style.outline = '';
    return true;
}

function setupDependentQuestions() {
    const select1 = document.getElementById('pergunta1');
    const select2 = document.getElementById('pergunta2');

    if (!select1 || !select2) return;

    // Armazena todas as opções originais para referência.
    const originalOptions = Array.from(select1.options).map(opt => ({ value: opt.value, text: opt.text }));

    function updateBothSelects() {
        const val1 = select1.value;
        const val2 = select2.value;

        // Atualiza as opções do select 2
        select2.innerHTML = ''; // Limpa as opções atuais
        originalOptions.forEach(opt => {
            // Adiciona a opção se:
            // 1. Não for a selecionada no select 1
            // 2. Ou for a opção que já estava selecionada no próprio select 2 (para não se auto-apagar)
            // 3. Ou for a opção vazia de placeholder (ex: "Escolha...")
            if (opt.value !== val1 || opt.value === val2 || opt.value === '') {
                select2.add(new Option(opt.text, opt.value));
            }
        });
        select2.value = val2; // Restaura a seleção do select 2

        // Atualiza as opções do select 1
        select1.innerHTML = ''; // Limpa as opções atuais
        originalOptions.forEach(opt => {
            // Adiciona a opção se não for a selecionada no select 2, etc.
            if (opt.value !== val2 || opt.value === val1 || opt.value === '') {
                select1.add(new Option(opt.text, opt.value));
            }
        });
        select1.value = val1; // Restaura a seleção do select 1
    }

    // Adiciona os listeners para disparar a atualização em qualquer mudança
    select1.addEventListener('change', updateBothSelects);
    select2.addEventListener('change', updateBothSelects);
}


function validarEmailLogin(emailInput) {
    const labelEmail = document.getElementById('lblEmail');
    if (!emailInput || !labelEmail) {
        console.warn('Elementos de email de login não encontrados.');
        return false;
    }

    const email = emailInput.value.trim();
    emailInput.setCustomValidity('');

    if (email.length === 0) {
        emailInput.setCustomValidity("Por favor, preencha o campo de email.");
        emailInput.reportValidity();
        emailInput.style.outline = '2px solid red';
        labelEmail.style.color = 'red';
        return false;
    }
    emailInput.style.outline = '';
    labelEmail.style.color = '';
    return true;
}

function validarSenhaLogin(senhaInput) {
    const labelSenha = document.getElementById('lblSenha');
    if (!senhaInput || !labelSenha) {
        console.warn('Elementos de senha de login não encontrados.');
        return false;
    }

    const senha = senhaInput.value.trim();
    senhaInput.setCustomValidity('');

    if (senha.length === 0) {
        senhaInput.setCustomValidity("Por favor, preencha o campo de senha.");
        senhaInput.reportValidity();
        senhaInput.style.outline = '2px solid red';
        labelSenha.style.color = 'red';
        return false;
    }
    senhaInput.style.outline = '';
    labelSenha.style.color = '';
    return true;
}

function limparCamposFormularioCadastro() {
    const form = document.querySelector('.register-form');
    if (!form) return;

    form.reset();

    const erros = form.querySelectorAll('.erro');
    erros.forEach((e) => {
        if (e.textContent) e.textContent = '';
    });

    const labels = form.querySelectorAll('label');
    labels.forEach(label => label.style.color = '');

    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.border = '';
        input.style.outline = '';
        input.classList.remove('erro');
    });
}

function limparCamposFormulariologin() {
    const form = document.getElementById('login-forms-id');
    if (!form) return;

    form.reset();
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.border = '';
        input.style.outline = '';
    });

    const lblEmail = document.getElementById('lblEmail');
    const lblSenha = document.getElementById('lblSenha');
    if (lblEmail) lblEmail.style.color = '';
    if (lblSenha) lblSenha.style.color = '';
}

function invalidarBtn(botao, desabilitar = true, textoTemporario = '') {
    if (!botao) {
        console.warn('Botão não encontrado para invalidarBtn.');
        return;
    }

    if (desabilitar) {
        botao.disabled = true;
        if (textoTemporario) {
            botao.dataset.textoOriginal = botao.innerText;
            botao.innerText = textoTemporario;
        }
    } else {
        botao.disabled = false;
        if (botao.dataset.textoOriginal) {
            botao.innerText = botao.dataset.textoOriginal;
            delete botao.dataset.textoOriginal;
        }
    }
}

// ====================================================================================================
// FUNÇÕES DE SETUP (chamadas apenas uma vez no DOMContentLoaded principal)
// ====================================================================================================

function setupLoginAndRegisterButtons() {
    const loginRegister = document.getElementById('loginRegister');
    const btnRegisters = document.querySelectorAll('.btn-register');
    const btnLogins = document.querySelectorAll('.btn-login');

    if (loginRegister && btnRegisters.length > 0 && btnLogins.length > 0) {
        btnRegisters.forEach(btn => {
            btn.addEventListener('click', () => {
                loginRegister.classList.add('active');
            });
        });
        btnLogins.forEach(btn => {
            btn.addEventListener('click', () => {
                loginRegister.classList.remove('active');
            });
        });
    } else {
        // console.log('Botões de registro/login ou container "loginRegister" não encontrados. Ignorando setup.');
    }
}

function setupRegisterForm() {
    const form = document.querySelector('.register-form');
    if (form) { // Verifica se o formulário de registro existe nesta página
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nomeValido = validarNome();
            const emailValido = validarEmail();
            const senhaValida = validarSenha();
            const confirmarSenhaValida = validarConfirmarSenha();
            const pergunta1Valida = validarPergunta1();
            const resposta1Valida = validarResposta1();
            const pergunta2Valida = validarPergunta2();
            const resposta2Valida = validarResposta2();

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
                const dados = {
                    nome: document.getElementById('nome')?.value.trim() || '', // Usando optional chaining e fallback
                    email: document.getElementById('email')?.value.trim() || '',
                    senha: document.getElementById('password')?.value || '',
                    pergunta1: document.getElementById('pergunta1')?.value || '',
                    resposta1: document.getElementById('resposta1')?.value.trim() || '',
                    pergunta2: document.getElementById('pergunta2')?.value || '',
                    resposta2: document.getElementById('resposta2')?.value.trim() || ''
                };

                fetch('/cadastro', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                })
                    .then(res => res.json())
                    .then(resultado => {
                        if (resultado.sucesso) {
                            alert('Cadastro realizado com sucesso!');
                            limparCamposFormularioCadastro();
                            window.location.href = '/'; // ou página de login
                        } else {
                            alert(resultado.mensagem);
                        }
                    })
                    .catch(() => {
                        alert('Erro ao se comunicar com o servidor.');
                    });
            }
        });
    } else {
        // console.log('Formulário de registro ".register-form" não encontrado. Ignorando setup.');
    }
}

function gerenciarVisibilidadeNavBar() {
    // Assumindo que os links a serem gerenciados estão dentro de um elemento <nav>
    // e que o link de login/logout tem uma classe específica para ser ignorado.
    const navLinks = document.querySelectorAll('nav a:not(.login-link)'); // Ajuste o seletor se necessário
    const path = window.location.pathname;

    // Páginas onde os links devem estar escondidos
    const paginasPublicas = ['/', '/login.html', '/register.html', '/index.html']; // Adicione as URLs exatas

    const estaEmPaginaPublica = paginasPublicas.some(p => path.endsWith(p));

    navLinks.forEach(link => {
        if (estaEmPaginaPublica) {
            link.style.display = 'none'; // Esconde os links
        } else {
            link.style.display = ''; // Mostra os links (restaura o padrão)
        }
    });
}


function setupLoginForms() {
    const formLogin = document.getElementById('login-forms-id');
    const btnLogin = document.getElementById('button-reset-login');

    if (formLogin) { // Verifica se o formulário de login existe nesta página
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('input-email-login-id');
            const senhaInput = document.getElementById('input-senha-login-id');

            // Validações básicas antes de desabilitar o botão
            // Se os inputs não existirem, as funções de validação devem retornar false
            const emailValido = validarEmailLogin(emailInput);
            const senhaValida = validarSenhaLogin(senhaInput);

            if (!emailValido || !senhaValida) {
                // Se a validação do formulário falhar no cliente, não faz a requisição
                return;
            }

            // Desabilita o botão APENAS SE A VALIDAÇÃO CLIENTE PASSAR
            if (btnLogin) {
                invalidarBtn(btnLogin, true, 'Aguarde...');
            }

            fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: emailInput?.value.trim() || '',
                    senha: senhaInput?.value.trim() || ''
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.sucesso) {
                        alert('Login feito com sucesso!');
                        limparCamposFormulariologin();
                        window.location.href = '/loginAndRegister/home';
                    } else {
                        alert('Erro: ' + data.mensagem);

                        // Limpa antes de aplicar novas outlines/cores
                        if (emailInput) {
                            emailInput.style.outline = '';
                            emailInput.classList.remove('erro');
                        }
                        if (senhaInput) {
                            senhaInput.style.outline = '';
                            senhaInput.classList.remove('erro');
                        }
                        const lblEmail = document.getElementById('lblEmail');
                        const lblSenha = document.getElementById('lblSenha');
                        if (lblEmail) {
                            lblEmail.style.color = '';
                            lblEmail.classList.remove('erro');
                        }
                        if (lblSenha) {
                            lblSenha.style.color = '';
                            lblSenha.classList.remove('erro');
                        }

                        if (data.mensagem.includes('Usuário')) {
                            if (emailInput) {
                                emailInput.style.outline = '2px solid red';
                                emailInput.classList.add('erro');
                            }
                            if (lblEmail) {
                                lblEmail.style.color = 'red';
                                lblEmail.classList.add('erro');
                            }
                        } else if (data.mensagem.includes('Senha')) {
                            if (senhaInput) {
                                senhaInput.style.outline = '2px solid red';
                                senhaInput.classList.add('erro');
                            }
                            if (lblSenha) {
                                lblSenha.style.color = 'red';
                                lblSenha.classList.add('erro');
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.error('Erro na requisição de login:', error);
                    alert('Erro ao se comunicar com o servidor.');
                })
                .finally(() => {
                    // Sempre reabilite o botão, independentemente do sucesso ou falha da requisição
                    if (btnLogin) {
                        invalidarBtn(btnLogin, false);
                    }
                });
        });
    } else {
        // console.log('Formulário de login "login-forms-id" não encontrado. Ignorando setup.');
    }
}

function setupRecuperacaoSenhaForm() {
    const formRec = document.getElementById('rec-forms-id');
    if (formRec) { // Verifica se o formulário de recuperação existe nesta página
        formRec.addEventListener('submit', (e) => {
            e.preventDefault();
            recSenha(); // Chame a função assíncrona
        });
    } else {
        // console.log('Formulário de recuperação de senha "rec-forms-id" não encontrado. Ignorando setup.');
    }
}
async function recSenha() {
    const pergunta1RecEl = document.getElementById('pergunta1-rec');
    const pergunta2RecEl = document.getElementById('pergunta2-rec');
    const resposta1RecEl = document.getElementById('resposta1-rec');
    const resposta2RecEl = document.getElementById('resposta2-rec');
    const emailRecEl = document.getElementById('email-rec');

    if (!pergunta1RecEl || !pergunta2RecEl || !resposta1RecEl || !resposta2RecEl || !emailRecEl) {
        console.error("Elementos de recuperação de senha não encontrados.");
        alert("Erro: Formulário de recuperação incompleto. Atualize a página.");
        return;
    }

    const pergunta1Rec = pergunta1RecEl.value;
    const pergunta2Rec = pergunta2RecEl.value;
    const resposta1Rec = resposta1RecEl.value.trim();
    const resposta2Rec = resposta2RecEl.value.trim();
    const emailRec = emailRecEl.value.trim();

    try {
        const resposta = await fetch('/verificar-recuperacao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailRec, pergunta1Rec, pergunta2Rec, resposta1Rec, resposta2Rec })
        });

        const data = await resposta.json();

        if (data.valido) {
            // Redireciona para a página de nova senha APÓS a validação bem-sucedida
            window.location.href = `/loginAndRegister/recuperacaoSenha/novaSenha?email=${encodeURIComponent(emailRec)}`;
        } else {
            alert('Dados incorretos. Verifique e tente novamente.');
        }
    } catch (err) {
        console.error('Erro na recuperação de senha:', err);
        alert('Erro ao se comunicar com o servidor para recuperação de senha.');
    }
}

async function newPassword() {
    const InputnovaSenha = document.getElementById('mudarNomaSenha');
    const InputConfirmarNomaSenha = document.getElementById('mudarConfirmarNomaSenha');

    if (!InputnovaSenha || !InputConfirmarNomaSenha) {
        console.error("Campos de nova senha (mudarNomaSenha ou mudarConfirmarNomaSenha) não encontrados.");
        alert("Erro: Campos de senha não disponíveis. Atualize a página.");
        return;
    }

    const novaSenha = InputnovaSenha.value.trim();
    const ConfirmarNomaSenha = InputConfirmarNomaSenha.value.trim();

    InputnovaSenha.setCustomValidity('');
    InputConfirmarNomaSenha.setCustomValidity('');

    if (novaSenha.length < 6) {
        InputnovaSenha.setCustomValidity('Senha deve ter no mínimo 6 caracteres');
        InputnovaSenha.reportValidity();
        return;
    }
    if (novaSenha !== ConfirmarNomaSenha) {
        InputConfirmarNomaSenha.setCustomValidity('As senhas não coincidem');
        InputConfirmarNomaSenha.reportValidity();
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const emailDeRec = params.get('email');

    if (!emailDeRec) {
        alert('Erro: E-mail de recuperação não encontrado na URL.');
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
            alert('Erro ao atualizar a senha: ' + resultado.mensagem);
        }

    } catch (err) {
        console.error('Erro ao atualizar a senha:', err);
        alert('Erro ao se comunicar com o servidor.');
    }
}

function setupNewPasswordForm() {
    const form = document.getElementById('nova-form-id');
    if (form) { // Verifica se o formulário de nova senha existe nesta página
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            newPassword();
        });
    } else {
        // console.log('Formulário de nova senha "nova-form-id" não encontrado. Ignorando setup.');
    }
}


// ====================================================================================================
// ÚNICO DOMContentLoaded para inicializar tudo
// ====================================================================================================
document.addEventListener('DOMContentLoaded', () => {
    gerenciarVisibilidadeNavBar()
    setupDependentQuestions()
    // 1. Setup dos botões de Login/Registro
    setupLoginAndRegisterButtons();

    // 2. Setup do Formulário de Registro
    setupRegisterForm();

    // 3. Setup do Formulário de Login
    setupLoginForms();

    // 4. Setup do Formulário de Recuperação de Senha
    setupRecuperacaoSenhaForm();

    // 5. Setup do Formulário de Nova Senha
    setupNewPasswordForm();

    // 6. Setup dos listeners de input para resetar o feedback visual da validação no client-side
    // Isso garante que quando o usuário começa a digitar em um campo que estava com erro,
    // as mensagens e estilos de erro sejam removidos.
    const elementsToResetValidation = [
        { id: 'nome', labelId: 'nomeLabel' },
        { id: 'email', labelId: 'emailLabel' },
        { id: 'password', labelId: 'senhaLabel' },
        { id: 'confirmarSenha', labelId: 'confirmarSenhaLabel' },
        { id: 'pergunta1', labelId: 'pergunta1Label' },
        { id: 'resposta1', labelId: 'pergunta1Label' },
        { id: 'pergunta2', labelId: 'pergunta2Label' },
        { id: 'resposta2', labelId: 'pergunta2Label' },
        { id: 'input-email-login-id', labelId: 'lblEmail' },
        { id: 'input-senha-login-id', labelId: 'lblSenha' }
    ];

    elementsToResetValidation.forEach(item => {
        const input = document.getElementById(item.id);
        const label = item.labelId ? document.getElementById(item.labelId) : null;

        if (input) { // Verifica se o input existe na página
            input.addEventListener('input', () => {
                input.setCustomValidity('');
                input.style.border = '';
                input.style.outline = '';
                input.classList.remove('erro');
                if (label) {
                    label.style.color = '';
                    label.classList.remove('erro');
                }
            });
        }
    });

    // Você tinha uma função "toggleBotao" que era redundante com "invalidarBtn", removida.
    // A função "carregarPaginaCarrinho" estava comentada e não era chamada, então a removi daqui.
    // Se precisar dela, pode reintroduzi-la com a mesma lógica de verificação de existência.
});