import React from 'react';
import Card from "./Card";

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            error: null
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

    render() {
        const {items, error} = this.state;

        const cardItem = items.map((item) =>
                <Card key={item.id} name={item.name} color={item.color} imgUrl={item.imgUrl} price={item.price}/>
            )
        return (
            <div>
                <div className='cards_wrapper'>
                    {error ? <div>{error}</div> : cardItem}
                </div>
            </div>
        )
    }
}

export default List