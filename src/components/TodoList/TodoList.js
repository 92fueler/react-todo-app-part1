import React, { Component, Fragment } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.textInput = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleInputChange() {
    const value = this.textInput.current.value;
    this.setState(() => ({
      inputValue: value,
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: "",
    }));
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div className="todolist">
          <label htmlFor="insertArea">Please enter your Todo Item here: </label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={this.textInput}
          />
          <button className="btn" onClick={this.handleBtnClick}>
            Submit
          </button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
