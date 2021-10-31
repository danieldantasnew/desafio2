const express = require('express')
const nunjucks = require('nunjucks')

const servidor = express()

servidor.use(express.static("publico"))
servidor.set("view engine", "njk")

nunjucks.configure("visualiza", {
    express: servidor
})

servidor.get("/", function(req, res){
    return res.render("inicio")
})


servidor.get("/portfolio", function(req, res){
    return res.render("portfolio")
})


servidor.listen(5000, function(){
    console.log("Servidor está rodando")
})

