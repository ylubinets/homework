import React, {useState} from "react";
import List from "./List/List";
import {Switch, Route} from "react-router-dom";

const Main = (props) => {

    const {items, error, setError} = props
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
                        favArr={favArr}
                        setFav={setFav}
                        cartArr={cartArr}
                        setAddToCart={setAddToCart}
                        delFromCart={delFromCart}
                        error={error}
                        setError={setError}
                        title={'Shoes:'}
                    />
                }/>
                <Route path='/fav' render={() =>
                    <List
                        items={items.filter(item => {
                            return !!favArr.includes(item.id);
                        })}
                        favArr={favArr}
                        setFav={setFav}
                        cartArr={cartArr}
                        setAddToCart={setAddToCart}
                        delFromCart={delFromCart}
                        error={error}
                        setError={setError}
                        title={'Favourites:'}
                    />
                }/>
                <Route path='/cart' render={() =>
                    <List
                        items={items.filter(item => {
                            return !!cartArr.includes(item.id);
                        })}
                        favArr={favArr}
                        setFav={setFav}
                        cartArr={cartArr}
                        delFromCart={delFromCart}
                        error={error}
                        setError={setError}
                        title={'Cart:'}
                    />
                }/>
            </Switch>
        </main>
    )
}
export default Main;