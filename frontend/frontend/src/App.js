import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import Home from './components/Home';
import Index from './components/landingPage/Home'
import Admin from './components/Admin';
import Medical from './components/Medical';
import Resources from './components/Resources';
import Confidential from './components/Confidential';
import About from './components/About';
import Terms from './components/landingPage/Terms';
import Privacy from './components/landingPage/Privacy';
import Error from './components/Error';
import './App.css';

const API_ROUTE = '/api/v1';
// const FRONTEND_ROUTES = [];

class App extends Component {
  constructor() {
    super();
    this.state = {callingApi: true, apiResponse: {}};
    this._callApi();
  }

  _callApi() {
    fetch(API_ROUTE).then((response) => {
      return response.json();
    }).then((responseJSON) => {
      this.setState({callingApi: false, apiResponse: responseJSON});
    });
  }

  get apiStatus() {
    if (this.state.callingApi) {
      return "Calling Api";
    } else {
      return this.state.apiResponse.message;
    }
  }

  render() {
    console.log(this.apiStatus);
    return (
      <div className="App">
        <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Route path="/medical" component={Medical} />
            <Route path="/resources" component={Resources} />
            <Route path="/confidential" component={Confidential} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <Route component={Error} />
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
