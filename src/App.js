import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Card from "./Card"

class App extends Component {
  state = {
    add: false
  }

  handleClick = () => {
    this.setState({
      add: !this.state.add
    })
  }

  render() {
    console.log(this.state.add)
    return (
      <div>
        <Card add={this.state.add} />
        <button onClick={this.handleClick}>
          {this.state.add ? "Disable Add" : "Enable Add"}
        </button>
      </div>
    )
  }
}

export default App
