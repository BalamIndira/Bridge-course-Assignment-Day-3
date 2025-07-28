// function getweather(){
//     var city=document.getElementById(`inputValue`).value;
//     var nameVal=document.getElementById(`nameVal`);
//     var temp=document.getElementById(`temp`);
//     var desc=document.getElementById(`desc`);
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=781578bcd718b81c6d97194c93db13e4`)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         nameVal.innerText=data.name;
//         temp.innerHTML=data.main.temp+"C";
//         desc.innerHTML=data.weather[0].main;
//     })
//     .catch(function(){
//         alert("city not found");
//     });
// }

// document.getElementById('button').addEventListener('click',getweather);






// async function getweather() {
//     const city = document.getElementById('inputValue').value;
//     const nameVal = document.getElementById('nameVal');
//     const temp = document.getElementById('temp');
//     const desc = document.getElementById('desc');

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=781578bcd718b81c6d97194c93db13e4`);

//         if (!response.ok) {
//             throw new Error("City not found");
//         }

//         const data = await response.json();

//         nameVal.innerText = data.name;
//         temp.innerHTML = data.main.temp + "C";
//         desc.innerHTML = data.weather[0].main;

//     } catch (error) {
//         alert("City not found");
//     }
// }

// document.getElementById('button').addEventListener('click', getweather);







