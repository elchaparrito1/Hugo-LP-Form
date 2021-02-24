/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import ManagerRsvp from './pages/ManagerRsvp';
import InvestorRsvp from './pages/InvestorRsvp';
import './App.scss';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form/virtual-forum" component={Form} />
        <Route
          exact
          path="/form/virtual-forum/investor-rsvp/:id"
          component={InvestorRsvp}
        />
        <Route
          exact
          path="/form/virtual-forum/manager-rsvp/:id"
          component={ManagerRsvp}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
