import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("items.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to load");
      })
      .then((item) => {
        setItems(item);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  return (
    <div className={"container"}>
      <Header />
      <Main items={items} error={error} />
    </div>
  );
};

export default App;
