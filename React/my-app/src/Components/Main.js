import React, {useState} from "react";
import List from "./List/List";
import {Switch, Route} from "react-router-dom";

const Main = (props) => {

    const {items, error} = props
    const [favArr, setFavArr] = useState(localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : []);
    const [cartArr, setCartArr] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

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

    function onFavClick (id) {
        let fav;

        if(favArr.includes(id)) {
            fav = favArr.filter((n) => n !== id)
        } else {
            fav = [...favArr, id]
        }
        setFavArr(fav)
        localStorage.setItem('fav', JSON.stringify(fav))
    }

    const mapWithFav = (item) => {
        return {
            ...item,
            isFav: favArr.includes(item.id)
        }
    }

    return (
        <main>
            <Switch>
                <Route exact path='/' render={() =>
                    <List
                        items={items.map(mapWithFav)}
                        cartArr={cartArr}
                        onFavClick={onFavClick}
                        setAddToCart={setAddToCart}
                        delFromCart={delFromCart}
                        listEmpty={items}
                        error={error}
                        title={'Shoes:'}
                    />
                }/>
                <Route path='/fav' render={() =>
                    <List
                        items={items.filter(item => favArr.includes(item.id)).map(mapWithFav)}
                        cartArr={cartArr}
                        onFavClick={onFavClick}
                        setAddToCart={setAddToCart}
                        delFromCart={delFromCart}
                        listEmpty={favArr}
                        error={error}
                        title={'Favourites:'}
                    />
                }/>
                <Route path='/cart' render={() =>
                    <List
                        items={items.filter(item => cartArr.includes(item.id)).map(mapWithFav)}
                        cartArr={cartArr}
                        onFavClick={onFavClick}
                        delFromCart={delFromCart}
                        listEmpty={cartArr}
                        error={error}
                        title={'Cart:'}
                    />
                }/>
            </Switch>
        </main>
    )
}
export default Main;