import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import propTypes from 'prop-types';
import style from './List.module.scss'

const List = (props) => {

    const {items, error, favArr, setFav, setAddToCart, setDelFromCart} = props;

    return (
        <div>
            <div className={`${style.cards_wrapper}`}>
                {error ? <div>{error}</div> : items.map((item) =>
                    <Card key={item.id} item={item}
                          favArr={favArr}
                          setFav={setFav}
                          setAddToCart={setAddToCart}
                          setDelFromCart={setDelFromCart}
                          addOrDel={true}
                    />)}
            </div>
        </div>
    )
}

export default List