import './../App.css';
import React, {useContext, useRef} from "react";
import {GlobalContext} from "../App";


export const Input = () => {

    const ref = useRef()
    const {state: {inputValue, editingCity, citiesList}, dispatch} = useContext(GlobalContext)

    const handleOnChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: e.target.value
        })
    }

    const handleOnAdd = () => {
        if(inputValue.length && !citiesList.includes(inputValue)) {
            dispatch({
                type: 'ADD_CITY',
                payload: inputValue
            })
            dispatch({
                type: 'RESET_INPUT_VALUE'
            })
            ref.current.focus()
        }
        if(citiesList.includes(inputValue)) {
            alert('This city added yet')
        }
    }


    const handleOnDone = () => {
        if(inputValue.length) {
            dispatch({
                type: 'EDIT_CITY_DONE',
                payload: inputValue
            })
            dispatch({
                type: 'RESET_INPUT_VALUE'
            })
            ref.current.focus()
        }
    }

    return (
        <div className="inputWrap">
            <input className="input" onChange={handleOnChange} value={inputValue} ref={ref} placeholder="Type your city here, for example - Kyiv" />
            {
                editingCity
                    ? <button className="button"onClick={handleOnDone}>Edit</button>
                    : <button className="button"onClick={handleOnAdd} >Add city</button>
            }


        </div>
    )
}


