import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Graphs from './Pages/Graphs';


var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.game-job-database-db-instance.cwzfnaatoex3.us-east-2.rds.amazonaws.com,
  user: process.env.gamejobadmin,
  password: process.env.Becker2047,
  port: process.env.3306
});

connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/graphs' component={Graphs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;