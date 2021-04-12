import React from "react";
import PropTypes from 'prop-types';
import style from './Modal.module.scss'

class Modal extends React.Component {
    render() {
        const {headerText, closeButton, text, status, actions} = this.props;
        return (
            <div>
                <div className={`${style.modal}`}>
                    <div className={`${style.modal__header}`}>
                        {headerText}
                        {closeButton && <span className={`${style.modal__header__cross}`} onClick={() =>{status()}}>X</span>}
                    </div>
                    <div className={`${style.modal__txt}`}>
                        {text}
                    </div>
                    <div className='modal__buttons-block'>
                        {actions.map((button, key) => {
                            return (button)
                        })}
                    </div>
                </div>
                <div className={`${style.overlay}`} onClick={() => status()}/>
            </div>
        );
    }
}

Modal.propTypes = {
    closeButton: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string,
};



export default Modal;
