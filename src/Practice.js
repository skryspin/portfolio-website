import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import React from 'react';
import './App.css';

//A Function component accepts properties and returns a React element
//NOTE: Always start component names with a capital letter
//NOTE: Props are read-only: never modify props
//NOTE: Use STATE to modify stuff
//NOTE: There are three things you should know about setState()
// 1) Do Not Modify State directly
//
// Wrong
// this.state.comment = 'Hello';
//
//correct
//this.setState({comment: 'Hello'});
//
// The only place where you can assign this.state is the constructor
//
// ---- States may be updated Asynchronously ---
//
// WRONG
// this.setState({
//    counter: this.state.counter + this.props.increment,
// })/
//
// CORRECT
// this.setState((state, props) => ({
//      counter: state.counter + props.increment
//}))/
//
// ---- State updates are Merged ----
// When you call setState(), React merges the object you provide into the current state
//
//For example, your state may contain several independent variables:
//  constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //     comments: []
  //   };
  // }
//Then you can update them independently with separate setState() calls:
//  componentDidMount() {
  //   fetchPosts().then(response => {
  //     this.setState({
  //       posts: response.posts
  //     });
  //   });
  //
  //   fetchComments().then(response => {
  //     this.setState({
  //       comments: response.comments
  //     });
  //   });
  // }
  // --- The Data Flows Down---
  // Any state is always owned by some specific component, and any data derived from that state can only affect components "below" them in the tree
function Practice(props) {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
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
  //#1 React calls the constructor
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  //#3 Runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //#5 if the Clock component is removed from the DOM, this stops the timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //#4 Every second, tick() is run
  tick() {
    this.setState({
      date: new Date()
    });
  }

  //#2 React calls render
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
