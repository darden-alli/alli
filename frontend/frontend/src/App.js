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
import Medical from './components/resources/Medical';
import Police from './components/resources/Police';
import Counseling from './components/resources/Counseling';
import Reporting from './components/resources/Reporting';
import Support from './components/resources/Support';
import Perk from './components/resources/Perk';
import './App.css';

const API_ROUTE = '/api/v1';
// const FRONTEND_ROUTES = [];
const SCHOOLS = [
  {
    fullName: 'University of Virginia',
    shortName: 'UVA',
    launched: true
  },
  {
    fullName: 'Virginia Tech',
    shortName: 'VT',
    launched: false
  },
  {
    fullName: 'Piedmont Virginia Community College',
    shortName: 'PVCC',
    launched: false
  },
  {
    fullName: 'Virginia Commonwealth University',
    shortName: 'VCU',
    launched: false
  },
  {
    fullName: 'Old Dominion University',
    shortName: 'ODU',
    launched: false
  },
  {
    fullName: 'James Madison University',
    shortName: 'JMU',
    launched: false
  },
  {
    fullName: 'Liberty University',
    shortName: 'LU',
    launched: false
  },
  {
    fullName: 'William and Mary',
    shortName: 'W&M',
    launched: false
  },
  {
    fullName: 'University of Richmond',
    shortName: 'UR',
    launched: false
  },
  {
    fullName: 'American University',
    shortName: 'American',
    launched: false
  },
  {
    fullName: 'Georgetown University',
    shortName: 'Georgetown',
    launched: false
  },
  {
    fullName: 'Washington and Lee University',
    shortName: 'W&L',
    launched: false
  },
  {
    fullName: 'Virginia Military Institute',
    shortName: 'VMI',
    launched: false
  },
  {
    fullName: 'Radford University',
    shortName: 'RU',
    launched: false
  }
]
const RESOURCE_TYPES = [
  {type: 'medical', component: Medical},
  {type: 'police', component: Police},
  {type: 'counseling', component: Counseling},
  {type: 'reporting', component: Reporting},
  {type: 'support', component: Support}
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
            <Route exact path="/about" component={About} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy" component={Privacy} />
            {SCHOOLS.map(school => (
              <Route
                exact
                path={"/"+school.shortName}
                key={"/"+school.shortName}
                render={(props) => <SchoolPage school={school} />}
              />
            ))}
            {SCHOOLS.map(school => (
              RESOURCE_TYPES.map(resource => (
                <Route
                  exact
                  path={"/"+school.shortName+"/"+resource.type}
                  key={"/"+school.shortName+"/"+resource.type}
                  component={resource.component}
                />
              ))
            ))}
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
