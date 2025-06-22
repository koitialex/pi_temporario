/*configuraçoes padrão do node.js */
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))
/*página inicial que será carregada quando for entrar no enderenço localhost:3000 */
app.get('/', function (req, res) {
  res.render('loginAndRegister')
})
/*configurando os dados para serem requisitados e enviar para o banco de dados . também leva pro caminho seguinte após coletar estes dados*/
app.post('/loginAndRegister/insert', function(req, res){
  const nome = req.body.nome
  const senha = req.body.senha
  const email = req.body.email
  const pergunta1 = req.body.pergunta1 
  const pergunta2 = req.body.pergunta2 
  const resposta1 = req.body.resposta1 
  const resposta2 = req.body.resposta2 
   
  const query = `insert into cliente(nome,senha,email,pergunta1,pergunta2,resposta1,resposta2)
  values ('${nome}','${senha}','${email}','${pergunta1}','${pergunta2}','${resposta1}','${resposta2}')`
  
  connection.query(query, function(err){
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  }) 
})

/*caminho para a recuperação de senha*/
app.get('/loginAndRegister/recuperacaoSenha', function (req, res) {
  res.render('recuperacaoSenha')
})
/*caminho para a nova senha*/
app.get('/loginAndRegister/recuperacaoSenha/novaSenha', function (req, res) {
  res.render('novaSenha')
})
app.get('/loginAndRegister/home', function (req, res) {
  res.render('home')
})

/*cadastro*/

app.post('/cadastroEmail', (req, res) => {
  const { nome, email, senha } = req.body;

  // Verificar se o e-mail já existe
  const verificarEmail = 'SELECT * FROM CLIENTE WHERE email = ?';
  connection.query(verificarEmail, [email], (err, resultados) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ sucesso: false, mensagem: 'Erro no servidor' });
    }

    if (resultados.length > 0) {
      // Email já está cadastrado
      return res.json({ sucesso: false, mensagem: 'E-mail já cadastrado' });
    }

    // Se não existir, inserir novo usuário
    const inserir = 'INSERT INTO CLIENTE (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(inserir, [nome, email, senha], (err, resultado) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ sucesso: false, mensagem: 'Erro ao cadastrar' });
      }

      res.json({ sucesso: true, mensagem: 'Cadastro realizado com sucesso' });
    });
  });
});

/*login */
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  connection.query('SELECT * FROM CLIENTE WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.json({ sucesso: false, mensagem: 'Erro interno no servidor' });
    }

    if (results.length === 0) {
      return res.json({ sucesso: false, mensagem: 'Usuário não encontrado.' });
    }
   

    const usuario = results[0];
    if (usuario.senha === senha) {
      return res.json({ sucesso: true });
    } else {
      return res.json({ sucesso: false, mensagem: 'Senha incorreta.' });
    }
  });
});
//recuperação de senha
app.post('/verificar-recuperacao', (req, res) => {
  const {emailRec, pergunta1Rec, pergunta2Rec, resposta1Rec, resposta2Rec  } = req.body;

  connection.query('SELECT * FROM CLIENTE WHERE email = ? AND pergunta1 = ? AND pergunta2 = ? AND resposta1 = ? AND resposta2 = ? ', 
    [emailRec,pergunta1Rec,pergunta2Rec,resposta1Rec,resposta2Rec], (err, results) => {
    if (err) {
      console.error(err);
      return res.json({ sucesso: false, mensagem: 'Erro interno no servidor' });
      
    }

    if (results.length > 0) {
      res.json({ valido: true });
    } else {
      res.json({ valido: false });
    }
  });
});

//mudar para nova senha
app.post('/novaSenha', (req, res) => {
  const { novaSenha, emailDeRec } = req.body;

  connection.query('update CLIENTE SET senha = ? WHERE email = ? ', 
    [novaSenha, emailDeRec ], (err, results) => {
    if (err) {
      console.error(err);
      return res.json({ sucesso: false, mensagem: 'Erro interno no servidor' });
    }

    if (results.affectedRows > 0) {
      res.json({ sucesso: true, mensagem: 'Senha atualizada com sucesso' });
    } else {
      res.json({ sucesso: false, mensagem: 'Nenhum usuário encontrado com esse email' });
    }
  });
});

/*conecção com o banco de dados */

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database: 'MantoDeCampeoes'
})

connection.connect(function (err) {
  if(err){
    console.log(err)
  } else{
    console.log('Conectado ao MySQL!')
    //deixar no final do código
    app.listen(3000);
  }
})
