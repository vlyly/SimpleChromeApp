const body = document.querySelector("body");
const img_number = 6;


function paintImage(imgNumber){
    const image = new Image(); // 새로운 image 인스턴스를 생성합니다

    image.src = `Background/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage"); // image 인스턴스에 bgImage 클래스를 추가합니다
    body.appendChild(image); // image 인스턴스를 body의 자식요소로 이동시킵니다
}

function genRandom(){
    const number = Math.floor(Math.random() * img_number); // 0~5까지 무작위 수를 생성합니다
    return number;
}


function init(){
    const randomNumber = genRandom();

    paintImage(randomNumber);
}

init();