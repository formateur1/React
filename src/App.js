import './App.css';
import { Button, Icon, Input, Pagination, Container } from 'semantic-ui-react'
import React, { Fragment } from 'react';
import Menu from './components/Menu';
import Login from './components/Login';

function App() {
  function call() {
    alert("Hello World !");
  }

  return (
    <div className="App">
      <b><p> Semantic UI React Integration </p></b>
      <hr /> <br /><strong> Alert button: </strong>
      <br /> < br />
      <Button onClick={call} className="icon"
        labelPosition='right' >
        Notificatons
        < Icon name='right bell' />
      </Button>

      <div className="ui container"
        style={{ textAlign: "center" }}>
        <br /><br />
        <b><p>Semantic UI Input Labeled Variation in React</p></b>
        <hr /><br />
        <Input
          label={{ basic: true, content: '€' }}
          labelPosition='right'
          placeholder='Saisir le montant'
        /><br /><br />
        <Input action='Login' placeholder='Saisir mail' />
      </div>

      <Pagination defaultActivePage={2} totalPages={8} />
      <Pagination defaultActivePage={2} totalPages={8} disabled />

      <Fragment>
        <Menu />
        <Container>
          <Login />
        </Container>
      </Fragment>

    </div>
  );
}

export default App;
