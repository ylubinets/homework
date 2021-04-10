import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import Fav from "./Fav";

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            openModal: false,
        }

    }
    openModal = () => {
        this.setState({
            openModal: true
        })
    }

    hideModal = () => {
        this.setState({
            openModal: false
        })
    }

    render() {
        const {openModal} = this.state
        const  {imgUrl, name, color, price} = this.props;

        return (
            <div>
                <div className='card'>
                    <img className='card__img' src={imgUrl} alt='Card' />
                    <Fav/>
                    <div className='card__title'>{name}</div>
                    <div className='card__additional'>{color}</div>
                    <div className='card__price'>Price: {price}</div>
                    <Button text='Add to Card' backgroundColor={'Black'} onClick={this.openModal}/>
                </div>

                {openModal === true &&
                <Modal headerText={"Add to card?"} closeButton={true}
                       text={"Lorem ipsum dolor"} actions={[
                    <Button backgroundColor="rgba(0,0,0,.3)" text="Add" className="modal__buttons" onClick={this.hideModal}/>,
                    <Button backgroundColor="rgba(0,0,0,.3)" text="Cancel" className="modal__buttons" onClick={this.hideModal}/>
                ]} status={this.hideModal}/>}
            </div>
        )
    }
}

export default Card;