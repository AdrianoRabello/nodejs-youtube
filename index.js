

const express = require("express")


const app = express();

app.get("/",function(req,res){

html(res,"index.html")

})

app.get("/teste",function(req,res){

  res.send("teste");
})


app.get("/teste/:nome",function(req,res){

  res.send(req.params);
})


function html(res,dir){

  return  res.sendFile(__dirname + "/html/"+dir)
}



app.listen(8081,function(){

 
})