import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Administrar expediente
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Registrar Signos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Gestionar Consulta
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Escanear Examen
            </NavLink>
          </NavItem>
        </Nav>

        {/*CONTENIDOS DE LAS TABS*/}


        {/*CONTENIDOS DE LAS TAB 1*/}
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Llena los campos requeridos</h4>

                <Form>
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
                        <Label for="examplePassword">Direccion</Label>
                        <Input type="text" name="direccionPaciente" bsSize="sm" id="examplePassword" placeholder="Direccion" />
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


                  <Button>Crear expediente</Button>
                </Form>



              </Col>
            </Row>
          </TabPane>

          {/*CONTENIDOS DE TAB 2*/}
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Llena los campos requeridos</h4>

                <Form>
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



              </Col>
            </Row>


          </TabPane>
        </TabContent>
      </div>
    );
  }
}