const todoForm = document.querySelector(".js_todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js_todoList");
const todos_ls = 'todos';
const todos = [];

function saveTodos(){

    localStorage.setItem(todos_ls, JSON.stringify(todos)); //javascript는 local storage에 모든 data를 string으로 저장하려고 하기 때문에... todos를 string 형식으로 변환합니다

}

function paintTodo(text){

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = todos.length + 1;
    const todoObj = {
        text : text,
        id : newID
    };
    
    
    todos.push(todoObj); //생성된 todoObj를 todos 배열의 맨 마지막 요소로 추가합니다
    saveTodos(); // 생성된 배열을 local storage에 저장합니다 반드시 push한 이후에 저장해주세요
    delBtn.innerText = "❌";
    span.innerText = ` ${text}`; // <span>을 생성하여 태그 안에 text를 입력합니다
    li.id = newID; // 생성된 li 요소의 id를 todos.lenght + 1 로 설정합니다
    li.appendChild(delBtn); // delet버튼을 li의 자식 요소로 이동시킵니다
    li.appendChild(span); // span을 li의 자식 요소로 이동시킵니다
    todoList.appendChild(li); //todoList의 자식 요소로 li를 이동시킵니다

}


function handleSubmit(event){
    const currentValue = todoInput.value;
    
    event.preventDefault();
    paintTodo(currentValue);
    todoInput.value = ""; // 제출하고나면 입력창을 비움

}

function loadTodos(){
    const loadedtodos = localStorage.getItem(todos_ls);

    if(loadedtodos !== null){
        const pasedTodos = JSON.parse(loadedtodos); // local storage에서 불러온 todos를 다시 object 형식으로 변환합니다
    }

}

function init(){

    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);

}

init();