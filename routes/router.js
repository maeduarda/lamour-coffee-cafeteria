const { response } = require("express")
//express
var express = require('express');
const app = express(); 
var router = express.Router();


//Marko
var markoExpress = require('marko/express');
app.use(markoExpress()); 
 
//Cafe DAO
const cafeDao = require("../dao/cafeDao.js");
const dao = new cafeDao()

//sessão
const session = require('express-session'); 

//Flash
const flash = require('connect-flash'); 
app.use(flash());
app.use(session({ 
    secret:'geeksforgeeks', 
    saveUninitialized: true, 
    resave: true
})); 

//Bcrypt
const bcrypt = require("bcryptjs")
  

//rota da home
router.get('/', function (req,res){
    let response = {
        error_message: req.flash('error'),
        success_message: req.flash('success'), 
    } 
    res.marko(require('../templates/html/home.marko'))
}); 

//rota da pagina sobre nós
router.get('/aboutUs', function (req,res){
    res.marko(require('../templates/html/aboutUs.marko'))
}); 

//rota que faz a "compra"
router.get('/comprar/:id', function (req,res) {
    let response = {
        results: []
    }
    const id = req.params.id
    dao.update(req.params.id).then((result) => {

        req.flash("success",'compra do produto realizada com sucesso')
        res.redirect('/products')

         }).catch((err) => {

        console.log(err)
        req.flash('error', 'ocorreu durante a compra') 
        res.redirect("/products")
})
})

//rota da pagina de produtos
router.get('/products', function (req,res){
    let response = {
        error_message: req.flash('error'),
        success_message: req.flash('success'), 
        results:[]
    } 
    dao.list().then((results)=>{
        response.results = results;
        res.marko(require('../templates/html/products.marko'), response)
    }).catch((err)=>{ 
        response.error_message.push('listagem indisponivel')
        console.log("Ocorreu um erro");
        console.log(err)
    }) 
})

//rota da pagina de contatos
router.get("/contacts", function(req, res){
    res.marko(require("../templates/html/contacts.marko"))
})  

//rota da pagina de login
router.get("/login", function(req, res){
    let response = {
        error_message: req.flash('error'),
        success_message: req.flash('success'), 
        results:[]
    } 
    res.marko(require("../templates/html/login.marko"), response)
}) 

//rota da pagina de cadastro
router.get("/singin", function(req, res){
    res.marko(require("../templates/html/cadastro.marko"))
})

//rota que realmente faz o cadastro
router.post("/singIn", async (req, res) => {
    var response = {
        error_message: req.flash('error'),
        success_message: req.flash('success'),  
    } 
    if(req.body.id){
        let email = req.body.email 
        let senha = req.body.password 
        let nome = req.body.nome
        let id = req.body.id
        let password = await bcrypt.hash(senha, 8)
        let ogin = {
             email, password, nome, id
        }
        dao.updateUsers(ogin)
        req.flash("success",'usuário editado com sucesso') 
        res.redirect("/users")
    }else{
    dao.CheckEmail(req.body.email).then( async (results)=>{
        if(results.length > 0){
            response.error_message.push('o email inserido já existe, tente usar outro')
            res.marko(require("../templates/html/cadastro.marko"), response)
        } else {
            let email = req.body.email 
            let senha = req.body.password 
            let nome = req.body.nome 
            let password = await bcrypt.hash(senha, 8)
            req.flash("success",'usuário salvo com sucesso') 
            res.redirect("/login")
            let ogin = {
                nome, email, password
            }
            console.log(ogin.password)
            dao.save(ogin) 
        }
    }).catch((err)=>{
        console.log(err)
    })}
    
});

//rota que realmente faz o login
router.post("/logIn", (req, res) => {
    dao.CheckUser(req.body).then(async (results)=>{
        let response = {
            error_message: req.flash('error'),
            success_message: req.flash('success'), 
            results: []
        } 
        response.results = results
        
        console.log(response.results.password)
        
        if(req.body.email == "admin@gmail.com" && req.body.password == "admin"){
             res.redirect("/users")
        }
        if(req.body.email == "fornecedor@gmail.com" && req.body.password == "fornecedor"){
            res.redirect("/fornecedores")
       }
        if(results.length == 0) { 
            response.error_message.push('usuário inexistente ou incorreto, tente novamente')
            res.marko(require("../templates/html/login.marko"), response)
        }
        const match = await bcrypt.compare(req.body.password, response.results[0].password)
        if(results.length > 0 && match){
            req.flash("success",'usuário logado com sucesso')
            res.redirect("/products")
        }else { 
            response.error_message.push('senha incorreta, tente novamente')
            res.marko(require("../templates/html/login.marko"), response)
        }	
    }).catch((err)=>{
        console.log(err)
    }) 
});
router.get("/users", (req,res) => {
    dao.listUsers().then((results) =>{
        let response = {
            error_message: req.flash('error'),
            success_message: req.flash('success'), 
            results: []
        } 
        response.results = results
    res.marko(require("../templates/html/usuarios.marko"), response)
    }).catch((err)=>{
        console.log(err)
    })
})
router.get("/users/delete/:id", (req, res)=>{
    dao.delete(req.params.id).then( (results)=>{
        req.flash("success",'usuário deletado com sucesso')
        res.redirect("/users")
    }).catch((err)=>{
        console.log(err)
    })
})
router.get("/singIn/:id", (req, res) =>{
    dao.findById(req.params.id).then((result) => {
        if(result.length > 0){
            users = result[0];
            res.marko(require('../templates/html/cadastro.marko'), users);
        }
})
})
router.get("/fornecedores", (req,res) => {
    dao.list().then((results) =>{
        let response = {
            error_message: req.flash('error'),
            success_message: req.flash('success'), 
            results: []
        } 
        response.results = results
    res.marko(require("../templates/html/fornecedores.marko"), response)
    }).catch((err)=>{
        console.log(err)
    })
})
router.get("/remersas", (req, res)=>{
    res.marko(require("../templates/html/remersas.marko"))
})
router.post("/remersas", (req, res)=>{
    if(req.body.id){
        dao.updateEstoque(req.body)
        req.flash("success",'produto modificado com sucesso')
        res.redirect("/fornecedores")}else{
    let cafe = req.body.cafe 
    let quantidade = parseInt(req.body.quantidade)
    let remersa = {
        cafe, quantidade
    }
    dao.saveEstoque(remersa)
    req.flash("success",'produto adicionado ao estoque com sucesso')
    res.redirect("/fornecedores")}
})
router.get("/fornecedores/delete/:id", (req, res)=>{
    dao.deleteProdutos(req.params.id).then( (results)=>{
        req.flash("success",'produto deletado com sucesso')
        res.redirect("/fornecedores")
    }).catch((err)=>{
        console.log(err)
    })
})
router.get("/remersas/:id", (req, res) =>{
    dao.listById(req.params.id).then((result) => {
        if(result.length > 0){
            produtos = result[0];
            res.marko(require('../templates/html/remersas.marko'), produtos);
        }
})
})
//exports
module.exports = router
