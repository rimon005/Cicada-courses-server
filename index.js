const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')

const courses = require('./data/courses.json')

app.get('/' , (req , res) =>{
    res.send('Courses api running')
})

app.get('/category' ,(req , res) =>{
    res.send(categories)
})

app.get('/category/:id' , (req , res) =>{
    const id = req.params.id;
    const categoryCourse = courses.find( c => c.category_id === id)
    res.send(categoryCourse)
} )

app.get('/courses' , (req , res) =>{
    res.send(courses)
})

app.get('/courses/:id' , (req , res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find( c => c._id === id);
    res.send(selectedCourse)
})

app.listen(port , ()=>{
    console.log('Cicada courses server in running' );
})