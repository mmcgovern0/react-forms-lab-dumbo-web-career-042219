import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message"
          onChange={event => this.setState({message: event.target.value})}
          value={this.state.message}
        />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
