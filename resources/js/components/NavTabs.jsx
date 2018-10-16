import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import TabAgregarUsuario from './AgregarUsuario'
import TabAgregarClinica from './AgregarClinica'
import TabNuevoExpediente from './NuevoExpediente'
import axios from 'axios'
import TabRegistrarConsulta from './RegistrarConsulta';
import AdministradorUsuarios from './AdministradorUsuarios';
import AdministradorPacientes from './AdministradorPacientes';
import AdministradorClinicas from './AdministradorClinicas';
import FormLogin from './FormLogin'


export default class NavtTabs extends React.Component {
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
              Agregar Usuario
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Registrar Consulta
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Agregar Clinica
            </NavLink>
          </NavItem>
        </Nav>

        {/*CONTENIDOS DE LAS TABS*/}


        {/*CONTENIDOS DE LA TAB 1*/}
        <TabContent activeTab={this.state.activeTab}>
        
          <TabPane tabId="1">
            
            <Row>
              <Col sm="4" md={{ size: 12, offset: 0 }}>

               {/*Renderiza el contenido del tab nuevo expediente*/}
              <TabNuevoExpediente/>

              </Col>
            </Row>
          </TabPane>

          {/*CONTENIDOS DE TAB 2*/}
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {/*Renderiza el contenido del Tab Agregar Usuario*/}
           <TabAgregarUsuario/>

              </Col>
            </Row>


          </TabPane>

          <TabPane tabId="3">
            <Row>
            <Col md="12">
                 {/*Renderiza el contenido del tab nuevo*/}
                 
                <TabRegistrarConsulta/>

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
            <Col md="12">
                 {/*Renderiza el contenido del tab nuevo*/}
                 <TabAgregarClinica/>


              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}