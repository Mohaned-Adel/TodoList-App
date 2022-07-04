import React, { Component } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoItems from "./components/TodoItems/TodoItems";

class App extends Component {

  state = {
    items: [
      { id: 1, name: "Mohaned", age: 26 },
      { id: 2, name: "Adel", age: 27 },
      { id: 3, name: "mido", age: 30 },
    ],
  };

  deleteItems = (id) => {
    console.log(id)
    let items = this.state.items;
    let index = items.findIndex( item => item.id === id)
    items.splice(index, 1)
    this.setState({items})
  }

  addItem = (item) => {
    item.id = item.name
    let items = this.state.items
    items.push(item)
    this.setState({items})
    console.log(this.state)
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems}/>
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
