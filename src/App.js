import 'bootstrap/dist/css/bootstrap.css';

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
  <Row>
    <Col xs={{span:12, order:1}} sm={{span:12, order:1}} md={{span:6, order:0}} xl={{span:6, order:0}} g={{span:6, order:0}}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus nunc, consequat id tellus porta, ultrices sollicitudin nisl. Mauris dapibus malesuada ultrices. Nulla aliquet, purus eget imperdiet fringilla, lorem diam tristique est, quis tempor ante ante in purus. Suspendisse nec faucibus ligula. Praesent lacus diam, tempus nec leo et, consectetur convallis nunc. Vestibulum facilisis vehicula aliquam. Curabitur suscipit quam at nibh sagittis, non viverra diam hendrerit. Ut sed euismod tortor. In hac habitasse platea dictumst. Curabitur hendrerit blandit iaculis. Fusce metus nisi, tristique tristique eleifend et, feugiat vel magna. Duis vestibulum euismod tincidunt. Vestibulum cursus, arcu in congue commodo, lacus orci pharetra massa, id mollis dui dui ut neque.

Donec purus orci, posuere et scelerisque ac, laoreet eu arcu. Sed nec nibh lobortis, lacinia mauris sed, cursus neque. Vivamus id accumsan diam, vitae rhoncus velit. Maecenas pulvinar dui vitae commodo tempus. Nulla imperdiet est et velit fermentum, sed bibendum tortor vulputate. Quisque eget feugiat ante. Maecenas a ipsum dolor. Proin interdum eget lectus non aliquet. Morbi dignissim mi facilisis felis aliquam faucibus. Integer neque lorem, accumsan vitae mi ac, facilisis efficitur ipsum. Sed enim erat, malesuada at mauris non, elementum placerat nunc. Proin quis dolor et tellus tristique eleifend.</p></Col>
    <Col xs={{span:12, order:0, }} sm={{span:12, order:0}} md={{span:6, order:1}} xl={{span:6, order:1}} lg={{span:6, order:1}}> <Image src={headshot}
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
