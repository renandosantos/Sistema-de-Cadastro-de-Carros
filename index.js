// 1. Imports (sempre no topo)
const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
const mysql = require('mysql2')
const { dbPassword } = require('./config')

// 2. Configurações do App (engine, view, static)
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

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

app.get('/cars/add', (req, res) =>{
    res.render('addcar')
})

app.get('/cars', (req, res) =>{
    const sql = 'SELECT * FROM cars'

    con.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        res.render('listcars', { cars: data })
    })
    
})

app.get('/cars/edit/:id', (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM cars where id = ?'

    con.query(sql, [id], function(err, data){
        if(err){
            console.log(err)
            return
        }
        const cars = data[0]
        res.render('editcars', { car: cars })
    })
})

app.post('/cars/add', (req, res) => {
    const modelo = req.body.modelo
    const marca = req.body.marca
    const ano = req.body.ano
    const cor = req.body.cor
console.log(req.body)

const sql = 'INSERT  INTO cars(modelo, marca, cor, ano) VALUES(?, ?, ?, ?)'

con.query(sql, [modelo, marca, cor, ano], function(err, result){
    if(err){
        res.redirect('/cars/add')
        return
    }
    res.redirect('/cars/add')
    })
})

app.post('/cars/update', (req, res) => {
    const id = req.body.id
    const modelo = req.body.modelo
    const marca = req.body.marca
    const ano = req.body.ano
    const cor = req.body.cor
console.log(req.body)

const sql = 'UPDATE cars SET modelo = ?, marca = ?, cor = ?, ano = ? WHERE id = ?'

con.query(sql, [modelo, marca, cor, ano, id], function(err, result){
    if(err){
        console.log(err)
        return
    }
    res.redirect('/cars')
    })
})

app.post('/cars/remove/:id', (req, res) => {
    const id = req.params.id
    const sql = 'DELETE FROM cars WHERE id = ?'
    con.query(sql, [id], function(err) { 
        if(err) { 
        console.log(err) 
        return 
        }
        res.redirect('/cars') 
    })
})

// 5. Iniciar o Servidor (sempre no final)
con.connect(function(err) {
    if (err) {
        console.log(err);
        return 
    }

    console.log('Conectou ao MySQL!')

    app.listen(port, () => {
        console.log(`APP rodando na porta ${port}`)
    })
})