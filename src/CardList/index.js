import './../App.css';
import React, {useContext, useState} from "react";
import {Card} from "../Card";
import {GlobalContext} from "../App";


export const CardList = () => {

    const {state: {citiesList}} = useContext(GlobalContext)

    const [sortBy, setSortBy] = useState('asc');

    let sortedCitiesList = citiesList.sort();
    if(sortBy === 'asc') {
        sortedCitiesList.reverse();
    }

    const handleOnChange = (e) => {
        setSortBy(e.target.value)
    }

    return (
        <>
            <select className="Select" defaultValue={sortBy} onChange={handleOnChange}>
                <option value="asc">By name asc</option>
                <option value="desc">By name desc</option>
            </select>
            <div className="CardList">
                {
                    sortedCitiesList.map((city, index) => <Card city={city} key={index}/>)
                }
            </div>
        </>


    )
}


