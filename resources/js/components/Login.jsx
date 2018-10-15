import React from 'react';
import {Container, Button, Row, Col, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import classnames from 'classnames';

import FormLogin from './FormLogin'
class Login extends React.Component {
    constructor(...props) {
        super(...props)

        this.state = {}
    }
    render() {
        return (
           
            <div class="contenedor">

                <Container>
                    <Row>
                        <Col sm="3">
                            {/*Se renderiza el componente FormLogin*/}
                            <Form>

                                <FormGroup>
                                    <Label for="exampleEmail">Usuario</Label>
                                    <Input type="text" name="nombreUsuario" id="exampleEmail" placeholder="Usuario" bsSize="sm" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Contrasena</Label>
                                    <Input type="password" name="contrasenaUsuario" id="examplePassword" placeholder="Contrasena" bsSize="sm" />
                                </FormGroup>
                                <Button type="submit" color="primary">Iniciar Sesion</Button>{' '}

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
Login.propTypes = {}
Login.defaultProps = {}
export default Login
