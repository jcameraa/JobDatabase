import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import SkillsInfo from './Pages/SkillsInfo';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/skillsinfo' component={SkillsInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;