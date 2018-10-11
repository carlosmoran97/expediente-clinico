import React from 'react';
import { TabContent, TabPane,Container, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import FormLogin from './FormLogin'


class Login extends React.Component{
    constructor(...props){
        super(...props)

        this.state={}
    }
    render(){
        return(
        //Renderizando la navbar
        <div class="contenedor">
    
           <Container>
        <Row>
          <Col sm="3">
              
              <FormLogin />
          
          </Col>  
        </Row>
        </Container>

       

</div>
        )
    }
}

Login.propTypes ={}
Login.defaultProps  = {}
export default Login
