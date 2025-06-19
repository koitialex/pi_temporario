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

app.get('/', function (req, res) {
  res.render('loginAndRegister')
})

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
app.post('/loginAndRegister/home', function(req, res){
  const senha = req.body.senha
  const email = req.body.email
  
  const query = `insert into cliente(senha,email)
  values ('${senha}','${email}')`
  
  connection.query(query, function(err){
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  }) 
})

app.get('/loginAndRegister/recuperacaoSenha', function (req, res) {
  res.render('recuperacaoSenha')
})
app.get('/loginAndRegister/recuperacaoSenha/novaSenha', function (req, res) {
  res.render('novaSenha')
})
app.get('/loginAndRegister/home', function (req, res) {
  res.render('home')
})
/*login */
app.post('/', (req, res) => {
  const { email, senha } = req.body; // Recebendo dados do frontend
  
  connection.query('SELECT * FROM CLIENTE WHERE email = ?', [email], (err, results) => {
    if (results.length === 0) {
      return res.json({ sucesso: false, mensagem: 'Usuário não encontrado.' });
    }

    const usuario = results[0];
    if (usuario.senha === senha) {
      return res.json({ sucesso: true }); // Responde ao frontend com sucesso
    } else {
      return res.json({ sucesso: false, mensagem: 'Senha incorreta.' }); // Envia erro
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
