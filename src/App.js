import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/Test';
import uploadpolicy from './uploadpolicy';

import Login from './components/Login'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import ForgotPassword from './components/ForgotPassword';

import Feedback from './components/Feedback';
import Contact from './components/Contact';

import Predict from './components/Predict';
import Mpredict from './components/Mpredict';
import Lpredict from './components/Lpredict';
import History from './components/History';

import Information from './components/Information';
import Insurance from './components/Insurance';
import InsurancePremium from './components/InsurancePremium';
import LifeInsurance from './components/LifeInsurance';
import HealthInsuarance from './components/HealthInsuarance';
import Policy from './components/Policy';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path='/edit-profile' component={EditProfile} />
        <PrivateRoute path='/user-profile' component={UserProfile} />
        <PrivateRoute path='/forgot-password' component={ForgotPassword} />

        <Route exact path='/info' component={Information} />
        <Route path='/info/insurance' component={Insurance} />
        <Route path='/info/insurance-premium' component={InsurancePremium} />
        <Route path='/info/life-insurance' component={LifeInsurance} />
        <Route path='/info/health-insurance' component={HealthInsuarance} />
        <PrivateRoute path='/policies' component={Policy} />

        <PrivateRoute exact path='/predictions' component={Predict} />
        <Route path='/predictions/health-insurance-predict' component={Mpredict} />
        <Route path='/predictions/life-insurance-predict' component={Lpredict} />
        <PrivateRoute path='/history' component={History} />

        <PrivateRoute path='/feedback' component={Feedback} />
        <PrivateRoute path='/contact' component={Contact} />

        <Route path='/test' component={Test} />
        <Route path='/uploadpolicy' component={uploadpolicy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
