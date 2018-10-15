import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Home = () => (
    <div>
        <h1>This is my HOME component.</h1>
    </div>
);

const Help = () => (
    <div>
        <h1>This is my HELP component.</h1>
    </div>
);
const Header = () => (
    <div>
        <header>
            <h1>Header</h1>
        </header>
    </div>
);
class App extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/help' component={Help} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));