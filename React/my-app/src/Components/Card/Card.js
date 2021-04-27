import React from "react";
import Button from "../Button/Button";
import Fav from "../Fav/Fav";
import style from "./Card.module.scss";
import PropTypes from "prop-types";

const Card = (props) => {
  const { item, addToCart, onFavClick, delFromCart, isDelBtn } = props;
  const { imgUrl, name, color, price, isFav } = item;

  return (
    <div>
      <div className={`${style.card}`}>
        <img className={`${style.card__img}`} src={imgUrl} alt="Card" />
        <Fav isFav={isFav} onFavClick={onFavClick} />
        <div className={`${style.card__title}`}>{name}</div>
        <div className={`${style.card__additional}`}>{color}</div>
        <div className={`${style.card__price}`}>Price: {price}</div>
        {isDelBtn ? (
          <Button
            text="Add to Cart"
            backgroundColor={"#00293C"}
            onClick={addToCart}
          />
        ) : (
          <Button
            text="Delete from cart"
            backgroundColor={"#F62A00"}
            onClick={delFromCart}
          />
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
  onFavClick: PropTypes.func,
  delFromCart: PropTypes.func,
  isDelBtn: PropTypes.bool,
};

export default Card;