import React, { Component } from 'react';

class Main extends Component {

  testState = (e) => {
    console.log(this.props.firstReducer.testing);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to React</h1>
        </header>
        <pre>
          {JSON.stringify(this.props)}
        </pre>
        <button onClick={this.props.firstAction}>Call firstAction Redux Action</button>
        <button onClick={this.props.secondAction}>Call secondAction Redux Action</button>      
        <button onClick={this.testState}>state test (check console)</button>
      </div>
    );
  }
}

export default Main;