import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
  , Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios'


export default class TabRegistrarConsulta extends React.Component {

constructor(){

  super()

  this.state={
    posts: []
  }

  axios.get("http://localhost:3001/posts")
  .then(response => {
     this.setState({
posts : response.data
     })
     
     
  })
  .catch(error => {
      console.log(error)
  })
}
  render() {
    return (
 
   <Form>
     <h5 className="text-center">Selecciona las opcines que mas que convengan!</h5>
        <FormGroup>
          <Label for="exampleEmail">Especialidades</Label>

           {/*Lista de especialidades*/}
          <Input type="select" name="listaEspecialidades" id="exampleSelect" bsSize="sm">
          {this.state.posts.map(post=>
            <option> {post.title}</option>
            )}
          
          </Input>
        </FormGroup>
       
        <FormGroup>
          <Label for="examplePassword">Doctores</Label>
            {/*Lista de Doctores*/}
          <Input type="select" name="listaDoctores" id="exampleSelect" bsSize="sm">
            <option>Dr. Eduardo  Reyes</option>
            <option>Dr. Carlos Moran</option>
            <option>Dra. Patricia Gomez</option>            <option>Dra. Gloria Perez</option>
            <option>Dr. Naun Flores</option>
          </Input>
         
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Horarios disponibles:</Label>
          <Input type="select" name="listaHorarios" id="exampleSelect" bsSize="sm">
            <option>8:00 am</option>
            <option>10:00 am</option>
            <option>4:00 pm</option>
            <option>Dra. Gloria Perez</option>
            <option>Dr. Naun Flores</option>
          </Input>
        </FormGroup>
       
         <Button size="sm">Registrar consulta</Button>
      </Form>
 
    
);
}
}
