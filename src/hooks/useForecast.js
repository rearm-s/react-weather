import {useEffect, useState} from "react";
import {API_KEY} from "../settings";

export const useForecast = (coords) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        if(coords !== null) {
            const {lat, lon} = coords
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
                .then(res => res.json())
                .then(json => setData(json))
        }
    }, [coords])

    return data;

}