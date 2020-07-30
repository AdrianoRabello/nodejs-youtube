
const express = require("express")
const app = express();
const handlebars = require('express-handlebars');
// framework que permite receber os dados do formulario
const bodyParser = require('body-parser');

const Post = require('./models/Post');

// conexão com DB
const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_youtube','root','root',{
  host:"localhost",
  dialect:'mysql'
});




app.engine('handlebars',handlebars({defaultlayout:'main'}));
app.set('view engine','handlebars');
// para  permitir receber os dados submetidos no formulário
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get('/cad',function(req,res){

  res.render('formulario');
})

app.post('/add',function(req,res){

  Post.create({
    titulo:req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){

    res.redirect('/')
    //res.send("Post criado com sucesso")
  }).catch(function(){
    console.log("erro ao criar o post");
  })
  //res.send(req.body.titulo);
})


app.get('/',function(req, res){

  Post.all().then(function(posts){

    res.render('home',{posts:'asdasd'})
  })

})

app.get('/deletar/:id',function(req,res){
  Post.destroy({where:{id: req.params.id}}).then(function(){
    console.log("deletedo com sucesso");
    res.send('deletado')
  }).catch(function(error){
    console.log("error ao deletar ");
  })
})




app.listen(8081,function(){

 
})



//Postagem.sync({force:true})