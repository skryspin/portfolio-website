import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';




import headshot from './headshot.jpg'; // Tell webpack this JS file uses this image

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/home">
          <Home />
        </Route>
        <Route path="*">
          <InvalidPath />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          This is my web development playground.
          Say 'hi' to me in the following places:
          <a
            className="App-link"
            href="https://www.linkedin.com/in/skryspin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seb Kryspin on LinkedIn
          </a>
        </p>
      </header>
  <Container fluid>
  <Row className="">
    <Col xs={{span:12, order:1}} sm={{span:6, order:0}} md={{span:6, order:0}} xl={{span:6, order:0}} lg={{span:6, order:0}} className="p-3 px-sm-5 p-md-5 p-lg-5 p-xl-5" >
    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nunc, consequat id tellus porta, ultrices sollicitudin nisl. Mauris dapibus malesuada ultrices. Nulla aliquet, purus eget imperdiet fringilla, lorem diam tristique est, quis tempor ante ante in purus. Suspendisse nec faucibus ligula. Praesent lacus diam, tempus nec leo et, consectetur convallis nunc. Vestibulum facilisis vehicula aliquam. Curabitur suscipit quam at nibh sagittis, non viverra diam hendrerit. Ut sed euismod tortor. In hac habitasse platea dictumst. Curabitur hendrerit blandit iaculis. </p></Col>
    <Col xs={{span:12, order:0, }} sm={{span:6, order:1}} md={{span:6, order:1}} xl={{span:6, order:1}} lg={{span:6, order:1}} className="py-3 px-0 pt-sm-3 px-sm-2 p-md-5 p-lg-5 pt-xl-5 px-xl-6 "><Image className="shadow-lg of" src={headshot}
      alt="Seb smiling, dressed in a pleather jacket, button-down shirt, T-shirt and a beanie" fluid/></Col>
  </Row>
  <Row>
    <Col >1 of 3</Col>
    <Col >2 of 3</Col>
    <Col >3 of 3</Col>
  </Row>
</Container>
<Button>this a button!</Button>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>
  );
}

function InvalidPath() {
  return (
    <div>
      <p>This page doesn't exist. You can either stay here forever, or <Link to="/"> return to civilization.</Link> </p>
      <blockquote><h1>The Road Not Taken</h1>
      <p>
      Two roads diverged in a yellow wood,<br />
      And sorry I could not travel both<br />
      And be one traveler, long I stood<br />
      And looked down one as far as I could<br />
      To where it bent in the undergrowth;<br />
      <br />
      Then took the other, just as fair,<br />
      And having perhaps the better claim,<br />
      Because it was grassy and wanted wear;<br />
      Though as for that the passing there<br />
      Had worn them really about the same,<br />
      <br />
      And both that morning equally lay<br />
      In leaves, no step had trodden black.<br />
      Oh, I kept the first for another day!<br />
      Yet knowing how way leads on to way,<br />
      I doubted if I should ever come back.<br />
      <br />
      I shall be telling this with a sigh<br />
      Somewhere ages and ages hence:<br />
      Two roads diverged in a wood, and I—<br />
      I took the one less traveled by,<br />
      And that has made all the difference.
      <br />
    </p>
  <footer>
  — <cite>Robert Frost</cite>
  </footer>
  </blockquote>
  </div>
  );
}
