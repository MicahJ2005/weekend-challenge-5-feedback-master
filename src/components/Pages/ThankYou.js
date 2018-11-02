import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


console.log('in ThankYou');
class ThankYou extends Component {
  
      render() {
        return (
         <li>In ThankYou</li>
        )
      }
  }
  
  export default withRouter(ThankYou);