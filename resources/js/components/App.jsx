import React, { Component, propTypes } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'


import { Container, Row, Col } from 'reactstrap';
import BarraNav from './BarraNav'
import NavTabs from './NavTabs'
require('bootstrap')



class App extends Component {
    constructor(...props) {
        super(...props)
      

       
        this.state = {}

         {/*COMPONENTE PRINCIPAL*/}
        <Router></Router>
    }

    render() {
        return (

            <div className="">

                <header> {/*Barra de navegacion*/}
                    <BarraNav />
                </header>

                <section>
                    <Container>
                        <Row>
                            <Col sm="12">

                                <NavTabs />

                            </Col>
                        </Row>
                    </Container>

                </section>

            </div>
        )
    }
}
App.propTypes = {}
App.defaultProps = {}
export default App

