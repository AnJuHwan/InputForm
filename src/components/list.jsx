import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.user.map((user) => (
          <Item
            onChange={this.props.onChange}
            onDelete={this.props.onDelete}
            key={user.id}
            user={user}
          />
        ))}
      </ul>
    );
  }
}

export default List;
