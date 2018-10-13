import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';





 <TabPane tabId="1">
 <h1>Selecciona la especialidad que deseas y el horario</h1>
 <Row>
   <Col sm="12">
   <Form>
        <FormGroup>
          <Label for="exampleEmail">Especialidades</Label>

           {/*Lista de especialidades*/}
          <Input type="select" name="select" id="exampleSelect">
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
          <Input type="select" name="select" id="exampleSelect">
            <option>Dr. Eduardo  Reyes</option>
            <option>Dr. Carlos Moran</option>
            <option>Dra. Patricia Gomez</option>
            <option>Dra. Gloria Perez</option>
            <option>Dr. Naun Flores</option>
          </Input>
         
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Horarios disponibles:</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>8:00 am</option>
            <option>10:00 am</option>
            <option>4:00 pm</option>
            <option>Dra. Gloria Perez</option>
            <option>Dr. Naun Flores</option>
          </Input>
        </FormGroup>
       
         <Button>Registrar consulta</Button>
      </Form>
 
     
   </Col>
   <Col sm="6">
     <Card body>
       <CardTitle>Special Title Treatment</CardTitle>
       <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
       <Button>Go somewhere</Button>
     </Card>
   </Col>
 </Row>
</TabPane>