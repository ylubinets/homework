import React, {useState} from "react";
import List from "./List/List";
import CartList from "./CartList/CartList";
import FavList from "./FavList/FavList";
import {Switch, Route} from "react-router-dom";

const Main = (props) => {

    const {items, setItems, error, setError} = props
    const [favArr, setFavArr] = useState(localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : []);
    const [cartArr, setCartArr] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    function setFav(fav) {
        setFavArr(fav)
        localStorage.setItem('fav', JSON.stringify(fav))
    }

    function setAddToCart(id) {
        let array = [...cartArr, id]
        setCartArr(array)
        localStorage.setItem('cart', JSON.stringify(array))
    }

    function delFromCart(id) {
        let array = cartArr.filter(function (item) {
            return item !== id
        })
        setCartArr([...array])
        localStorage.setItem('cart', JSON.stringify([...array]))
    }

    return (
        <main>
            <Switch>
                <Route exact path='/' render={() =>
                    <List
                        items={items}
                        setItems={setItems}
                        favArr={favArr}
                        setFavArr={setFavArr}
                        setFav={setFav}
                        cartArr={cartArr}
                        setCartArr={setCartArr}
                        setAddToCart={setAddToCart}
                        delFromCart={delFromCart}
                        error={error}
                        setError={setError}/>
                }/>
                <Route path='/fav' render={() =>
                    <FavList
                        items={items}
                        setItems={setItems}
                        favArr={favArr}
                        setFavArr={setFavArr}
                        setFav={setFav}
                        cartArr={cartArr}
                        setCartArr={setCartArr}
                        setAddToCart={setAddToCart}
                        delFromCart={delFromCart}
                        error={error}
                        setError={setError}/>}/>
                <Route path='/cart' render={() =>
                    <CartList
                        items={items}
                        setItems={setItems}
                        favArr={favArr}
                        setFavArr={setFavArr}
                        setFav={setFav}
                        cartArr={cartArr}
                        setCartArr={setCartArr}
                        setAddToCart={setAddToCart}
                        delFromCart={delFromCart}
                        error={error}
                        setError={setError}/>}/>
            </Switch>
        </main>
    )
}
export default Main;