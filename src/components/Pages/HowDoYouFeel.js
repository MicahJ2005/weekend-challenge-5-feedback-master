
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


console.log('in HowDoYouFeel');
class HowDoYouFeel extends Component {
  
      render() {
        return (
         <li>In HowDoYouFeel</li>
        )
      }
  }
  
  export default withRouter(HowDoYouFeel);