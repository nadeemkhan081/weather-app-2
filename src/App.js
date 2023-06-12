import { useState } from 'react';
import './App.css';

const api = {
  key: 'b67f82be179e229dc1c185279ca322fa',
  base: 'http://api.openweathermap.org/data/2.5/',
};
function App() {

  const[search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result)
    });
  };
  return (
    <div className="App">
      <header className="App-header">
          <h1>Weather-App</h1>
        <div>
          <input type='text' placeholder='Enter the city...' onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ?(
          <div>
        <h3>{weather.name}</h3>
        <h4>{weather.main.temp}°C</h4>
        <h5>{weather.weather[0].main}</h5>
        <h5>Feels Like: {weather.main.feels_like}°C</h5>
        </div>
        ) : (
          ""
          )}
      </header>
    </div>
  );
}

export default App;
