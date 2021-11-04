import './App.css';
import {Input} from "./Input";
import {CardList} from "./CardList";
import {useCitiesList} from "./hooks/useCitiesList";
import {createContext} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SingleCity} from "./SingleCity";

export const GlobalContext = createContext();

function App() {

    const [state, dispatch] = useCitiesList()

    return (
        <BrowserRouter>
            <GlobalContext.Provider value={{state, dispatch}}>
                <div className="Main">
                    <Switch>
                        <Route exact path="/">
                            <Input/>
                            <CardList/>
                        </Route>
                        <Route path="/city/:city">
                            <SingleCity/>
                        </Route>
                    </Switch>
                </div>
            </GlobalContext.Provider>
        </BrowserRouter>
    );
}

export default App;
