import './../App.css';
import React from "react";

export const DailyCard = ({daily}) => {
    const {dt, weather, temp: {day}} = daily;
    const {main, icon} = weather[0];
    const currentDate = new Date(dt * 1000)
    return (
        <div className="dailyCard">
            <div>{currentDate.toString().split(' ')[0]}</div>
            <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
            <div className="temperatureIcon">{day.toFixed(0)}</div>
            <div>{main}</div>
        </div>

    )
}

