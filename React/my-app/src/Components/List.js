import React from 'react';
import Card from "./Card";

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            error: null,
            favoritesArr: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
            cartArr: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        }
    }

    onClickSetFavorites = (fav) => {
        this.setState({favoritesArr: fav})
        localStorage.setItem('favorites', JSON.stringify(fav))
    }

    onClickAddToCart = (vendorCode) => {
        let array = [...this.state.cartArr, vendorCode]
        this.setState({cartArr: array})
        localStorage.setItem('cart', JSON.stringify(array))
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
        const {items, error, favoritesArr} = this.state;

        const cardItem = items.map((item) =>
                <Card key={item.id} item={item}
                      favoritesArr={favoritesArr}
                      onClickSetFavorites={this.onClickSetFavorites}
                      onClickAddToCart={this.onClickAddToCart}
                />
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