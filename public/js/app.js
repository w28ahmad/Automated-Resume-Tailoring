openResume = () =>{
    window.open("/Resume1", "__blank")
}

const submit = document.getElementById("form")
submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    try{
        var summaryInput = form.elements.summary.value.toLowerCase()
    }catch(err){}
    var command = form.elements.command.value.toLowerCase();
    clearUpdate();

    if(summaryInput && summaryInput!=""){
        // Clear that area
        clear('form-div-add')
        addSummary(summaryInput)
    }else if(command == "show resume"){
        openResume();
    }else if(command == "show projects"){
        clear("Project_div");
        fetch('/projects').then((result)=>{
            result.json().then((data)=>{
                show(data.projects);
            })            
        })
    }else if(command == "clear"){
        clear("Project_div");
    }else if(command.includes("add project")){
        result = command.match(/\d+/g);
        addProjects(result);
        refreshIframe();
    }else if(command == "show summary"){
        clear("Project_div");
        fetch('/Summary').then((result)=>{
            result.json().then((data)=>{
                show(data.summary);
            })
        })
    }else if(command == "another summary"){
        addInput("summary")
    }else if(command.includes("add summary")){
        result = command.match(/\d+/g);
        addSummaryToResume(result)
        refreshIframe();
    }else if(command == "show work"){
        fetch('/Work').then((result)=>{
            result.json().then((data)=>{
                show(data.workExperence);
            })            
        })
    }else if(command.includes("add work")){
        result = command.match(/\d+/g);
        addWork(result);
        refreshIframe();
    }else if(command == "add constants"){
        fetch('/addConstants').then((result)=>{
            result.json().then((data)=>{
                update(data.result);
            })
        })
        refreshIframe();
    }
    else{
        update("That is not a command, look at the commands bar for help")
    }
})

addSummaryToResume = (result) =>{
    // console.log(result)
    fetch('/addSummaryToResume?data='+result).then((response)=>{
        response.json().then((data)=>{
            update(data.data)
        })
    })
}

refreshIframe = () =>{
    var iframe = document.getElementById('preview');
    iframe.src = iframe.src;
}

addInput = (type) =>{
    // At the start of this function it should clear();
    if(type == "summary"){
        var addDiv = document.getElementById("form-div-add");
        var textbox = document.createElement('input')
        setAttributes(textbox, {'name':'summary', 'type':'text', 'class':'form-control', 'placeholder':'Add Summary'})
        addDiv.appendChild(textbox);
    }
}

addSummary = (summaryInput) => {
    fetch("/addSummary?input="+summaryInput).then((response)=>{
        response.json().then((data)=>{
            update(data.data)
        })
    })
}

show = (data) =>{
    projectDiv = document.getElementById("Project_div");

    for(var i = 0; i < data.length; i++){
        var project = document.createElement('h5');
        setAttributes(project, {"style": "padding-bottom:5px;"});
        project.textContent =i+ ".\t " +data[i];

        projectDiv.appendChild(project)
        projectDiv.appendChild(document.createElement('hr'))
    }

}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

clear = (Id) =>{
    clearUpdate()
    var myNode = document.getElementById(Id);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

addProjects = (result)=>{
    fetch('/addProjects?data='+result).then((response)=>{
        response.json().then((data)=>{
            update(data.data)
        })
    })

}

update = (data) =>{
    if(data == "*Completed" || data == "*Added"){
        var completedDiv = document.getElementById("Resume_div")
        var com = document.createElement('h5')
        setAttributes(com, {"style":"display:inline-block;margin-left:25px;color:green;", "id":"update"})
        com.textContent = data

        completedDiv.appendChild(com)
    }else{
        var completedDiv = document.getElementById("Resume_div")
        var com = document.createElement('h5')
        setAttributes(com, {"style":"display:inline-block;margin-left:25px;color:red;", "id":"update"})
        com.textContent = "*"+data

        completedDiv.appendChild(com)
    }

}

clearUpdate = () =>{
    try{
        document.getElementById('update').remove()
    }catch(err){
        
    }

}

addWork = (result)=>{
    fetch('/addWork?data='+result).then((response)=>{
        response.json().then((data)=>{
            update(data.data)
        })
    })

}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
