import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import Home from './components/Home';
import SchoolPage from './components/schoolPage';
import Index from './components/landingPage/Home';
import Terms from './components/landingPage/Terms';
import Privacy from './components/landingPage/Privacy';
import Admin from './components/Admin';
import Resources from './components/Resources';
import About from './components/About';
import Counseling from './components/Counseling';
import Medical from './components/Medical';
import Perk from './components/Perk';
import Error from './components/Error';
import './App.css';

const API_ROUTE = '/api/v1';
// const FRONTEND_ROUTES = [];
const SCHOOLS = [
  {
    fullName: 'University of Virginia',
    shortName: 'UVA'
  },
  {
    fullName: 'Virginia Tech',
    shortName: 'VT'
  },
  {
    fullName: 'Piedmont Virginia Community College',
    shortName: 'PVCC'
  },
  {
    fullName: 'Virginia Commonwealth University',
    shortName: 'VCU'
  },
  {
    fullName: 'Old Dominion University',
    shortName: 'ODU'
  },
  {
    fullName: 'James Madison University',
    shortName: 'JMU'
  },
  {
    fullName: 'Liberty University',
    shortName: 'LU'
  },
  {
    fullName: 'William and Mary',
    shortName: 'W&M'
  },
  {
    fullName: 'University of Richmond',
    shortName: 'UR'
  },
  {
    fullName: 'American University',
    shortName: 'American'
  },
  {
    fullName: 'Georgetown University',
    shortName: 'Georgetown'
  },
  {
    fullName: 'Washington and Lee University',
    shortName: 'W&L'
  },
  {
    fullName: 'Virginia Military Institute',
    shortName: 'VMI'
  },
  {
    fullName: 'Radford University',
    shortName: 'RU'
  }
]

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
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Route path="/resources" component={Resources} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            {SCHOOLS.map(school => (
              <Route
                exact
                path={"/"+school.shortName}
                render={(props) => <SchoolPage school={school} />}
                key={school.shortName}
              />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
