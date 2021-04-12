import React from "react";
import './App.scss'
import List from "./Components/List/List";

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <List/>
        </div>
    }
}

export default App;