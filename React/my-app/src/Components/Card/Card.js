import React, {useState} from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Fav from "../Fav/Fav";
import style from './Card.module.scss'
import PropTypes from 'prop-types';

const Card = (props) => {

    const [modalAdd, setIsAddToCart] = useState(false);
    const [modalDel, setIsDeleteFromCart] = useState(false)

    function addToCart() {
        setIsAddToCart(true)
    }

    function deleteFromCart() {
        setIsDeleteFromCart(true)
    }

    function hideModal() {
        setIsAddToCart(false)
        setIsDeleteFromCart(false)
    }


    const {item, setAddToCart, onFavClick, setDelFromCart, isDelBtn} = props
    const {imgUrl, name, color, price, id, isFav} = item;

    return (
        <div>
            <div className={`${style.card}`}>
                <img className={`${style.card__img}`} src={imgUrl} alt='Card'/>
                <Fav isFav={isFav} onFavClick={onFavClick} />
                <div className={`${style.card__title}`}>{name}</div>
                <div className={`${style.card__additional}`}>{color}</div>
                <div className={`${style.card__price}`}>Price: {price}</div>
                {isDelBtn ?
                    <Button text='Add to Cart' backgroundColor={'#00293C'} onClick={addToCart}/> :
                    <Button text='Delete from cart' backgroundColor={'#F62A00'} onClick={deleteFromCart}/>
                }
            </div>

            {modalAdd &&
            <Modal backgroundColor={'#1E656D'} headerText={"Add to cart?"} closeButton={true}
                   text={"Lorem ipsum dolor"} actions={[
                <Button key={'1'} backgroundColor="rgba(0,0,0,.3)" text="Add" className="modal__buttons"
                        onClick={() => {
                            setAddToCart(id)
                            hideModal()
                        }}/>,
                <Button key={'2'} backgroundColor="rgba(0,0,0,.3)" text="Cancel" className="modal__buttons"
                        onClick={hideModal}/>
            ]} status={hideModal}/>}
            {modalDel &&
            <Modal backgroundColor={'#e74c3c'} headerText={'Delete?'} closeButton={true}
                   text={"Lorem ipsum dolor"} actions={[
                <Button key={'3'} backgroundColor="rgba(0,0,0,.3)" text="Delete" className="modal__buttons"
                        onClick={() => {
                            setDelFromCart(id)
                            hideModal()
                        }}/>,
                <Button key={'4'} backgroundColor="rgba(0,0,0,.3)" text="Cancel" className="modal__buttons"
                        onClick={hideModal}/>
            ]} status={hideModal}/>}
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    setAddToCart: PropTypes.func,
    favArr: PropTypes.array,
};

Card.defaultProps = {
    favArr: []
};


export default Card;