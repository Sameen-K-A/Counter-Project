const express = require('express');
const app = express();
const port = 3000;

app.set('view engine' , 'ejs');
app.use(express.static('views'));
app.get('/' , (req , res) => {
    console.log('user enetered');
    res.render('counter')
});



app.listen(port , () =>  console.log('server started'))




