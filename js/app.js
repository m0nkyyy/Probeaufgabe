// Used often
const local = localStorage;

const set = local.setItem;
const get = local.getItem;

let namen = document.querySelector('#name');
let task = document.querySelector('#task');

const create = document.querySelector('#erstellen');
const update = document.querySelector('#update');
const abort = document.querySelector('#abort');

const project = document.querySelector('#projekte');




// Projectlist

let projectName = '';



// Set Projectname to Local Storage
// FIXME: Array order gets messed up
setProject = () => {
    if (namen.value === '') {
        alert('Projektnamen eintragen')
    } else {
        let projectList = [];
        let project1 = {
            name: '',
            task: [],
        }
        projectName = namen.value;
        projectList = [];
        project1.name = projectName;
        project1.task = projectList;

        local.setItem(projectName, JSON.stringify(project1));

        namen = '';
        task = '';
    }
}

create.addEventListener('click', setProject);

// Show Projects
// FIXME: Array order gets messed up
function showProjects() {

    if (local.length === 0) {
        // If the Localstorage is empty creates a text for it
        let div = document.createElement("div");
        let text = document.createElement('p');
        div.remove();
        div.id = 'project';
        text.innerHTML = 'Keine Eintraege gefunden';

        div.append(text);

        project.appendChild(div);
    } else {
        // Get the Values from the Localstorage and push them into Array
        projectList = [];
        Object.keys(local).forEach(key => {
            object = JSON.parse(local.getItem(key));
            projectList.push(key);
        });

        // Create the HTML for the Projectlist
        projectList.forEach(name => {
            let div = document.createElement("div");
            let uptdel = document.createElement("div");
            let text = document.createElement('p');
            let span = document.createElement('span');
            let update = document.createElement('img');
            let del = document.createElement('img');

            div.className = 'project';
            text.className = 'toggle';
            text.innerHTML = name;
            div.append(text);
            uptdel.className = 'uptdel';
            update.src = 'img/update.png';
            update.className = 'update';
            span.append(update);
            del.src = 'img/delete.png';
            del.className = 'delete';
            span.append(del);
            uptdel.append(span);
            div.append(uptdel)
            project.appendChild(div);
        })
    }
}

showProjects();

// DELETE A PROJECT 
function del() {
    const project = document.querySelectorAll('.project')

    project.forEach(name => {
        name.addEventListener('click', (e) => {

            if (e.target.className === 'delete') {
                if (confirm('Wollen Sie das projekt wirklich loeschen?')) {
                    Object.keys(local).forEach(key => {
                        if (key === name.firstChild.innerHTML) {
                            projectList = [];
                            object = JSON.parse(local.getItem(key));
                            local.removeItem(key);
                            name.remove(e);
                            alert('Das Projekt wurde geloescht');
                        }
                    })
                }
            }
        })
    })
}
del();

// UPDATE A PROJECT NAME
function updateProjectName() {
    const project = document.querySelectorAll('.project')

    project.forEach(name => {
        name.addEventListener('click', (e) => {
            let oldValue;
            let newValue;
            if (e.target.className === 'update') {
                Object.keys(local).forEach(key => {
                    if (key === name.firstChild.innerHTML) {
                        projectList = [];
                        object = JSON.parse(local.getItem(key));
                        update.style.display = 'block';
                        abort.style.display = 'block';
                        erstellen.style.display = 'none';
                        namen.value = key;

                        update.addEventListener('click', () => {

                            if (namen.value === '') {
                                alert('Projektnamen eintragen');
                            } else {

                                let project1 = {
                                    name: '',
                                    task: [],
                                }
                                oldValue = key;
                                newValue = namen.value;
                                project1.name = newValue;
                                project1.task = object.task;

                                local.setItem(newValue, JSON.stringify(project1));

                                namen = '';
                                task = '';
                                if (alert) {
                                    if (oldValue != newValue) {
                                        alert(`Projectname wurde zu ${newValue} geaendert`);
                                        local.removeItem(oldValue);
                                    } else {
                                        alert('Gleicher Name, es wurde keine Aenderung vorgenommen')
                                    }
                                }
                            }
                        })
                    }
                })
            }
        })
    })
}

abort.addEventListener('click', () => {
    update.style.display = 'none';
    abort.style.display = 'none';
    erstellen.style.display = 'block';
    namen.value = '';
})

updateProjectName()


function showTasks() {
    const project = document.querySelectorAll('.project');
    const projectName = document.querySelector('#projectName');
    const projectTask = document.querySelector('#projectTask');



    project.forEach(name => {
        name.addEventListener('click', (e) => {

            let taskList = [];
            let proName = name.firstChild.innerHTML;
            Object.keys(local).forEach(key => {
                projectList = [];
                object = JSON.parse(local.getItem(key));

                if (proName === key) {
                    
                    taskList.push(key);
                    projectName.innerHTML = proName;
                    let task = object.task;
                    console.log('TASK: ' + task.length);


                    if (task.length === 0) {
                        console.log('leer');
                        projectTask.innerHTML = 'Keine Aufgaben gefunden.';
                    }
                    projectTask.innerHTML = 'Aufgaben';
                    const container = document.querySelector('#container');
                    const ul = document.createElement('ul');
                    // if (ul) {
                    //     
                    // }
                    
                    task.forEach(key => {

                        const uptdel = document.createElement("div");
                        const span = document.createElement('span');
                        const update = document.createElement('img');
                        const del = document.createElement('img');
                        const li = document.createElement('li');

                        li.className = 'taskItem'
                        li.innerHTML = key;
                        uptdel.className = 'uptdel';
                        update.src = 'img/update.png';
                        update.className = 'update';
                        span.append(update);
                        del.src = 'img/delete.png';
                        del.className = 'delete';
                        span.append(del);
                        uptdel.append(span);
                        li.append(uptdel);
                        ul.append(li);
                        console.log(ul);
                    })

                    container.appendChild(ul);
                }
            });
        })
    })
}

showTasks();