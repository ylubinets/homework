import React from "react";
import Card from "../Card/Card";
import styles from "./List.module.scss";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const List = (props) => {
    const {
        items,
        error,
        addToCart,
        delFromCart,
        title,
        listEmpty,
    } = props;

    const cartArr = useSelector((state) => state.items.cartArr);

    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={`${styles.cards_wrapper}`}>
                {!listEmpty.length && (
                    <h3 className={styles.nothing}>Nothing here yet!</h3>
                )}
                {error ? (
                    <div>{error}</div>
                ) : (
                    items.map((item) => (
                        <Card
                            key={item.id}
                            item={item}
                            addToCart={() => addToCart(item.id)}
                            delFromCart={() => delFromCart(item.id)}
                            isDelBtn={!cartArr.includes(item.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    onFavClick: PropTypes.func,
    addToCart: PropTypes.func,
    delFromCart: PropTypes.func,
};

export default List;
