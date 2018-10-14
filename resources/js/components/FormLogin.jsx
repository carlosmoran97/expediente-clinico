import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
     
        <FormGroup>
          <Label for="exampleEmail">Usuario</Label>
          <Input type="text" name="usuario" id="exampleEmail" placeholder="Usuario" bsSize="sm"  />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Contrasena</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Contrasena" bsSize="sm" />
        </FormGroup>
        <Button color="primary">Iniciar Sesion</Button>{' '}
        
      </Form>
    );
  }
}