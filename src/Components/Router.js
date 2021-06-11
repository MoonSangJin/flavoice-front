import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import SignIn from '../Routes/SignIn';
import SignUp from '../Routes/SignUp';
import Recorder from '../Routes/Recorder';
import DisplayComponents from '../Routes/DisplayComponents';

export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/recorder" exact component={Recorder} />
    <Route path="/displayComponents" exact component={DisplayComponents} />
  </Router>
);
