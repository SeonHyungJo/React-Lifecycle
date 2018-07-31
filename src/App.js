import React, { Component } from "react"
import "./App.css"
import Card from "./Card"

class App extends Component {
  /* Mounting Constructor */
  constructor() {
    super()
    console.log("constructor")
    this.state = {
      add: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")
    return null
  }

  handleClick = () => {
    this.setState({
      add: !this.state.add
    })
  }

  render() {
    console.log("render")
    return (
      <div>
        {this.state.add === true ? <Card add={this.state.add} /> : null}
        <button onClick={this.handleClick}>
          {this.state.add ? "Disable Add" : "Enable Add"}
        </button>
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate")
    return "snapshot TEST"
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate")
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
}

export default App
