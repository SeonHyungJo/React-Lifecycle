import React from "react"

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    console.log(this.state)
    console.log("cons")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")
    console.log(props)
    console.log(state)
    if (!props.add) {
      return { list: [] }
    } else {
      return null
    }
  }

  addRow = () => {
    this.setState({
      list: [Math.abs(Math.random() * 100), ...this.state.list]
    })
  }

  render() {
    console.log("children render")
    return (
      <div>
        {this.state.list.map(val =>
          <div key={val.toFixed(5)}>
            {val}
          </div>
        )}
        <button disabled={!this.props.add} onClick={this.addRow}>
          Generate Number
        </button>
      </div>
    )
  }
}

export default Card
