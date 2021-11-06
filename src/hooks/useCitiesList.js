import {useEffect, useReducer} from "react";


const initialState = {
    inputValue: '',
    editingCity: '',
    citiesList: JSON.parse(localStorage.getItem('citiesList')) || []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return {
                ...state,
                citiesList: [...state.citiesList, action.payload]
            }
        case 'DELETE_CITY':
            return {
                ...state,
                citiesList: state.citiesList.filter(city => city !== action.payload)
            }
        case 'EDIT_CITY':
            return {
                ...state,
                inputValue: action.payload,
                editingCity: action.payload
            }
        case 'EDIT_CITY_DONE':
            const filteredArray = state.citiesList.filter(city => city !== state.editingCity)
            return {
                ...state,
                citiesList: [...filteredArray, action.payload],
                inputValue: '',
                editingCity: ''
            }
        case 'CHANGE_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload
            }
        case 'RESET_INPUT_VALUE':
            return {
                ...state,
                inputValue: ''
            }
        case 'ADD_AFTER':
            return {
                ...state,
                citiesList: [...state.citiesList, action.payload]
            }
        default:
            return state
    }
}

export const useCitiesList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const {citiesList} = state

    useEffect(() => {
        localStorage.setItem('citiesList', JSON.stringify(citiesList))
    }, [citiesList])

    return [state, dispatch]

}