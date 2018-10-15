import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default class TabAgregarClinica extends React.Component {
  render() {
    return (



      <Form>
        <h5 className="text-center">Datos de la clinica</h5>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Nombre</Label>
              <Input type="text" name="nombreClinica" bsSize="sm" id="exampleEmail" placeholder="Nombre" />
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Telefonico</Label>
              <Input type="text" name="telefonoClinica" bsSize="sm" id="exampleEmail" placeholder="Telefono" bsSize="sm"/>            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Direccion</Label>
              <Input type="text" name="direccionClinica" bsSize="sm" id="examplePassword" placeholder="Direccion" />

            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Portafolio de servicios</Label>
              <Input type="select" name="listaServicios" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>


            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Horarios de atencion</Label>

              <Input type="select" name="listaHorarios" id="exampleSelect" bsSize="sm">
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

              <Label for="examplePassword">Nombre Encargado</Label>
              <Input type="text" name="nombreEncargado" bsSize="sm" id="examplePassword" placeholder="Nombre Encargado" />


            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Documento de identidad</Label>
              <Input type="text" name="documentoIdentidadEncargado" bsSize="sm" id="exampleEmail" placeholder="Documento de identidad" />
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Profesion</Label>
              <Input type="text" name="profesionEncargado" bsSize="sm" id="examplePassword" placeholder="Profesion" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">NIT</Label>
              <Input type="text" name="nitEncargado" bsSize="sm" id="exampleEmail" placeholder="NIT" />
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="examplePassword">Numero Seguro Social</Label>
              <Input type="text" name="numSeguroSocial" bsSize="sm" id="examplePassword" placeholder="Numero Seguro Social" />
            </FormGroup>
          </Col>
        </Row>
      
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Nombre Usuario</Label>
              <Input type="text" name="nombreUsuario" bsSize="sm" id="exampleEmail" placeholder="Nombre Usuario" bsSize="sm" />
            </FormGroup>

          </Col>

          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Contrasena</Label>
              <Input type="text" name="contraUsuario" bsSize="sm" id="exampleEmail" placeholder="Contrasenia" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Calle</Label>
              <Input type="text" name="calleEncargado" bsSize="sm" id="exampleEmail" placeholder="Nombre Usuario" bsSize="sm" />
            </FormGroup>

          </Col>

          <Col md={{ size: 4, offset: 1 }}>
            <FormGroup>
              <Label for="exampleEmail">Correo electronico</Label>
              <Input type="text" name="correoEncargado" bsSize="sm" id="exampleEmail" placeholder="Contrasenia" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        


        <Button size="sm">Agregar Clinica</Button>
      </Form>

    );
  }
}

