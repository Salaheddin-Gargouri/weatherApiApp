import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./search/Search";
import CurrentWeather from "./search/CurrentWeather";
import { WEATHER_URL_API, WEATHER_kEY_API } from "./search/Api";
import { useState } from "react";

function App() {
  const [currentweather, setCurrentWeather] = useState(null);
  const [forecastweather, setForecastWeather] = useState(null);
  const handleSearchOnchange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_URL_API}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_kEY_API}&units=metric`
    );
    const foretWeatherFetch = fetch(
      `${WEATHER_URL_API}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_kEY_API}&units=metric`
    );
    Promise.all([currentWeatherFetch, foretWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcasteResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forcasteResponse });
      })
      .catch((err) => console.log(err));
    console.log(currentweather);
    console.log(forecastweather);
    return;
  };
  return (
    <div className="App">
      <Search OnSearchChange={handleSearchOnchange} />
      {currentweather && <CurrentWeather data={currentweather} />}
    </div>
  );
}

export default App;
