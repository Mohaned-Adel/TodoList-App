import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === "" || e.target.age.value === "") {
      return ;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name ...."
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Enter your age ...."
            id="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
