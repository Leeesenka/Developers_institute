import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          weatherData: null,
        };
    }
    
    componentDidMount() {
        const APIKey = 'hmqRWjiAgSuq5fTy2GMPwiGqZa2J2SIn';
        const locationKey = '215854';

        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${APIKey}`)
        .then(response => response.json()) 
        .then(data => {
            console.log('weather', data);
            this.setState({ weatherData: data[0] });
        }) 
        .catch(error => console.error('Error:', error)); 
    }

    render() {
        const { weatherData } = this.state;

        if (!weatherData) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>Weather Forecast</h1>
                <p>{weatherData.WeatherText}</p>
             
            </div>
        )
    }
}

export default Weather;
