

// importa o mosulo sequelize
const Sequelize = require('sequelize');

// realiza conexão ao DB com os parametros, nome do banco, usuário, senha 
const sequelize = new Sequelize('node_youtube','root','root',{
  host:"localhost",
  dialect:'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
