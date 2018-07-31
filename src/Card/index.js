import React from "react"

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
      list: []
    }
    console.log("constructor_Card")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps_Card")
    if (props.add) {
      return { add: props.add }
    } else {
      return { add: props.add, list: [] }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate_Card")
    return true
  }

  addRow = () => {
    this.setState({
      list: [Math.abs(Math.random() * 100), ...this.state.list]
    })
  }

  render() {
    console.log("render_Card")
    return (
      <div>
        {this.state.list.map(val =>
          <div key={val.toFixed(5)}>
            {val}
          </div>
        )}
        <button disabled={!this.state.add} onClick={this.addRow}>
          Generate Number
        </button>
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate_Card")
    return "snapshot TEST_Card"
  }

  componentDidMount() {
    console.log("componentDidMount_Card")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate_Card")
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount_Card")
  }
}

export default Card
