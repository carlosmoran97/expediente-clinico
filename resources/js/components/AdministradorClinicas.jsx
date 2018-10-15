import React from 'react';
import { Table, Button } from 'reactstrap';

export default class AdministradorClinicas extends React.Component {
  render() {
    return (

        <div className="">
        
        <h1 className=" text-center mb-3 mt-3">Administra las clinicas!</h1>
        
       
         <Button color="primary" type="submit">Agregar</Button>
      <Table bordered striped size="sm" hover className="text-align-items text-center mt-4" >
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Numero Registro</th>
            <th>Encargado</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>xdddd</td>
            <td><Button size="sm" color="warning">Actualizar</Button></td>
            <td><Button size="sm" color="danger">Eliminar</Button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>xdddd</td>
            <td><Button size="sm" color="warning" type="submit">Actualizar</Button></td>
            <td><Button size="sm" color="danger" type="submit">Eliminar</Button></td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}