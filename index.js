// 1. Imports (sempre no topo)
const app = express()
const port = 3000
const express = require('express')
const {engine} = require('express-handlebars')
const mysql = require('mysql2')
const { dbPassword } = require('./config')

// 2. Configurações do App (engine, view, static)
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// 3. Nosso "banco de dados" de produtos
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: dbPassword,
    database:'car_system'
})

// 4. Rotas (app.get)
app.get('/', (req,res) =>{
    res.render('home')
})

// 5. Iniciar o Servidor (sempre no final)
con.connect(function(err) {
    if (err) {
        console.log(err);
        return; // Retorna para parar a execução
    }

    console.log('Conectou ao MySQL!');

    app.listen(port, () => {
        console.log(`APP rodando na porta ${port}`);
    });
});