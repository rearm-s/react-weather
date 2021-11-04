import './../App.css';
import React, {useContext, useRef} from "react";
import {GlobalContext} from "../App";


export const Input = () => {

    const ref = useRef()
    const {state: {inputValue, editingCity}, dispatch} = useContext(GlobalContext)

    const handleOnChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: e.target.value
        })
    }

    const handleOnAdd = (e) => {
        if(inputValue.length) {
            dispatch({
                type: 'ADD_CITY',
                payload: inputValue
            })
            dispatch({
                type: 'RESET_INPUT_VALUE'
            })
            ref.current.focus()
        }
    }


    const handleOnDone = (e) => {
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
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange} value={inputValue} ref={ref} />
            {
                editingCity
                    ? <button className="Button"onClick={handleOnDone} >Edit</button>
                    : <button className="Button"onClick={handleOnAdd} >+</button>
            }


        </div>
    )
}


