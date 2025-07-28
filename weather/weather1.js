async function getweather() {
    const city = document.getElementById('inputValue').value;
    const nameVal = document.getElementById('nameVal');
    const temp = document.getElementById('temp');
    const desc = document.getElementById('desc');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=781578bcd718b81c6d97194c93db13e4`);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const weatherMain = data.weather[0].main;

        nameVal.innerText = data.name;
        temp.innerHTML = data.main.temp + "°C";
        desc.innerHTML = weatherMain;

        const backgroundMap = {
            Clear: "url('https://img.freepik.com/premium-photo/beautiful-airatmosphere-bright-blue-sky-background-abstract-clear-texture-with-white-clouds-with-green-cornfield_29332-5474.jpg')", 
            Sunny:"url('https://tse2.mm.bing.net/th/id/OIP.eBakDkS8kqqfFNZTACcz-wHaF3?rs=1&pid=ImgDetMain&o=7&rm=3')",
            Clouds: "url('https://images8.alphacoders.com/805/805636.jpg')", 
            Rain: "url('https://tse1.mm.bing.net/th/id/OIP.fkWr_1EeH5QcmzbfQ7GlvQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3')",
            Snow: "url('https://media.istockphoto.com/id/578601264/photo/starry-sky-in-winter-snowy-night-carpathians-ukraine-europe.jpg?s=612x612&w=0&k=20&c=jJapM5fkW6QoEN4iDQlBnRA1PRokWA4pPEP8InuzAcA=')",
            Drizzle: "url('https://climate.nasa.gov/system/news_items/main_images/2610_drizzle-1280px-90.jpg')", 
            Thunderstorm: "url('https://tse3.mm.bing.net/th/id/OIP.rvfVPgOYVNgZ-V8Piu8OYgHaEP?w=626&h=358&rs=1&pid=ImgDetMain&o=7&rm=3')", 
            Mist: "url('https://www.collinsdictionary.com/images/full/mist_339182456.jpg?version=4.0.133')",
        };


        if (backgroundMap[weatherMain]) {
            document.body.style.backgroundImage = backgroundMap[weatherMain];
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
        } else {
 
            document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/white-color-background-ghw6e685ri75chj4.jpg')";
        }

    } catch (error) {
        nameVal.innerText = "";
        temp.innerText = "";
        desc.innerText = "";
        alert("City not found");
        document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/white-color-background-ghw6e685ri75chj4.jpg')";
    }

}

document.getElementById('button').addEventListener('click', getweather);
