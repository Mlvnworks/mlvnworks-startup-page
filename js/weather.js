const temp = document.querySelector('#temp');
const des = document.querySelector('#text');
const wheatherIcon = document.querySelector('#wheather-icon');

const fetchWheatherData = async pos => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    // fetch weather api
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7b4402e3fmshfdb4aa7589ea9fdp1c03cbjsna3ba8d1903cd',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
    };
    try {
        const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${long}`, options);
        const data = await res.json();
        const { temp_c } = data.current;
        const { text } = data.current.condition;
        const { icon } = data.current.condition;

        temp.textContent = `${temp_c}°`;
        des.textContent = text;

        // wheather icon
        wheatherIcon.style.animation = 'unset';
        wheatherIcon.style.width = '40px';
        wheatherIcon.style.height = '40px';
        wheatherIcon.src = icon;
    } catch (err) {
        des.textContent = 'try again later!';
        temp.style.opacity = '0';
        wheatherIcon.style.opacity = '0';
    }
};

// if user denied geolocation request
const accessDenied = err => {
    temp.textContent = '?';
    des.textContent = 'Allow Geolocation';
};

navigator.geolocation.getCurrentPosition(fetchWheatherData, accessDenied);

// go to wheather Api.com
wheatherIcon.addEventListener('click', () => {
    window.open('https://www.weatherapi.com/');
});
