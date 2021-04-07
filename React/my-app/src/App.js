import React from "react";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import './App.scss'
import Card from "./Components/Card";
import List from "./Components/List";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: null
        }
    }

    render() {
        return <div>
            <List/>
        </div>
    }
}

export default App;