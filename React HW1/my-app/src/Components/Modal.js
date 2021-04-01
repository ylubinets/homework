import React from "react";

class Modal extends React.Component {

    render() {
        const {headerText, closeButton, text, actions, status} = this.props
        return (
            <div onClick={(e)=> {
                if(e.target === document.querySelector(".modal-wrapper")) {
                    status()
                }
            }} className="modal-wrapper">
                <div className="modal">
                    <div className="modal__header">
                        {headerText}
                        {closeButton && (<span className="modal__header__cross" onClick={()=>{status()}}>X</span>)}
                    </div>
                    <p className="modal-txt">
                        {text}
                    </p>
                    <div className="modal__buttons-block">
                        {actions.map((button, key) => {
                            return (button)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
