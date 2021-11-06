import './../App.css';
import React, {memo, useContext, useEffect} from "react";
import {useWeather} from "../hooks/useWeather";
import {GlobalContext} from "../App";
import {Link, useHistory, useLocation} from "react-router-dom";

export const Card = memo(({city, setCityCoord}) => {

    const data = useWeather(city)
    const history = useHistory();
    const location = useLocation()
    const {dispatch} = useContext(GlobalContext)


    useEffect(() => {
        if (data && data.coord.lat && data.coord.lon && setCityCoord) {
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


    if (location.pathname === '/') {
        return (
            <div className="card">
                <Link to={`/city/${city.toLowerCase()}`} className="card__wrap">
                    <div className="mainInfo">
                        <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
                        <div className="title">{name}</div>
                        <div className="description">{description}</div>
                        <div className="temperature temperatureIcon">{temp.toFixed()}</div>
                    </div>
                    <div className="information">
                        <div>Humidity: {humidity}</div>
                        <div>Feels like: {feels_like}</div>
                    </div>
                </Link>
                <div className="actionButtonWrap">
                    <button onClick={handleOnEdit} className="actionButton">Edit</button>
                    <button onClick={handleOnDelete} className="actionButton">Delete</button>
                </div>
            </div>
        )
    }
    return (
        <div className="card">
            <div className="actionButtonWrap">
                <button onClick={handleOnBack} className="actionButton">Back</button>
            </div>
            <div className="mainInfo">
                <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
                <div className="title">{name}</div>
                <div className="description">{description}</div>
                <div className="temperature temperatureIcon">{temp.toFixed()}</div>
            </div>
            <div className="information">
                <div>Humidity: {humidity}</div>
                <div>Feels like: {feels_like}</div>
            </div>
        </div>
    )
})

