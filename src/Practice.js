import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import React from 'react';
import './App.css';

//A Function component accepts properties and returns a React element
//NOTE: Always start component names with a capital letter
//NOTE: Props are read-only: never modify props
//NOTE: Use STATE to modify stuff
function Practice(props) {
  return (
    <Clock />
  )
}

//A fine component that doesn't modify the properties
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, World</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

//The Clock, but as a class so we can use state
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  //Runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}


export default Practice;
