const fs  = require("fs");

var obj = JSON.parse(fs.readFileSync("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/app/UserInfo/Information.json"));

projects = () =>{
    var projects = obj.mutable.projects;
    var list = []
    for(var i = 0; i < projects.length; i++){
        list.push(projects[i].title);
    }
    return list
}

addProjects = (projects, dom) =>{
    var code = "";
    var byId = dom.window.document;
    var projectList = obj.mutable.projects;

    for(var i = 0; i < projects.length; i++){
        var points = "";
        var title = projectList[(projects[i])].title;
        var date = projectList[(projects[i])].date;
        
        for(var j = 0; j < projectList[(projects[i])].data.length; j++){
            points+=(`<div class="text">
            <span class="text">${projectList[(projects[i])].data[j]}</span>
        </div>\n`);
        }
        code +=(`<div class='title-date'>\n<div class='title-section'>\n<div class='subtitle'>\n<span class='subtitle'>${title}</span>\n</div>\n</div>\n<div class='date'>\n<div class='cls_015'>\n<span class='cls_015'>${date}</span>\n</div>\n</div>\n</div>\n${points}\n`);
    }
    byId.querySelector("#projects").textContent = code;
    var output = dom.window.document.documentElement.outerHTML;
    output = output.replace(/&lt;/g, '<');
    output = output.replace(/&gt;/g, '>');

    fs.writeFileSync("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/templates/views/Resume1.hbs", output);
}

showSummary = () =>{
    var summary = obj.mutable.summary;
    list = []
    for(var i = 0; i < summary.length; i++){
        list.push(summary[i])
    }
    return list
}

addToSummary = (data) =>{
    var summary = obj.mutable.summary
    summary.push("• "+data);
    fs.writeFileSync(__dirname+"/UserInfo/Information.json", JSON.stringify(obj))
}

addSummary = (summary, dom) =>{
    var byId = dom.window.document;

    var summaryList = obj.mutable.summary; 
    var summaryText="";
    for(var i = 0; i < summary.length; i++){
            summaryText += "\n<span class='text'>"+summaryList[summary[i]]+"</span>";
        }
    byId.querySelector("#qualifications").textContent = summaryText;

    var output = dom.window.document.documentElement.outerHTML;
    output = output.replace(/&lt;/g, '<');
    output = output.replace(/&gt;/g, '>');
    fs.writeFileSync("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/templates/views/Resume1.hbs", output);
}

module.exports = {
    projects,
    addProjects, 
    showSummary,
    addToSummary,
    addSummary
}