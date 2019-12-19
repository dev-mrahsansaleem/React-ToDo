import React from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addTodoItem(todoValue) {
    if (todoValue !== "") {
      const newitem = {
        id: Date.now(),
        text: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newitem);

      this.setState({ list, newItem: "" });

      console.log(this.state);
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList, newItem: "" });
  }

  updateinput(input) {
    this.setState({ newItem: input });
  }
  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt={logo} width="100px" />
        <h1 className="app-title">TODO</h1>
        <div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="writer todo....!!!!"
            required
            value={this.state.newItem}
            onChange={e => this.updateinput(e.target.value)}
          ></input>
          <button
            className="add-btn"
            disabled={!this.state.newItem.length}
            onClick={() => this.addTodoItem(this.state.newItem)}
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    ></input>
                    {item.text}
                    <button
                      className="btn-delete"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
