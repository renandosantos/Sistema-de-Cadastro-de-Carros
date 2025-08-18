// 1. Imports (sempre no topo)
const express = require('express')
const {engine} = require('express-handlebars')
const mysql = require('mysql2')
const app = express()
const port = 3000
// 2. Configurações do App (engine, view, static)
// 3. Nosso "banco de dados" de produtos
// 4. Rotas (app.get)
// 5. Iniciar o Servidor (sempre no final)
app.listen(3000, ()=>{
    console.log(`O app está funcionando na porta ${port}`)
})