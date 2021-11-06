import {useEffect, useState} from "react";
import {API_KEY} from "../settings";

export const useWeather = (city) => {

    const [data, setData] = useState(null);
    useEffect(() => {
            try {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                    .then(res => res.json())
                    .then(json => setData(json))
                    .catch(error => alert('some error'))
            }
            catch(e) {
                alert('error')
            }
    }, [city])

    if(data?.cod === "404") return null;

    return data;

}