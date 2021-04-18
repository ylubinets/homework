import React, {useState} from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Fav from "../Fav/Fav";
import style from './Card.module.scss'
import PropTypes from 'prop-types';

const Card = (props) => {

    const [isAddToCart, setIsAddToCart] = useState(false);
    const [isDeleteFromCart, setIsDeleteFromCart] = useState(false)

    function addToCart() {
        setIsAddToCart(true)
    }

    function deleteFromCart() {
        setIsDeleteFromCart(true)
    }

    function hideModal() {
        setIsAddToCart(false)
    }


    const {item, setAddToCart, favArr, setFav, setDelFromCart, addOrDel} = props
    const  {imgUrl, name, color, price, id} = item;

    return (
        <div>
            <div className={`${style.card}`}>
                <img className={`${style.card__img}`} src={imgUrl} alt='Card' />
                <Fav favArr={favArr} setFav={setFav} id={id}/>
                <div className={`${style.card__title}`}>{name}</div>
                <div className={`${style.card__additional}`}>{color}</div>
                <div className={`${style.card__price}`}>Price: {price}</div>
                {addOrDel ?
                    <Button text='Add to Cart' backgroundColor={'Black'} onClick={addToCart}/> :
                    <Button text='Delete from cart' backgroundColor={'Red'} onClick={deleteFromCart}/>
                }
            </div>

            {isAddToCart &&
            <Modal backgroundColor={'limegreen'} headerText={"Add to cart?"} closeButton={true}
                   text={"Lorem ipsum dolor"} actions={[
                <Button key={'1'} backgroundColor="rgba(0,0,0,.3)" text="Add" className="modal__buttons" onClick={()=>{
                    setAddToCart(id)
                    hideModal() }}/>,
                <Button key={'2'} backgroundColor="rgba(0,0,0,.3)" text="Cancel" className="modal__buttons" onClick={hideModal}/>
            ]} status={hideModal}/>}
            {isDeleteFromCart &&
            <Modal backgroundColor={'#e74c3c'} headerText={'Delete?'} closeButton={true}
                   text={"Lorem ipsum dolor"} actions={[
                <Button key={'1'} backgroundColor="rgba(0,0,0,.3)" text="Delete" className="modal__buttons" onClick={()=>{
                    setDelFromCart(id)
                    hideModal() }}/>,
                <Button key={'2'} backgroundColor="rgba(0,0,0,.3)" text="Cancel" className="modal__buttons" onClick={hideModal}/>
            ]} status={hideModal}/>}
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    setAddToCart: PropTypes.func.isRequired,
    favArr: PropTypes.array,
    setFav: PropTypes.func.isRequired,
};

Card.defaultProps = {
    favArr: []
};


export default Card;