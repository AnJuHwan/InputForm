import React, { Component } from "react";

class Item extends Component {
  inputRef = React.createRef();

  state = {
    toggleEdit: false,
    name: "",
  };

  handleDelete = () => {
    const { onDelete, user } = this.props;
    onDelete(user.id);
  };

  handleUpdate = () => {
    const { user } = this.props;

    this.setState({ name: user.name });

    if (this.state.toggleEdit) {
      this.props.onChange(user.id, this.state.name);
    }
    this.setState({
      toggleEdit: !this.state.toggleEdit,
    });
  };

  handleChange = (e) => {
    [e.target.name] = e.target.value;
    const name = this.inputRef.current.value;
    this.setState({ name: name });
  };

  render() {
    const { name } = this.props.user;
    const { toggleEdit } = this.state;
    return (
      <li>
        {toggleEdit ? (
          <input
            name='name'
            value={this.state.name}
            ref={this.inputRef}
            onChange={this.handleChange}
            type='text'
          />
        ) : (
          <span> {name} </span>
        )}

        <button onClick={this.handleUpdate}>
          {toggleEdit ? "적용" : "수정"}
        </button>
        <button onClick={this.handleDelete}>삭제</button>
      </li>
    );
  }
}

export default Item;
