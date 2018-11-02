import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AdditionalComments from '../Pages/AdditionalComments';
import AreYouBeingSupported from '../Pages/AreYouBeingSupported';
import DoYouUnderstandContent from '../Pages/DoYouUnderstandContent';
import HowDoYouFeel from '../Pages/HowDoYouFeel';
import ThankYou from '../Pages/ThankYou';
import Header from '../Pages/Header';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (

      
      <Router>
          <div className="App">
              <nav>
                <ul>
               <Header/> 
                  <li><Link to="/1">How Do You Feel?</Link></li>
                  <li><Link to="/2">Do You Understand?</Link></li>
                  <li><Link to="/3">Are You Being Supported?</Link></li>
                  <li><Link to="/4">Any Additional Comments?</Link></li>
                  <li><Link to="/5">Thank You</Link></li>
                </ul>
              </nav>
              
              <Route path="/1" component= {HowDoYouFeel} />
              <Route path="/2" component= {DoYouUnderstandContent} />
              <Route path="/3" component= {AreYouBeingSupported} />
              <Route path="/4" component= {AdditionalComments} />
              <Route path="/5" component= {ThankYou} />
          </div>
      </Router>
    );
  }
}

export default connect()(App);
