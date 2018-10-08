
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/**
*	Here goes all magic
*/
class App extends Component {
  	render() {
	    return (
	    	<h1>Hello World! </h1>
	    );
  }
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);