
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
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import BarraNav from './BarraNav'





class PanelClinico extends React.Component{
    constructor(...props){
        super(...props)

        this.state={}
    }
    render(){
        return(
        //Renderizando la navbar
       <header>
           <Nav />

       </header>


        )
    }
}

PanelClinico.propTypes ={}
PanelClinico.defaultProps  = {}
export default PanelClinico
