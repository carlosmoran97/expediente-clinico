
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//Importaciones


import React,{Component,propTypes} from 'react'
import ReactDOM from 'react-dom'
import BarraNav from './BarraNav'
import NavTabs from './NavTabs'
import {Container,Row, Col} from 'reactstrap';




class PanelClinico extends React.Component{
    constructor(...props){
        super(...props)

        this.state={}
    }
    render(){
        return(
        //Renderizando la navbar
        <div class="contedor">
       <header>

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

PanelClinico.propTypes ={}
PanelClinico.defaultProps  = {}
export default PanelClinico
