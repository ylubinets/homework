import React from "react";
import styles from './FavList.module.scss'
import Card from "../Card/Card";

const FavList = (props) => {

    const {items, favArr, setFav, setAddToCart} = props;

    return (
        <div>
            <h1 className={styles.title}>Favourites:</h1>

            <div className={styles.cards_wrapper}>
                {!favArr.length && <h3>FavList is empty!</h3>}
                {favArr && favArr.map((favItem) => {
                    let itemFav = items.filter((item) => {
                        if (item.id === favItem) {
                            return item
                        } else {
                            return null
                        }
                    })

                    return (
                        <div>
                            {favArr.length && <div>
                                <div key={favItem}>
                                    <Card
                                        item={itemFav[0]}
                                        favArr={favArr}
                                        setFav={setFav}
                                        setAddToCart={setAddToCart}
                                        addOrDel={true}
                                    />
                                </div>
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FavList