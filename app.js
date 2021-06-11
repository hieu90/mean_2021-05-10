const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/server', (req,res)=>{
    main = 'hello';
    res.render('index', {main});
})

app.listen(3000, ()=>{
    console.log('Server Opened!');
});