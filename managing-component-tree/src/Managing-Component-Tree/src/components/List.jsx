import React, { useState } from "react";

function List(props) {
  function handleClick() {
    return props.delete(props.id);
  }

  return (
    <div onClick={handleClick}>
      <li>{props.list}</li>
    </div>
  );
}

export default List;
