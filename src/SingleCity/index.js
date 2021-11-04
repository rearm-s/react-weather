import './../App.css';
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Card} from "../Card";
import {useForecast} from "../hooks/useForecast";
import {DailyCard} from "../DailyCard";

export const SingleCity = () => {

    const {city} = useParams();
    const [cityCoord, setCityCoord] = useState(null)

    const data = useForecast(cityCoord)

    return (
        <div className="SingleCityWrap">
            <Card city={city} setCityCoord={setCityCoord}/>
            {data &&
            <div className="DailyCards">
                {data.daily.map((daily, index) => <DailyCard key={index} daily={daily} />)}
            </div>
            }
        </div>

    )
}

