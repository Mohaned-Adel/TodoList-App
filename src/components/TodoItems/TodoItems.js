import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const { items, deleteItems } = props;

//   const listItems = items.map((item) => {
//     return (
//       <div key={item.id}>
//         <span>{item.name}</span>
//         <span>{item.age}</span>
//         <span onClick={ () => deleteItems(item.id)}>&times;</span>
//       </div>
//     );
//   });
  return (
    <div className="ListItems">
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      {!items.length ? (
        <h1>No items found</h1>
      ) : (
        items.map((item) => {
            return (
              <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={ () => deleteItems(item.id)}>&times;</span>
              </div>
            );
          })
      )}
    </div>
  );
};

export default TodoItems;
