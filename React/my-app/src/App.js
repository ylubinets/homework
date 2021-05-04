import React, { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "./Redux/actions";

const App = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);
  const error = useSelector((state) => state.items.error)

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  return (
    <div className={"container"}>
      <Header />
      <Main items={items} error={error}/>
    </div>
  );
};

export default App;
