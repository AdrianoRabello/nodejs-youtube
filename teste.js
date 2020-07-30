
const Sequelize = require('sequelize');



const sequelize = new Sequelize('node_youtube','root','root',{
  host:"localhost",
  dialect:'mysql'
});


sequelize.authenticate().then(function(){
  console.log("autenticação realizada ");
}).catch(function(error){
  console.log("falahar ao coneccctar ");
});


const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo:{
    type:Sequelize.TEXT
  }
})

Postagem.create({
  titulo: "Titulo",
  conteudo:"Conteudo"
})


//Postagem.sync({force:true})


