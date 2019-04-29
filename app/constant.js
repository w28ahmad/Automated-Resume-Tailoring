const fs  = require("fs");

fillConstantInfo = (dom) => {
    var info = JSON.parse(fs.readFileSync("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/app/UserInfo/Information.json"));
    var const_info = info.constant;
    var byId = dom.window.document;

    //header
    byId.querySelector("#first_name").textContent = const_info.first_name;
    byId.querySelector("#last_name").textContent = const_info.last_name;
    byId.querySelector("#email").textContent = const_info.email;
    byId.querySelector("#program_term").textContent = const_info.program_term;
    byId.querySelector("#phone").textContent = const_info.phone;
    byId.querySelector("#website").textContent =const_info.website;
    byId.querySelector("#github").textContent =const_info.github;
    byId.querySelector("#student_number").textContent =const_info.student_number;

    //skills & tools
    byId.querySelector("#languages").textContent = const_info.technical_skills.languages;
    byId.querySelector("#tools").textContent = const_info.technical_skills.tools;

    //qualifications
    var summaryText="";
    for(var i = 0; i < const_info.summary.length; i++){
        summaryText += "\n<span class='text'>"+const_info.summary[i]+"</span>";
    }
    byId.querySelector("#qualifications").textContent = summaryText;

    var output = dom.window.document.documentElement.outerHTML;
    output = output.replace(/&lt;/g, '<');
    output = output.replace(/&gt;/g, '>');

    fs.writeFileSync("C:/Users/Wahab Ahmad/Documents/CV's/Automated Resume Taloring/templates/views/Resume1.hbs", output);
}


module.exports = {
    fillConstantInfo
}