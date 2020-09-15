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
      <Toggle />
      <LoginControl/>
      <Mailbox unreadMessages={messages} />
      <NumberList numbers={[3]} />
      <NameForm />
      <Calculator />
    </div>

  )
}

const messages = ['Re:Re: React'];


function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>}
    </div>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state= {isToggleOn: true, id: 0};

    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      id: state.id + 1
    }))
  }
  // if you refer to a method without () after it, you should bind that method

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
         Count: {this.state.id}
      </button>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return UserGreeting();
  }
  else {
    return GuestGreeting();
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this); //gotta bind functions that are called without ()
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false}; //set the state
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        Ths user is <b> {isLoggedIn ? 'currently' : 'not'} </b> logged in.
        {button}
      </div>
    )
  }
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

function Welcome(props) {
  return (
    <h1> Hello, {props.name}</h1>
  );
}

const element = <Welcome name="Seb"/>



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
    )
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
        <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>
        {element}
      </div>
    )
  }
}

//Note: Keys serve as a hint to React but they don’t get passed to your components.
function NumberList(props) {
  const numbers = props.numbers;
  const doubled = numbers.map((x) =>
    <li key={x.toString()}>{x*2}</li>);
  return (
    <ul>{doubled}</ul>
  )
}

//An input form element whose value is controlled by React is called a "controlled component"

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'initial name'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value=
            {this.state.value} onChange= {this.handleChange} />
        </label>
        <input type = "submit" value = "Submit" />
      </form>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature}
             onChange={this.handleChange} />
    </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale="c"
        temperature={celsius}
        onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

export default Practice;
