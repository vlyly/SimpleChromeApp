const form = document.querySelector(".js_form");
const input = document.querySelector("input"); //querySelcetorAll은 자식 요소 모두를 배열의 형태로 반환받습니다.
const greeting = document.querySelector(".js_greetings"); //*

const user_ls = "currentUser"; //User의 Local Storage key name
const showing_cn = "showing"; //showing class(css)

function saveName(text){
    localStorage.setItem(user_ls,text); //local Storage에 user_ls 키에 입력값을 저장함
}

function handleSubmit(event){

    const currentValue = input.value;
    event.preventDefault(); //Default 동작을 실행하지 않음
    paintGreeting(currentValue);
    saveName(currentValue); 

}

function aksForName(){

    form.classList.add(showing_cn); //사용자 이름 입력창을 보임
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){

    form.classList.remove(showing_cn); // 사용자 이름 입력창을 보이지 않음
    greeting.classList.add(showing_cn); // currentUser 이름을 넣어 greeting 코멘트를 보임
    greeting.innerText = `Hello ${text}`;

}

function loadName(){

    const currentUser = localStorage.getItem(user_ls);

    if(currentUser === null){

        aksForName();

    } // If someone is not, ask his name

    else{
        
        paintGreeting(currentUser);

    } //someone is
}

function init(){

    loadName();

}


init();