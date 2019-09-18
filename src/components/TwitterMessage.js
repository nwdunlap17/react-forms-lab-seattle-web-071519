import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {remainingChar: this.props.maxChars};
  }

  updateField = (event) => {
    // console.log(this.props.maxChars)
    this.setState({
      [event.target.name]: event.target.value,
      remainingChar: this.props.maxChars-event.target.value.length
    })
  }

  render() {
    let remainingChar = this.props.maxChar
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.updateField} value={this.state.message}/>
        <p>Remaining Char: {this.state.remainingChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
