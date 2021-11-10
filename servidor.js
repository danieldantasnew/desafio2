const express = require('express')
const nunjucks = require('nunjucks')

const paginas = require('./dados')

const servidor = express()


servidor.use(express.static("publico"))
servidor.set("view engine", "njk")

nunjucks.configure("visualiza", {
    express: servidor,
    autoescape: false,
    noCache: true
})

servidor.get("/", function(req, res){
    const inicio = {      
            id: "PagInicial",
            title: "Rocketseat",
            description: "Uma empresa focada em ensinar programação.",
            title2: "Tecnologias Utilizadas:",
            topic1: "Cloud Computing;",
            topic2: "Eye-Tracking e Voices Commands;",
            topic3: "Realidade Aumentada;",
            topic4: "Redes Sociais;",
        
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://instagram.com"},
            {name: "Facebook", url: "https://facebook.com"}
        ]
    }
    return res.render("inicio", {inicio: inicio})
})


servidor.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: paginas})
})

servidor.get("/paginas/:id", function(req, res) {
    const id = req.params.id
    
    const pagina = paginas.find(function(pagina){
        return pagina.id == id
    })

    if(!pagina){
        return res.render("not-found")
    }

    return res.render("paginas", {item: pagina})
})

servidor.use(function(req, res) {
    res.status(404).render("not-found")
})

servidor.listen(5000, function(){
    console.log("Servidor está rodando")
})

