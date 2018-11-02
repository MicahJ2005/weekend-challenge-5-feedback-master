import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


console.log('in AdditionalComments');
class AdditionalComments extends Component {
  
      render() {
        return (
         <li>In AdditionalComments</li>
        )
      }
  }
  
  export default withRouter(AdditionalComments);