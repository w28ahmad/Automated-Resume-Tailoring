const hbs = require('hbs');
const path = require('path');
const express = require('express');

// Import Data
const constants = require("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/app/constant.js");
const {projects, addProjects} = require("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/app/mutable.js");


// USING EXPRESS
const app = express()
const port = process.env.PORT || 3000

// PATHS
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')

// Configering handlebars
app.set('view engine', 'hbs');
app.set('views', viewspath);


// setting up static site
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Automated Taloring',
    })
})

app.get('/Resume1', (req, res)=>{
    // console.log(__dirname+"/../Resume Templates/Resume1.html")
    res.render("Resume1")
})

app.get('/projects', (req, res)=>{
    var p = projects()
    // console.log(p)
    res.send({
        projects: p
    })
})

app.listen(port, ()=>{
    console.log('Server is up on port '+port);
})

