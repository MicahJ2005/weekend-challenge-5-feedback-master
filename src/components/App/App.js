import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom'; // don't need LINK
import Admin from '../Pages/Admin'
import AdditionalComments from '../Pages/AdditionalComments';
import AreYouBeingSupported from '../Pages/AreYouBeingSupported';
import DoYouUnderstandContent from '../Pages/DoYouUnderstandContent';
import HowDoYouFeel from '../Pages/HowDoYouFeel';
import ThankYou from '../Pages/ThankYou';
import Header from '../Pages/Header';
import { connect } from 'react-redux';

////All components and react/redux imports listed above

class App extends Component {
  render() {
    return (

      
      <Router>
          <div className="App">
              <nav>
                <ul>
                {/* imported separate Header component */}
               <Header/>
                
                </ul>
              </nav>
              {/* created routes for all pages, including the admin page
              (special button in Header will redirect to the admi page ) */}
              <Route exact path="/1" component= {HowDoYouFeel} />
              <Route path="/2" component= {DoYouUnderstandContent} />
              <Route path="/3" component= {AreYouBeingSupported} />
              <Route path="/4" component= {AdditionalComments} />
              <Route path="/5" component= {ThankYou} />
              <Route path="/admin" component= {Admin} />
          </div>
      </Router>
    );
  }
}

export default connect()(App);
