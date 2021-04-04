import React from "react";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: null
        }
    }

    showFirstModal = () => {
        this.setState({
            status: 'firstModal'
        })
    }

    showSecondModal = () => {
        this.setState({
            status: 'secondModal'
        })
    }

    hideModal = () => {
        this.setState({
            status: null
        })
    }


    render() {
        return <div>
            <div className={"wrapper"}>
                <Button backgroundColor="orange" text="Open first modal"  onClick={this.showFirstModal} />
                <Button backgroundColor="salmon" text="Open second modal" onClick={this.showSecondModal} />
            </div>


            {this.state.status === "firstModal" &&
            <Modal headerText={"Do you want to delete this file?"} closeButton={true}
                   text={"Once you delete this file, it won’t be possible to undo this action"} actions={[
                <Button backgroundColor="rgba(0,0,0,.3)" text="Ok" onClick={this.test} className="modal__buttons"/>,
                <Button backgroundColor="rgba(0,0,0,.3)" text="Cancel" onClick={this.test} className="modal__buttons"/>
            ]} status={this.hideModal}/>}


            {this.state.status === "secondModal" &&
            <Modal headerText={"Lakers || Brooklyn"} closeButton={true}
                   text={"Lakers in 6"} actions={[
                <Button backgroundColor="rgba(0,0,0,.3)" text="Lakers" className="modal__buttons"/>,
                <Button backgroundColor="rgba(0,0,0,.3)" text="Lakers" className="modal__buttons"/>
            ]} status={this.hideModal}/>}


        </div>
    }
}

export default App;