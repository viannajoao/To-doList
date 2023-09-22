const button = document.querySelector('.button-task-add');
const task = document.querySelector('.task-list');
const containerForm = document.querySelector('.form-description');
const form = document.querySelector('.form');
const container = document.querySelector('.container')

let taskList = [];

function addTask() {
  
  container.style.display = 'none';
  containerForm.style.display = 'block';

  // if (input.value === "") {
  //   alert("Nenhum valor digitado, por favor inserir uma tarefa")
  // } else {
  //   taskList.push({
  //     task: input.value,
  //     done: false
  //   });
  // }

  // input.value = '';

  // showTaskList()

}

function fisnhedTask(){
  
  taskTitle = document.querySelector('.task-title');
  dataInicial = document.querySelector('.task-date-inicial');
  dataEnd = document.querySelector('.task-date-end');
  description = document.querySelector('.description');
if(taskTitle && dataInicial && dataEnd && description === ""){
  alert("Todos os campos sao obrigatorios, por favor inserir o dados")
}else{
taskList.push({
    task: taskTitle.value,
    dateInicial: dataInicial.value,
    dateEnd: dataEnd.value,
    description: description.value,
    done: false
  })
}
  taskTitle.value = '';
  dataEnd.value = '';
  dataInicial.value = '';
  description.value = '';

  console.log(taskList)

  containerForm.style.display  = 'none';
  container.style.display = 'block';

  showTaskList()

}

function showTaskList() {

  let newList = '';

  taskList.forEach((item, index) => {
    newList += `
    <li class="tasks ${item.done && "done"}">
      <i class="fa-solid fa-circle-check" onclick="taskDone(${index})"></i>
      <p>${item.task}</p>
      <i class="fa-regular fa-trash-can" onclick="deleteItem(${index})"></i>
  </li>`


  })

  localStorage.setItem('lista', JSON.stringify(taskList));

  task.innerHTML = newList

}

function taskDone(index) {

  taskList[index].done = !taskList[index].done

  showTaskList()

}


function deleteItem(index) {

  taskList.splice(index, 1)

  showTaskList()

}

function refreshDisplay(){

  const listStorage = localStorage.getItem('lista')

  if(listStorage){
   taskList = JSON.parse(listStorage)
  }

  showTaskList()

}



refreshDisplay()