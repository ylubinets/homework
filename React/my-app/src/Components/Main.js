import React, { useState } from "react";
import List from "./List/List";
import { Switch, Route } from "react-router-dom";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

const Main = ({items, error}) => {

  const [favArr, setFavArr] = useState(
    localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []
  );
  const [cartArr, setCartArr] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [actionModal, setActionModal] = useState(null);

  function addToCart(id) {
    let array = [...cartArr, id];
    setCartArr(array);
    localStorage.setItem("cart", JSON.stringify(array));
  }

  function delFromCart(id) {
    let array = cartArr.filter(function (item) {
      return item !== id;
    });
    setCartArr([...array]);
    localStorage.setItem("cart", JSON.stringify([...array]));
  }

  function onFavClick(id) {
    let fav;

    if (favArr.includes(id)) {
      fav = favArr.filter((n) => n !== id);
    } else {
      fav = [...favArr, id];
    }
    setFavArr(fav);
    localStorage.setItem("fav", JSON.stringify(fav));
  }

  const mapWithFav = (item) => {
    return {
      ...item,
      isFav: favArr.includes(item.id),
    };
  };

  const addAction = (id) => {
    setActionModal({
      actionType: "add",
      id: id,
    });
  };
  const delAction = (id) => {
    setActionModal({
      actionType: "del",
      id: id,
    });
  };

  const hideModal = () => {
    setActionModal(null);
  };

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <List
              items={items.map(mapWithFav)}
              cartArr={cartArr}
              onFavClick={onFavClick}
              addToCart={addAction}
              delFromCart={delAction}
              listEmpty={items}
              error={error}
              title={"Shoes:"}
            />
          )}
        />
        <Route
          path="/fav"
          render={() => (
            <List
              items={items
                .filter((item) => favArr.includes(item.id))
                .map(mapWithFav)}
              cartArr={cartArr}
              onFavClick={onFavClick}
              addToCart={addAction}
              delFromCart={delAction}
              listEmpty={favArr}
              error={error}
              title={"Favourites:"}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <List
              items={items
                .filter((item) => cartArr.includes(item.id))
                .map(mapWithFav)}
              cartArr={cartArr}
              onFavClick={onFavClick}
              delFromCart={delAction}
              listEmpty={cartArr}
              error={error}
              title={"Cart:"}
            />
          )}
        />
      </Switch>
      {actionModal && (
        <Modal
          backgroundColor={
            actionModal.actionType === "add" ? "#1E656D" : "#e74c3c"
          }
          headerText={
            actionModal.actionType === "add" ? "Add to cart?" : "Delete?"
          }
          closeButton={true}
          text={"Are you sure?"}
          actions={[
            <Button
              key={"1"}
              backgroundColor="rgba(0,0,0,.3)"
              text={actionModal.actionType === "add" ? "Add" : "Delete"}
              className="modal__buttons"
              onClick={() => {
                actionModal.actionType === "add"
                  ? addToCart(actionModal.id)
                  : delFromCart(actionModal.id);
                hideModal();
              }}
            />,
            <Button
              key={"2"}
              backgroundColor="rgba(0,0,0,.3)"
              text="Cancel"
              className="modal__buttons"
              onClick={hideModal}
            />,
          ]}
          status={hideModal}
        />
      )}
    </main>
  );
};
export default Main;
