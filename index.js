const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/' , (req , res) =>{
    res.send('Courses api running')
})

app.listen(port , ()=>{
    console.log('Cicada courses server in running' );
})