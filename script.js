
// let button = document.getElementById  ('addbutton')

// button.addEventListener('click', function(){
//     let textarea = document.getElementById('noteid').value
//     let val = textarea;

//     let show = document.getElementById('show')
//     show.innerText = val


// })

// let button2 = document.getElementById('task_completed')

// button2.addEventListener('click', function(){
//     let list = document.getElementById('show')
//     let showText = list;

//     showText.remove()
//     console.log(showText);
// })

// Approach two tutorial

const inputTask = document.getElementById('inputask')
const addTaskButton = document.getElementById('addtask')
const showStoreTask = document.getElementById('storetask')

addTaskButton.addEventListener('click', function(){
    const task = inputTask.value; // holding inputTask.value in variable task
   // console.log(inputTask);

    const taskElement = document.createElement('div') // creating div element honding in variable taskElement
    taskElement.textContent = task // taking task and puting it in the element // now element can be appendchild().
    showStoreTask.appendChild(taskElement) // task value directly cant  be used because appen child needs a node (div, li, span)
                                           // string cvan be appended directly
    inputTask.value = ''; //clear the input
})