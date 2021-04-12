import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import Fav from "./Fav";
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            isAddToCart: false
        }

    }
    addToCart = () => {
        this.setState({isAddToCart: true})
    }

    hideModal = () => {
        this.setState({isAddToCart: false})
    }

    render() {
        const {item, onClickAddToCart, favoritesArr, onClickSetFavorites} = this.props
        const  {imgUrl, name, color, price, id} = item;

        return (
            <div>
                <div className='card'>
                    <img className='card__img' src={imgUrl} alt='Card' />
                    <Fav favoritesArr={favoritesArr} onClickSetFavorites={onClickSetFavorites} id={id}/>
                    <div className='card__title'>{name}</div>
                    <div className='card__additional'>{color}</div>
                    <div className='card__price'>Price: {price}</div>
                    <Button text='Add to Card' backgroundColor={'Black'} onClick={this.addToCart}/>
                </div>

                {this.state.isAddToCart &&
                <Modal headerText={"Add to card?"} closeButton={true}
                       text={"Lorem ipsum dolor"} actions={[
                    <Button backgroundColor="rgba(0,0,0,.3)" text="Add" className="modal__buttons" onClick={()=>{
                        onClickAddToCart(id)
                        this.hideModal() }}/>,
                    <Button backgroundColor="rgba(0,0,0,.3)" text="Cancel" className="modal__buttons" onClick={this.hideModal}/>
                ]} status={this.hideModal}/>}
            </div>
        )
    }
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    onClickAddToCart: PropTypes.func.isRequired,
    favoritesArr: PropTypes.array,
    onClickSetFavorites: PropTypes.func.isRequired,
};

Card.defaultProps = {
    favoritesArr: []
};


export default Card;