import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


console.log('in DoYouUnderstandContent');
class DoYouUnderstandContent extends Component {
  
      render() {
        return (
         <li>In DoYouUnderstandContent</li>
        )
      }
  }
  
  export default withRouter(DoYouUnderstandContent);