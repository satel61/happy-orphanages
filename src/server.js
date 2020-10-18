//importar dependencia

const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciando o express
const server = express()
server
    //utlizar body da requisicao
    .use(express.urlencoded( {extended : true }))
    // utilizando os arquivos estaticos
    .use(express.static('public'))

    //configure template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //criar rotas da aplicacao
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


// ligar o servidor
server.listen(5500)