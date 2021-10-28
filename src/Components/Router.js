import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import SignIn from '../Routes/SignIn';
import SignUp from '../Routes/SignUp';
import Recorder from '../Routes/Recorder';
import DisplayComponents from '../Routes/DisplayComponents';
import DisplayResult from '../Routes/DisplayResult';
import Guide from '../Routes/Guide';

export default () => (
  <Router>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/recorder" exact component={Recorder} />
    <Route path="/displayComponents" exact component={DisplayComponents} />
    <Route path="/displayResult" exact component={DisplayResult} />
    <Route path="/home" exact component={Home} />
    <Route path="/guide" exact component={Guide} />
  </Router>
);
