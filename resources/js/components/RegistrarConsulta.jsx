import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
  , Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';


export default class TabRegistrarConsulta extends React.Component {
  render() {
    return (

   <Form>
     <h5 className="text-center">Selecciona las opcines que mas que convengan!</h5>
        <FormGroup>
          <Label for="exampleEmail">Especialidades</Label>

           {/*Lista de especialidades*/}
          <Input type="select" name="listaEspecialidades" id="exampleSelect" bsSize="sm">
            <option>Pediatria</option>
            <option>Dermatologia</option>
            <option>Oftalmologia</option>
            <option>Oculista</option>
            <option>Cirujano</option>
          </Input>
        </FormGroup>
       
        <FormGroup>
          <Label for="examplePassword">Doctores</Label>
            {/*Lista de Doctores*/}
          <Input type="select" name="listaDoctores" id="exampleSelect" bsSize="sm">
            <option>Dr. Eduardo  Reyes</option>
            <option>Dr. Carlos Moran</option>
            <option>Dra. Patricia Gomez</option>            <option>Dra. Gloria Perez</option>
            <option>Dr. Naun Flores</option>
          </Input>
         
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Horarios disponibles:</Label>
          <Input type="select" name="listaHorarios" id="exampleSelect" bsSize="sm">
            <option>8:00 am</option>
            <option>10:00 am</option>
            <option>4:00 pm</option>
            <option>Dra. Gloria Perez</option>
            <option>Dr. Naun Flores</option>
          </Input>
        </FormGroup>
       
         <Button size="sm">Registrar consulta</Button>
      </Form>
 
    
);
}
}
