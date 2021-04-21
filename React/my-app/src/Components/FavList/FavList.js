import React from "react";
import styles from './FavList.module.scss'
import Card from "../Card/Card";

const FavList = (props) => {

    const {items, favArr, setFav, setAddToCart, cartArr, delFromCart} = props;

    const favList = items.filter(item => {
        return !!favArr.includes(item.id);
    })

    return (
        <div>
            <h1 className={styles.title}>Favourites:</h1>

            <div className={styles.cards_wrapper}>
                {!favArr.length && <h3>FavList is empty!</h3>}
                {favList.map((item) => {
                    return (
                        <div>
                            {favArr.length &&
                            <div key={item.id}>
                                <Card
                                    item={item}
                                    favArr={favArr}
                                    setFav={setFav}
                                    setAddToCart={setAddToCart}
                                    setDelFromCart={delFromCart}
                                    addOrDel={!cartArr.includes(item.id)}
                                />
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FavList