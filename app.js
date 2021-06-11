const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/server', (req,res)=>{
    var main = 'hello/main';
    res.render('index', {main});
})

app.listen(3000, ()=>{
    console.log('Server Opened OK!');
});