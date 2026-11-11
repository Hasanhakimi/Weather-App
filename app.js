const city_name=document.querySelector('.w-city');
const city_temp=document.querySelector('.w-temp');
const city_humidity=document.querySelector('.w_humidity');
const city_windspeed=document.querySelector('.wind_speed');
const input_city=document.querySelector('.search input');
const button_city=document.querySelector('#btn');
const w_icon=document.querySelector('.weather_icon')
const time=document.querySelector('.time');
const weather_state=document.querySelector('.weather-condition');
const error_mesage=document.querySelector('#error');
const weather_div=document.querySelector('.weather');


async function FetchWeather(city){
    const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=dedac24ecb1743eb85a61111262510&q=${city} &aqi=yes`);
    if(response.status===400){
        error_mesage.style.display="block";
        weather_div.style.display="none";
    }else{
    weather_div.style.display="block";
    error_mesage.style.display="none";

    const data=await response.json();
    city_name.innerHTML=data.location.name;
    city_temp.innerHTML=Math.round(data.current.temp_c);
    city_humidity.innerHTML=`${data.current.humidity}%`;
    city_windspeed.innerHTML=`${data.current.wind_kph}km/h `;
    const weatherSate=data.current.condition.text;
    const iconLink=data.current.condition.icon;
     w_icon.src="https:"+iconLink;
    const time_api=data.location.localtime;
    const week=new Date(time_api).toLocaleDateString("en-Us",{
        weekday:'long'
    })
    const localtime=time_api.split(" ")[1];
    time.innerHTML=`${week}, ${localtime} `;
    weather_state.innerHTML=data.current.condition.text;

    }
   
}

button_city.addEventListener('click',()=>{
FetchWeather(input_city.value);

})




