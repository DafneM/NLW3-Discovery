//importando dependencia
//const { response } = require('express');
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciando o express
const server = express()
server

//utilizando body
.use(express.urlencoded({extended: true}))

//utilizando os arquivos estáticos
    .use(express.static('public'))

    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //criando rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligando servidor
server.listen(5500)