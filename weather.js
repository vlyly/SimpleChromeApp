const coords = "coords";
const weather = document.querySelector(".js_weather");
const api_key = "8fb4059bc67bab8fc8eb575b23460ee6";

function getWeather(lat, long){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`
        ).then(function(response){
            return response.json(); //response 스트림을 가져와 완료될 때 까지 읽고 문자열을 JSON으로 바꾸는 결과로 해결되는 promise를 반환합니다
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;

           
            weather.innerText = `${temperature}℃, ${place}`;
        }); // 상위 함수의 동작이 끝나면(response.json()이 반환되면) 그 값에서 온도와 장소 정보를 가져와 화면에 출력합니다
}


function saveCoords(coordsObj){
   
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }; /* hadleGeoSucces는 GeolocationPosition객체(position)를 유일한 매개변수로 받습니다 
    coordsObj 객체에 위도와 적도 정보를 저장합니다*/

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    alert("can't access geo location");
}


function askForCoords(){
    
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
} //브라우저의 현재 정보 중 위치 정보를 가지고 옵니다. 단, 보안상의 문제로 브라우저가 위치 정보에 접근을 시도하면 사용자의 의사를 묻습니다

function loadCoords(){
    const loadedCoords = localStorage.getItem(coords);

    if(loadedCoords === null){
        
        askForCoords();
    } //local storage에 loadedCoords key의 값이 비어있다면, aksForCoords 함수를 실행합니다

    else{
        const parseCoords = JSON.parse(loadedCoords);

        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
   
    loadCoords();
}

init();