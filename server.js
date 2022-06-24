const express = requir('express')
const app = express();

app.set("view-engine","ejs");

app.get('/',(req,res) =>{
  res.render("index.ejs",{name:"jigyansha"});)
}

app.get('/login',(req,res)=>{
  res.render('login.ejs');
})

app.get('/resister',(req,res)=>{
  res.render('resister.ejs');
})

app.post('/resister',(request,res)=>{})
app.listen(3000);