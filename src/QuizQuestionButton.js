import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  handleClick() {
    this.setState({ status: "clicked" });
    this.props.clickHandler(this.props.button_text);
  }

  render() {
    return (
      <li key={this.props.key}>
        <button
          className={this.state.status}
          onClick={this.handleClick.bind(this)}
        >
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;
