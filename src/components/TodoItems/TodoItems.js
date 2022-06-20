import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const { items, deleteItems } = props;

  return (
    <div className="ListItems">
      <div>
        <span className="title name">Name</span>
        <span className="title age">Age</span>
        <span className="title action">Action</span>
      </div>
      {!items.length ? (
        <h1>No items found</h1>
      ) : (
        items.map((item) => {
            return (
              <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={ () => deleteItems(item.id)}>&times;</span>
              </div>
            );
          })
      )}
    </div>
  );
};

export default TodoItems;
