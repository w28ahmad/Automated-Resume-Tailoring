// const hbs = require('hbs');
const path = require('path');
const express = require('express');
const jsdom = require('jsdom');
const fs = require('fs');

// Import Data
const constants = require("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/app/constant.js");
const {projects, addProjects, showSummary, addToSummary, addSummary, WorkExperence, addWork} = require("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/app/mutable.js");


// USING EXPRESS
const app = express()
const port = process.env.PORT || 3000

// PATHS
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')

// Configering handlebars
app.set('view engine', 'hbs');
app.set('views', viewspath);

// Configering jsdom
const { JSDOM } = jsdom;
var htmlFile = fs.readFileSync("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/templates/views/Resume1.hbs", "UTF8");
const dom = new JSDOM(htmlFile);

// setting up static site
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Automated Tailoring',
    })
})

app.get('/Resume1', (req, res)=>{
    res.render("Resume1")
})

app.get('/projects', (req, res)=>{
    var p = projects()
    res.send({
        projects: p
    })
})

app.get('/addProjects', (req, res)=>{
    str = req.query.data
    arr = str.split(",").map(function(item) {
        return parseInt(item, 10);
    });
    // console.log(arr)
    addProjects(arr, dom)
    res.send({
        data: "*Completed"
    })
})

app.get('/Summary', (req, res)=>{
    var s = showSummary();
    res.send({
        summary: s
    })
})

app.get('/addSummary', (req, res)=>{
    var str = req.query.input
    addToSummary(str)
    res.send({
        data: "*Added"
    })
})

app.get('/addSummaryToResume', (req, res)=>{
    var str = req.query.data
    arr = str.split(",").map(function(item) {
        return parseInt(item, 10);
    });
    addSummary(arr, dom)
    res.send({
        data: "*Completed"
    })
})

app.get('/Work', (req, res)=>{
    var w = WorkExperence()
    res.send({
        workExperence: w
    })
})

app.get('/addWork', (req, res)=>{
    str = req.query.data
    arr = str.split(",").map(function(item) {
        return parseInt(item, 10);
    });

    addWork(arr, dom)
    res.send({
        data: "*Completed"
    })
})

app.listen(port, ()=>{
    console.log('Server is up on port '+port);
})

