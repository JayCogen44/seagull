import React from 'react';

const WeatherComponent = (props) => {
    return (
        <div className='half'>
            <div className='inner'>
                <div className='user-welcome'>
                    Whatup, {props.user}
                </div>
                <form onSubmit={(e) => { e.preventDefault(); props.getWeather(props.currentCity) }}>
                    <input className='search' value={props.currentCity} onChange={props.updateCurrentCity} />
                    <button style={{ display: 'none' }} onClick={props.getWeather}></button>
                </form>
                <div className='weather-data'>
                    {props.currentTemp}<span className='deg'>&#176;</span>
                </div>
                <div className='tempBg'></div>
            </div>
        </div>
    );
};

export default WeatherComponent;