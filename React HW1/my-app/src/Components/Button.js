import React from "react";

class Button extends React.Component {
    render() {
        const {text, backgroundColor, onClick} = this.props;

        return <div>
            <button className='btn' style={{backgroundColor: backgroundColor}} onClick={onClick}>{text}</button>
        </div>
    }
}

export default Button