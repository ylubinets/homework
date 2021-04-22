import React from 'react';
import Card from "../Card/Card";
import styles from './List.module.scss'

const List = (props) => {

    const {items, error, favArr, setFav, setAddToCart, cartArr, delFromCart} = props;

    return (
        <div>
            <h1 className={styles.title}>Shoes:</h1>
            <div className={`${styles.cards_wrapper}`}>
                {error ? <div>{error}</div> : items.map((item) =>
                    <Card key={item.id} item={item}
                          favArr={favArr}
                          setFav={setFav}
                          setAddToCart={setAddToCart}
                          setDelFromCart={delFromCart}
                          addOrDel={!cartArr.includes(item.id)}
                    />)}
            </div>
        </div>
    )
}

export default List