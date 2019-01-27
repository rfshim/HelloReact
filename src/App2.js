import React, { Component, Fragment } from 'react';
import './App.css';

class App2 extends Component {
  render() {
    const myStyle = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '16px'
    };

    return (
      <fragment>
        <div>
          <h1 // ok this si working !!!
          >
            React
          </h1>
          {/* OK this is comment of React*/}
        </div>
        <div style={myStyle}>Hello!!!</div>
        <div className="App">Hi!!</div>
      </fragment>
    );
  }
}

export default App2;
