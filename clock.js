const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1"); //clockContainer 하위 <h1>의 첫번째 자식 요소를 반환합니다.

function getTime(){
    const date = new Date(); //생성자 함수 Date를 이용해 현재 시각을 반환받습니다.
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours}:${hours}:${minutes}`; //clockTitle.innerText = hours + ":" + minutes + ":" + seconds;

}

function init(){

    getTime();

}

init();