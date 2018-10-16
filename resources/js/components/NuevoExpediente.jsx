import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
  , Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import classnames from 'classnames';


export default class TabNuevoExpediente extends React.Component {
  render() {
    return (



      <Form>
        <h5 className="text-center">Crea un nuevo expediente!</h5>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Nombres</Label>
              <Input type="text" name="nombresPaciente" bsSize="sm" id="exampleEmail" placeholder="Nombres" />
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Apellidos</Label>
              <Input type="text" name="apellidosPaciente" bsSize="sm" id="examplePassword" placeholder="Apellidos" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Fecha de nacimiento</Label>
              <Input type="date" name="fechaNacimientoPaciente" id="exampleDate" placeholder="date placeholder" bsSize="sm" />

            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Calle</Label>
              <Input type="text" name="callePaciente" bsSize="sm" id="examplePassword" placeholder="Direccion" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Casa</Label>
              <Input type="text" name="casaPaciente" bsSize="sm" id="exampleEmail" placeholder="Nombres" />
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Colonia</Label>
              <Input type="text" name="coloniaPaciente" bsSize="sm" id="examplePassword" placeholder="Apellidos" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Municipio</Label>

              <Input type="select" name="listaMuncipios" id="exampleSelect" bsSize="sm">
                <option>8:00 am</option>
                <option>10:00 am</option>
                <option>4:00 pm</option>
                <option>Dra. Gloria Perez</option>
                <option>Dr. Naun Flores</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>

              <Label for="examplePassword">Departamento</Label>

              <Input type="select" name="listaDepartamentos" id="exampleSelect" bsSize="sm">
                <option>8:00 am</option>
                <option>10:00 am</option>
                <option>4:00 pm</option>
                <option>Dra. Gloria Perez</option>
                <option>Dr. Naun Flores</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Documento de identidad</Label>
              <Input type="text" name="documentoIdentidad" bsSize="sm" id="exampleEmail" placeholder="Documento de identidad" />
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Profesion u oficio</Label>
              <Input type="text" name="profesionOficio" bsSize="sm" id="examplePassword" placeholder="Profesion" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Nombre padre o madre</Label>
              <Input type="text" name="nombrePadre" bsSize="sm" id="exampleEmail" placeholder="Nombre padre" />
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup check inline>

              <Label check>
                <Input type="checkbox" name="hombre" /> Hombre
          </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" name="mujer" />Mujer
          </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Nombre Conyuge</Label>
              <Input type="text" name="documentoIdentidad" bsSize="sm" id="exampleEmail" placeholder="Documento de identidad" />
            </FormGroup>
          </Col>
         
        </Row>


        <Button size="sm">Crear expediente</Button>
      </Form>

    );
  }
}
