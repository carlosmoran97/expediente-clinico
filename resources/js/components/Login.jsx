import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


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
