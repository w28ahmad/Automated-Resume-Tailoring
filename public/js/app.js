openResume = () =>{
    window.open("/Resume1", "__blank")
}

analyze = () =>{
    const submit = document.getElementById("form")
    submit.addEventListener('submit', (e)=>{
        e.preventDefault()
        var command = form.elements.command.value.toLowerCase();
        if(command == "show resume"){
            openResume();
        }else if(command == "my projects"){
            fetch('/projects').then((result)=>{
                result.json().then((data)=>{
                    showProjects(data);
                })            
            })
        }
        else{
            console.log("I am not sure what you mean. Please type 'help' to show all options")
        }
    })
}

showProjects = (data) =>{
    console.log(data);
}