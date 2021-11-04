import './App.css';
import {Input} from "./Input";
import {CardList} from "./CardList";
import {useCitiesList} from "./hooks/useCitiesList";
import {createContext} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {SingleCity} from "./SingleCity";

export const GlobalContext = createContext();

function App() {

    const [state, dispatch] = useCitiesList()

    return (
        <BrowserRouter>
            <GlobalContext.Provider value={{state, dispatch}}>
                <div className="Main">
                    <Route path="/home">
                        <Input/>
                        <CardList/>
                    </Route>
                    <Route path="/city/:city">
                        <SingleCity/>
                    </Route>
                </div>
            </GlobalContext.Provider>
        </BrowserRouter>
    );
}

export default App;
