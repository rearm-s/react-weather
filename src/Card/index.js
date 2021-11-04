import './../App.css';
import React, {memo, useContext, useEffect} from "react";
import {useWeather} from "../hooks/useWeather";
import {GlobalContext} from "../App";
import {Link, useHistory, useLocation, useRouteMatch} from "react-router-dom";

export const Card = memo(({city, setCityCoord}) => {

    const data = useWeather(city)
    const history = useHistory();
    const location = useLocation()

    const {dispatch} = useContext(GlobalContext)


    useEffect(() => {
        if(data && data.coord.lat && data.coord.lon && setCityCoord) {
            setCityCoord({
                lat: data.coord.lat,
                lon: data.coord.lon
            })
        }
    }, [data, setCityCoord])

    if (!data) return null;
    const {name, weather, main} = data;
    const {description, icon} = weather[0];
    const {temp, humidity, feels_like} = main

    const handleOnDelete = () => {
        dispatch({
            type: 'DELETE_CITY',
            payload: city
        })
    }

    const handleOnEdit = () => {
        dispatch({
            type: 'EDIT_CITY',
            payload: city
        })
    }

    const handleOnBack = () => {
        history.goBack()
    }

    if (location.pathname == '/') {
        return (
            <div className="Card">
                <div className="ActionButtonWrap">
                    <button onClick={handleOnEdit} className="ActionButton">Edit</button>
                    <button onClick={handleOnDelete} className="ActionButton">X</button>
                </div>
                <Link to={`/city/${city.toLowerCase()}`} className="Card__wrap">
                    <div className="MainInfo">
                        <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
                        <div className="Title">{name}</div>
                        <div className="Description">{description}</div>
                        <div className="Temperature TemperatureIcon">{temp.toFixed()}</div>
                    </div>
                    <div className="Information">
                        <div>Humidity: {humidity}</div>
                        <div>Feels like: {feels_like}</div>
                    </div>
                </Link>
            </div>
        )
    }
    return (
        <div className="Card">
            <div className="ActionButtonWrap">
                <button onClick={handleOnBack} className="ActionButton">Back</button>
            </div>
            <div className="MainInfo">
                <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
                <div className="Title">{name}</div>
                <div className="Description">{description}</div>
                <div className="Temperature TemperatureIcon">{temp.toFixed()}</div>
            </div>
            <div className="Information">
                <div>Humidity: {humidity}</div>
                <div>Feels like: {feels_like}</div>
            </div>
        </div>
    )
})

