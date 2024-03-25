const search = document.querySelector("#search");
const inputLoc = document.querySelector("#locationInput");
const dispHum = document.querySelector("#hum");
const dispWindSpeed = document.querySelector("#wind");
const dispTemp = document.querySelector("#temp");
const dispLoc=document.querySelector("#loc");
const img=document.querySelector("img");
// let src=`Images/${src}`;
let weather;

search.addEventListener("click", () => {
  console.log("clicked");
  inputCity = inputLoc.value;
  console.log(inputLoc.value);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=b04052fdcac27d7da4263d8684ec4f34`
  )
    .then((Response) => {
      if (!Response.ok) {
        throw new Error("There was an issue try again");
      }
      return Response.json();
    })
    .then((data) => {
      dispHum.innerText = ` ${data.main.humidity}%`;
      dispWindSpeed.innerText = `${data.wind.speed}km/hr`;
      dispTemp.innerText = `${Math.floor(data.main.temp - 273.15)}°C`;
      weather = data.weather[0].main;
      console.log(weather)
      dispLoc.innerText=data.name
    })
    .catch((error) => console.log(error))
    .finally(() =>
      console.log(
        "The work is eaither done or not done but execution is completed "
      )
    );
    // changeImg();
});

// function changeImg() {
//     if(weather=="clear")
//     if(weather=="clear")
// }
