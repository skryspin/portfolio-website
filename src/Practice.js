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
    <div>
      <Welcome name="Seb" />
      <Welcome name="Chelsea" />
      <Welcome name="John" />
    </div>
  )
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
