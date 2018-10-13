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
              <Col sm="6">

              </Col>

            </Row>
          </TabPane>

          {/*CONTENIDOS DE TAB 3*/}
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
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
          {/*CONTENIDOS DE TAB 4*/}
          <TabPane tabId="4">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
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
        </TabContent>
      </div>
    );
  }
}