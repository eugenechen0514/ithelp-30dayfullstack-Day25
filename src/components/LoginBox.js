import React, { Component } from 'react';

class LoginBox extends Component {
  render() {
    return (
      <div>
        message: {this.props.message}
        <button onClick={this.props.onClickSubmit}>Submit</button>
      </div >
    );
  }
}

export default LoginBox;
