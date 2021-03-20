import React, { Component } from "react";

class AddForm extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type='text' />
        <button>추가</button>
      </form>
    );
  }
}

export default AddForm;
