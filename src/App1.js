import React, { Component, Fragment } from 'react';

class App1 extends Component {
  render() {
    let value = 1;

    console.log();
    value += 1;

    return (
      <fragment>
        <div>
          {((arg1 = value, arg2 = 1) => {
            1;
            return (
              <div>
                <h2>{arg1 + arg2}</h2>
              </div>
            );
          })()}
        </div>
        <div>
          {(function() {
            if (value === 1) return <div>yes +{value}</div>;
            else if (value === 2) return <div> uhhh + {value}</div>;
            else return <div>OMG+{value}</div>;
          })()}
        </div>
        <div>{value === 1 ? <div>yes!!!</div> : <div>no!!!</div>}</div>
        <div>{value === 1 && <div>OK!!</div>}</div>
      </fragment>
    );
  }
}

export default App1;
