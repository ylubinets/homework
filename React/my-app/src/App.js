import React from "react";
import './App.scss'
import List from "./Components/List/List";
import Header from "./Components/Header/Header";
import CartList from "./Components/CartList/CartList";
import FavList from "./Components/FavList/FavList";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path='/' component={List}/>
                <Route path='/fav' component={FavList}/>
                <Route path='/cart' component={CartList}/>
            </BrowserRouter>
        </div>
    )
}

export default App;