import React, { useState } from "react";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleClick() {
    setListItem((prev) => [...prev, item]);
    setItem("");
  }

  function deleteItem(id) {
    setListItem((prev) => prev.filter((item, index) => id !== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={(e) => setItem(e.target.value)}
          type="text"
          value={item}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((list, id) => (
            <List key={id} list={list} id={id} delete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
