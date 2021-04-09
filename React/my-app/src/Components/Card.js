import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import Fav from "./Fav";

class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            error: null,
            openModal: false,
        }

    }

    componentDidMount() {
        fetch("items.json")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to load");
            })
            .then((item) => {
                this.setState({ items: item});
            })
            .catch((e) => {
                this.setState({ error: e.message});
            });
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
        const {items, error, openModal, isFav} = this.state
         return (
             <div>
                 {error ? <div>{error}</div> :
                 <div className='cards_wrapper'>
                     {items.map((item) => (
                         <div className='card' key={item.id}>
                             <img className='card__img' src={item.imgUrl} alt='Card' />
                             <Fav/>
                             <div className='card__title'>{item.name}</div>
                             <div className='card__additional'>{item.color}</div>
                             <div className='card__price'>Price: {item.price}</div>
                             <Button text='Add to Card' backgroundColor={'Black'} onClick={this.openModal}/>
                         </div>
                     ))}
                 </div> }
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