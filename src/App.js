import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';


import headshot from './headshot.jpg'; // Tell webpack this JS file uses this image
import placeholder from './Placeholder.png';
import Practice from './Practice';

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
        <Route path = "/react-practice">
          <Practice />
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
          This is my under-construction web dev playground.
          Say 'hi' to me here:
          <a
            className="App-link"
            href="https://www.linkedin.com/in/skryspin/"
            target="_blank"
            rel="noopener noreferrer"
          >
             Seb on LinkedIn
          </a>
          <a className="App-link" href="https://www.github.com/skryspin/">, GitHub </a>
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
    <p>
    I've developed 3D games in Unity, interned at IBM, and <a href="https://github.com/skryspin/portfolio-website"> built my own website</a>. And a lot more.  <a href='#projects'> Go to Projects [placeholder]-> </a></p>
    <p alt="I received numerous awards throughout my degree, including best project runner-up and best poster from our computer science department."> I graduated <i>summa cum laude</i> from Trinity College in 2020 with a BS in computer science. I was voted as the top student of the major by the faculty, and received numerous honors and awards. <a alt="I was also part of InterArts, a specialized gateway program for arts students." href='#education'> Go to Academics [placeholder] -> </a>
    </p>
</Col>
    <Col xs={{span:12, order:0, }} sm={{span:6, order:1}} md={{span:6, order:1}} xl={{span:6, order:1}} lg={{span:6, order:1}} className="pb-3 px-0 pt-0 px-sm-4 pt-sm-0 px-md-5 pb-md-5 pt-md-0 px-lg-5 pb-lg-5 pt-lg-0 px-xl-6 pb-xl-5">
      <Image className="shadow-lg w-100" src={headshot} alt="Seb smiling, dressed in a pleather jacket, button-down shirt, T-shirt and a beanie" fluid />
    </Col>
  </Row>
  </Container>


  <Projects />
  <Card bg="secondary" text="black">
    <Card.Body> <p>Hello this is a card test </p> </Card.Body>
  </Card>
    </div>
  );
}

/* Renders the Projects section */
function Projects(props) {
  return (
    <div>
    <p id="secret" className="pb-1 pt-4 py-1 px-sm-4 pt-sm-3 px-md-5 pt-md-3 pt-lg-3 px-lg-5 px-xl-5" xs={{span:12}}><h1 class="text-center" id = "projects">Projects</h1>
    </p>
    <Container className="projects  justify-content-center " fluid>
      <Row className="">
        <Col className="p-2 d-flex  justify-content-center" sm={12} md={6} lg={6} xl={6} fluid>
          <ImageOverlay/>
        </Col>
        <Col className="p-2  d-flex justify-content-center" sm={12} md={6} lg={6} xl={6} fluid>
          <ImageOverlay/>
        </Col>
      </Row>
      <Row className="">
        <Col className="p-2 d-flex justify-content-center" sm={12} md={6} lg={6} xl={6} fluid>
          <ImageOverlay/>
        </Col>
        <Col className="p-2 d-flex justify-content-center" sm={12} md={6} lg={6} xl={6} fluid>
          <ImageOverlay/>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

class ImageOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this); //gotta bind functions that are called without ()
    this.handleExit = this.handleExit.bind(this); //gotta bind functions that are called without ()

    this.state={isShown:false};
  }

  handleEnter() {
    this.setState({isShown:true});
  }

  handleExit() {
    this.setState({isShown:false});

  }

  render() {
      return (
      <div>
      <Card bg="dark" text="white" onMouseEnter={this.handleEnter} onMouseLeave={this.handleExit}>
        <Card.Img src={placeholder} fluid/>
        <Fade in={this.state.isShown} >
        <Card.ImgOverlay style={{padding:0, backgroundColor: 'hsla(0, 6%, 0%, 0.9)'}}>
          <div style={{padding:'2em'}}>
          <Card.Title>Job Hunter: A Game About Getting A Job</Card.Title>
          <Card.Text bg="dark">
            <p>A 3D platformer game built in Unity. </p>
          </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Fade>
      </Card>
  </div>
  )
  }
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
