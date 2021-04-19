import React, {useEffect, useState} from "react";
import './App.scss'
import List from "./Components/List/List";
import Header from "./Components/Header/Header";
import CartList from "./Components/CartList/CartList";
import FavList from "./Components/FavList/FavList";
import {Switch, Route} from "react-router-dom";
import Card from "./Components/Card/Card";

const Main = () => {

    const [items, setItems] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []);
    const [favArr, setFavArr] = useState( localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : []);
    const [cartArr, setCartArr] = useState( localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const [error, setError] = useState( null);


    function setFav(fav) {
        setFavArr(fav)
        localStorage.setItem('fav', JSON.stringify(fav))
    }

    function setAddToCart(id) {
        let array = [...cartArr, id]
        setCartArr(array)
        localStorage.setItem('cart', JSON.stringify(array))
    }

    useEffect(() => {
        fetch("items.json")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to load");
            })
            .then((item) => {
                setItems(item);
                localStorage.setItem('items', JSON.stringify(item));
            })
            .catch((e) => {
                setError(e.message);
            });
    })

    return (
        <main>
            <Switch>
                <Route exact path='/' render={() =>
                    <List
                        items={items}
                        setItems={setItems}
                        favArr={favArr}
                        setFavArr={setFavArr}
                        cartArr={cartArr}
                        setCartArr={setCartArr}
                        setFav={setFav}
                        setAddToCart={setAddToCart}
                        error={error}
                        setError={setError}/>
                }/>
                <Route path='/fav' render={() =>
                    <FavList
                        items={items}
                        favArr={favArr}
                        setFavArr={setFavArr}
                        setFav={setFav}
                        setAddToCart={setAddToCart}/>}/>
                <Route path='/cart' render={() =>
                     <CartList
                        items={items}
                        favArr={favArr}
                        setFav={setFav}
                        cartArr={cartArr}
                        setCartArr={setCartArr}/>}/>
            </Switch>
        </main>
    )
}


const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;