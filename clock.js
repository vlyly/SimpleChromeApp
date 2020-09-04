const clock = document.querySelector(".js_clock");

function getTime(){
    const date = new Date(); //생성자 함수 Date를 이용해 현재 시각을 반환받습니다.
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();


    clock.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds }`; //=clockTitle.innerText = hours +gi ":" + minutes + ":" + seconds; 시, 분, 초가 각각 10 이하의 수 일 때 0X의 형식으로 표기합니다.

    }


function init(){

    getTime();
    setInterval(getTime, 1000); // getTime함수를 1초에 한 번 씩 실행합니다. (1초마다 업데이트)
}

init();