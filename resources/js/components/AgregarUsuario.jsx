import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default class TabAgregarUsuario extends React.Component {
    render() {
      return (


<Form>
<h4>Llena los campos requeridos</h4>
  <Row form>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>
        <Label for="exampleEmail">Nombres</Label>
        <Input type="text" name="nombresUsuario" bsSize="sm" id="exampleEmail" placeholder="Nombres" />
      </FormGroup>
    </Col>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>
        <Label for="examplePassword">Apellidos</Label>
        <Input type="text" name="apellidosUsuario" bsSize="sm" id="examplePassword" placeholder="Apellidos" />
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>
        <Label for="exampleEmail">Fecha de nacimiento</Label>
        <Input type="date" name="fechaNacimientoUsuario" id="exampleDate" placeholder="date placeholder" bsSize="sm" />

      </FormGroup>
    </Col>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>
        <Label for="examplePassword">Direccion</Label>
        <Input type="text" name="direccionUsuario" bsSize="sm" id="examplePassword" placeholder="Direccion" />
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>
        <Label for="exampleEmail">Municipio</Label>
        <Input type="text" name="municipios" bsSize="sm" id="exampleEmail" placeholder="Municipio" />
      </FormGroup>
    </Col>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>

        <Label for="examplePassword">Departamento</Label>

        <Input type="select" name="departamentos" id="exampleSelect" bsSize="sm">
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
        <Label for="examplePassword">Profesion</Label>
        <Input type="text" name="profesion" bsSize="sm" id="examplePassword" placeholder="Profesion" />
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>
        <Label for="exampleEmail">NIT</Label>
        <Input type="text" name="nit" bsSize="sm" id="exampleEmail" placeholder="NIT" />
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
        <Label for="exampleEmail">Especialidad</Label>
        <Input type="select" name="listaEspecialiades" id="exampleSelect" bsSize="sm">
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
        <Label for="examplePassword">Numero Junta de Vigilancia</Label>
        <Input type="text" name="numJuntaVigilancia" bsSize="sm" id="examplePassword" placeholder="Numero Junta de Vigilancia" />
      </FormGroup>
      
    </Col>
  </Row>
  <Row form>
    <Col md={{ size: 4, offset: 1 }}>
      <FormGroup>
        <Label for="exampleEmail">Puesto asignacion</Label>
        <Input type="select" name="listaPuestos" id="exampleSelect" bsSize="sm">
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
        <Label for="exampleEmail">Estado Civil</Label>
        <Input type="select" name="listaEspecialidades" id="exampleSelect" bsSize="sm">
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
        <Label for="exampleEmail">Nombre Usuario</Label>
        <Input type="text" name="nombre Usuario" bsSize="sm" id="exampleEmail" placeholder="Nombre Usuario" bsSize="sm"/>
      </FormGroup>
      
    </Col>
    
    <Col md={{ size: 4, offset: 1 }}>
    <FormGroup>
        <Label for="exampleEmail">Contrasena</Label>
        <Input type="text" name="contraUsuario" bsSize="sm" id="exampleEmail" placeholder="Contrasenia" bsSize="sm" />
      </FormGroup>
    </Col>
  </Row>


  <Button>Agregar Usuario</Button>
</Form>
);
}
}
