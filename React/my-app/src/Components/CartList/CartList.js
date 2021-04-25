import React from "react";
import styles from './Cart.module.scss'
import Card from "../Card/Card";

const CartList = (props) => {

    const {items, cartArr, setFav, favArr, delFromCart} = props;

    const cartList = items.filter(item => {
        return !!cartArr.includes(item.id);
    })

    return (
        <div>
            <h1 className={styles.title}>Cart:</h1>

            <div className={styles.cards_wrapper}>
                {!cartArr.length && <h3 className={styles.empty}>Cart is empty!</h3>}
                {cartList.map((item) => {
                    return (
                        <div>
                            {cartArr.length &&
                            <div key={item.id}>
                                <Card
                                    item={item}
                                    favArr={favArr}
                                    setFav={setFav}
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

export default CartList