import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Graphs from './Pages/Graphs';


class App extends Component {
  render() {

    // var mysql = require('mysql');

    // var connection = mysql.createConnection({
    //   host: process.env.RDS_HOSTNAME,
    //   user: process.env.RDS_USERNAME,
    //   password: process.env.RDS_PASSWORD,
    //   port: process.env.RDS_PORT
    // });

    // connection.connect(function (err) {
    //   if (err) {
    //     console.error('Database connection failed: ' + err.stack);
    //     return;
    //   }

    //   console.log('Connected to database.');
    // });

    // connection.end();

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