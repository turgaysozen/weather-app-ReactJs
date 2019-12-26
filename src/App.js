import React from 'react';
import './App.css';
import Weather from "../src/Components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css"

const API_Key = '88b994d7810fe07a56efbb3b7cbfb7ec';
// api call : api.openweathermap.org/data/2.5/weather?q=London

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: '',
      country: '',
      temp: '',
      tempMin: '',
      tempMax: '',
      desc: '',
    }
    this.getWeather();
    this.icon = {
      Thunderstorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog',
    }
  }

  getIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 632:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=${API_Key}&units=metric`);
    const res = await api_call.json();
    this.setState({
      city: res.name,
      country: res.sys.country,
      temp: res.main.temp,
      tempMax: res.main.temp_max,
      tempMin: res.main.temp_min,
      desc: res.weather[0].description,
    });
    this.getIcon(this.icon, res.weather[0].id);
    
    console.log(res.weather[0].id);
    console.log(res);

  }

  render() {
    return (
      <div className="App">
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          desc={this.state.desc}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
