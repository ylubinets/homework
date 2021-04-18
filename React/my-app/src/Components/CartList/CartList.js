import React from "react";
import styles from './Cart.module.scss'
import Card from "../Card/Card";

const CartList = (props) => {

    const {items, cartArr, setCartArr, setFav, favArr} = props;

    function delFromCart(id) {
        let array = cartArr.filter(function (item) {
            return item !== id
        })
        setCartArr([...array])
        localStorage.setItem('cart', JSON.stringify([...array]))
    }



    return (
        <div>
            <h1 className={styles.title}>Cart:</h1>

            <div className={styles.cards_wrapper}>
                {!cartArr.length && <h3>Cart is empty!</h3>}
                {cartArr && [...new Set(cartArr)].map((cartItem) => {
                    let itemCart = items.filter((el) => {
                        if (el.id === cartItem) {
                            return el
                        } else {
                            return null
                        }
                    })

                    return (
                        <div>
                            {cartArr.length && <div>
                                    <Card
                                        key={itemCart.id}
                                        item={itemCart[0]}
                                        favArr={favArr}
                                        setFav={setFav}
                                        setDelFromCart={delFromCart}
                                        addOrDel={false}
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