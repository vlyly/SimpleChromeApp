const todoForm = document.querySelector(".js_todo");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js_todoList");
const todos_ls = 'todos';
let todos = []; // 입력, 삭제에 의해 값을 재할당하는 경우가 생길 수 있기 때문에 let의 형태로 선언합니다

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode; // 클릭한 버튼의 부모 요소 <lt>를 변수에 할당합니다
    const cleanTodo = todos.filter(todos => todos.id !== parseInt(li.id)); // todos 배열 요소의들 중 각 요소의 id 프로퍼티와 클릭한 버튼의 부모 요소 id가 같지 않은 경우에만(클릭되지 않은 todo 항목만) 반환합니다 
    
    todoList.removeChild(li); // 클릭된 버튼의 부모 요소인 <li>를 삭제합니다 ( <li>는 js_todoList 클래스의 자식요소)
    todos = cleanTodo; // todos 변수에 cleanTodo 함수에서 반환 받은 새로운 배열을 할당합니다
    saveTodos(); // 새로 할당한 배열을 local storage에 저장합니다

}

function saveTodos(){

    localStorage.setItem(todos_ls, JSON.stringify(todos)); //javascript는 local storage에 모든 data를 string으로 저장하려고 하기 때문에... todos를 string 형식으로 변환하여 저장해줍니다

}

function paintTodo(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = todos.length + 1;
    const todoObj = {
        text : text,
        id : newID
    };
    
    
    todos.push(todoObj); //생성된 todoObj를 todos 배열의 맨 마지막 요소로 추가합니다
    saveTodos(); // 생성된 배열을 local storage에 저장합니다 반드시 push한 이후에 저장해주세요
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteTodo);
    span.innerText = ` ${text}`; // <span>을 생성하여 태그 안에 text를 입력합니다
    li.id = newID; // 생성된 li 요소의 id를 todos.lenght + 1 로 설정합니다
    li.appendChild(deleteBtn); // delet버튼을 li의 자식 요소로 이동시킵니다
    li.appendChild(span); // span을 li의 자식 요소로 이동시킵니다
    todoList.appendChild(li); //todoList의 자식 요소로 li를 이동시킵니다

}


function handleSubmit(event){
    const currentValue = todoInput.value;
    
    event.preventDefault();
    paintTodo(currentValue);
    todoInput.value = ""; // currentValue를 입력하여 제출하고나면 입력창을 비웁니다

}

function loadTodos(){
    const loadedtodos = localStorage.getItem(todos_ls);

    if(loadedtodos !== null){
        const parsedTodos = JSON.parse(loadedtodos); // local storage에서 불러온 todos를 다시 object 형식으로 변환합니다 (object가 들어있는 배열)
        parsedTodos.forEach(function(todo){
            paintTodo(todo.text);
        }) // 배열에 들어있는 각각의 object 요소들의 text 프로퍼티에 대하여 paintTodo 함수를 실행합니다
    }

}

function init(){

    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);

}

init();