import React, { Component } from "react";
import AddForm from "./components/addForm";
import List from "./components/list";

class App extends Component {
  state = {
    user: [],
  };

  handleOnAdd = (name) => {
    const users = [...this.state.user, { id: Date.now(), name: name }];
    this.setState({ user: users });
  };

  handleDelete = (id) => {
    this.setState({
      user: this.state.user.filter((userId) => userId.id !== id),
    });
  };

  handleChange = (id, users) => {
    this.setState({
      user: this.state.user.map((userName) => {
        if (userName.id === id) {
          return {
            id,
            name: users,
          };
        } else {
          return userName;
        }
      }),
    });
  };

  render() {
    return (
      <>
        <AddForm onAdd={this.handleOnAdd} />
        <List
          onChange={this.handleChange}
          onDelete={this.handleDelete}
          key={this.state.user.id}
          user={this.state.user}
        />
      </>
    );
  }
}

export default App;
