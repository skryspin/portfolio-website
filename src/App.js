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
  <Container className="" fluid>
  <Row>
    <Col id="secret" className="pb-1 pt-4 py-1 px-sm-4 pt-sm-3 px-md-5 pt-md-3 pt-lg-3 px-lg-5 px-xl-5" xs={{span:12}}><h1>About me</h1>    <h5>Programmer and artist</h5>
</Col>
  </Row>
  <Row className="">
    <Col xs={{span:12, order:1}} sm={{span:6, order:0}} md={{span:6, order:0}} xl={{span:6, order:0}} lg={{span:6, order:0}} className="p-3 px-sm-4 pt-sm-0 px-md-5 pb-md-5 pt-md-0 px-lg-5 pb-lg-5 pt-lg-0 pb-xl-5 px-xl-5 pt-xl-0" >
    <p className="">
    Hi there! I'm Seb. I'm a software engineer, game developer, and artist. I strive to combine my coding skills with my creative passions. I'm looking for a career that will engage me <b>intellectually</b> and <b>creatively</b>.</p>
    <p> I interned at IBM in the summer of 2019 and before that I worked as an instructor at iD Tech camp. <link href= > Learn more in Work Experience -> </link> </p>

    <p alt="I received numerous awards throughout my degree, including best project runner-up and best poster from our computer science department."> I graduated <i>summa cum laude</i> from Trinity College in 2020 with a BS in computer science. I was recognized as a top-performing student in my major by numerous awards, including the inaugural Ralph A. Morelli Prize in Computer Science. As my senior project, I created a 3D platformer game with Unity.  While at school, I also participated actively in theatre and worked both on- and off-stage. My first year at Trinity I was also part of InterArts, a specialized gateway program for arts students. Learn more in Projects -> <br />
    </p>
    <p>
    </p></Col>
    <Col xs={{span:12, order:0, }} sm={{span:6, order:1}} md={{span:6, order:1}} xl={{span:6, order:1}} lg={{span:6, order:1}} className="pb-3 px-0 pt-0 px-sm-4 pt-sm-0 px-md-5 pb-md-5 pt-md-0 px-lg-5 pb-lg-5 pt-lg-0 px-xl-6 pb-xl-5"><Image className="shadow-lg w-100" src={headshot}
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
