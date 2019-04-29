openResume = () =>{
    window.open("/Resume1", "__blank")
}

const submit = document.getElementById("form")
submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    var command = form.elements.command.value.toLowerCase();
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
        console.log("true")
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
    var myNode = document.getElementById("Project_div");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}