openResume = () =>{
    window.open("/Resume1", "__blank")
}

const submit = document.getElementById("form")
submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    var command = form.elements.command.value.toLowerCase();
    clearUpdate();
    if(command == "show resume"){
        openResume();
    }else if(command == "my projects"){
        fetch('/projects').then((result)=>{
            result.json().then((data)=>{
                showProjects(data.projects);
            })            
        })
    }else if(command == "clear"){
        clear();
    }else if(command.includes("add project")){
        result = command.match(/\d+/g);
        addProjects(result);
        // console.log(result);
    }
    else{
        console.log("I am not sure what you mean. Please type 'help' to show all options")
    }
})

showProjects = (data) =>{
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

clear = () =>{
    clearUpdate()
    var myNode = document.getElementById("Project_div");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

addProjects = (result)=>{

    // console.log(result);
    fetch('/addProjects?data='+result).then((response)=>{
        response.json().then((data)=>{
            update(data.data)
        })
    })

}

update = (data) =>{
    if(data == "*Completed"){
        var completedDiv = document.getElementById("Resume_div")
        var com = document.createElement('h5')
        setAttributes(com, {"style":"display:inline-block;margin-left:25px;color:green;", "id":"update"})
        com.textContent = data

        completedDiv.appendChild(com)
    }else{
        console.log("Something Broke")
    }

}

clearUpdate = () =>{
    try{
        document.getElementById('update').remove()
    }catch(err){
        
    }

}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

