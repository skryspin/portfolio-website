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
      data: new Date()
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

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarURL}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
  <div className="UserInfo">
    <Avatar user={props.user} />
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  </div>
  );
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-date">
        {(props.date)}
      </div>
    </div>
  );
}

//A Class component is equivalent
class Welcome extends React.Component {
  render() {
    return <h1> Hello, {this.props.name}. How are you?</h1>;
  }
}

export default Practice;
