// 함수형에서는 Component를 안쓰니가 impport안해도 됨
//import React from 'react';

import React, { Component } from 'react';
import './App.css';

// 함수형 Component
const MyName = ({ name, age }) => {
  return (
    <div className="MyNameStyle">
      제이름은 함수형이고, <b>{name} </b> 입니다. age ...
      {(function() {
        if (age <= 10) return <div>{age} + young </div>;
        else return <div>{age}</div>;
      })()}
    </div>
  );
};

MyName.defaultProps = {
  name: 'kim',
  age: '10'
};

// 기본 Compoment
/*
class MyName extends Component {
  static defaultProps = {
    name: 'WHO ARE YOU',
    age: '100000'
  };
  // 모든 Component는 render() 함수를 가지고 있어야 한다.
  // render() 함수는 JSX를 return 해야 한다.
  render() {
    return (
      <div className="MyNameStyle">
        안녕하세요.. 제이름은.. <b>{this.props.name}</b> 입니다. 나이는{' '}
        <b>{this.props.age}</b> 에요..
      </div>
    );
  }
}
*/
export default MyName;
