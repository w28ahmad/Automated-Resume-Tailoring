const constants = require("./constant.js");
const mutable = require("./mutable.js");

const jsdom = require("jsdom");
const fs  = require("fs");
const yargs = require("yargs");
const _ = require('lodash');

var argv = yargs
    .command('const', 'Add all the constats to your resume', {})
    .command('projects', 'Show all the projects')
    .option('addp',{
        type: 'array',
        desc: 'pick the project you would like to add'
    })
    .help()
    .argv;
var command = argv._[0];

const { JSDOM } = jsdom;
var htmlFile = fs.readFileSync("C:\\Users\\Wahab Ahmad\\Documents\\CV's\\Automated Resume Taloring\\Resume Templates\\Resume1.html", "UTF8");
const dom = new JSDOM(htmlFile);


if (command == "const"){
    constants.fillConstantInfo(dom);
    console.log("all the constants are added");
// }else if(command == "add"){

}else if (command == "projects"){
    mutable.projects();
}else if(command === undefined && argv.addp.length > 0){
    mutable.addProjects(argv.addp, dom);
    console.log("Projects successfully added!");
}else{
    console.log("command not recognized");
}






