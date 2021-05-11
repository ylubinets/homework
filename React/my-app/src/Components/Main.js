import React, {useEffect} from "react";
import List from "./List/List";
import { Switch, Route } from "react-router-dom";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addModal, delModal, hideModal, loadItems, setCartArr} from "../Redux/actions";

const Main = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items)
  const error = useSelector((state) => state.items.error)
  const favArr = useSelector((state) => state.items.favArr);
  const cartArr = useSelector((state) => state.items.cartArr);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen)

  useEffect(() => {
    dispatch(loadItems())
  }, [dispatch]);

  function addToCart(id) {
    let array = [...cartArr, id];
    dispatch(setCartArr(array))
    localStorage.setItem("cart", JSON.stringify(array));
  }

  function delFromCart(id) {
    let array = cartArr.filter(function (item) {
      return item !== id;
    });
    dispatch(setCartArr([...array]));
    localStorage.setItem("cart", JSON.stringify([...array]));
  }

  const mapWithFav = (item) => {
    return {
      ...item,
      isFav: favArr.includes(item.id),
    };
  };

  const addAction = (id) => {
    dispatch(addModal(id))
  };
  const delAction = (id) => {
    dispatch(delModal(id))
  };

  const closeModal = () => {
    dispatch(hideModal())
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
              delFromCart={delAction}
              listEmpty={cartArr}
              error={error}
              title={"Cart:"}
            />
          )}
        />
      </Switch>
      {isModalOpen && (
        <Modal
          backgroundColor={
            isModalOpen.actionType === "add" ? "#1E656D" : "#e74c3c"
          }
          headerText={
            isModalOpen.actionType === "add" ? "Add to cart?" : "Delete?"
          }
          closeButton={true}
          text={"Are you sure?"}
          actions={[
            <Button
              key={"1"}
              backgroundColor="rgba(0,0,0,.3)"
              text={isModalOpen.actionType === "add" ? "Add" : "Delete"}
              className="modal__buttons"
              onClick={() => {
                isModalOpen.actionType === "add"
                  ? addToCart(isModalOpen.id)
                  : delFromCart(isModalOpen.id);
                closeModal();
              }}
            />,
            <Button
              key={"2"}
              backgroundColor="rgba(0,0,0,.3)"
              text="Cancel"
              className="modal__buttons"
              onClick={closeModal}
            />,
          ]}
          status={closeModal}
        />
      )}
    </main>
  );
};
export default Main;
