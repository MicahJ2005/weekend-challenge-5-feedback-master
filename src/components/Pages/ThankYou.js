import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
// import axios from 'axios';

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

// console.log('in ThankYou');
class ThankYou extends Component {
  
    completeFeedback = (props) => {
        console.log('new feedback', this.props.reduxState.feedbackReducer );
        // this.props.dispatch({ type: 'ADD_THANKYOU', payload: this.state});
        this.props.history.push('/1');
        let newFeedback = this.props.reduxState.feedbackReducer;
        axios({
            method: 'POST',
            url: '/prime_feedback',
            data: newFeedback,
        })
        .then((response) => {
            console.log('sending new feedback to DB', response);
            
        })
        .catch((error) => {
            console.log('error is POST on ThankYou.js', error);
            
        })

    }

      render() {
        return (
         <div> 
            <li>Thank You for your Feedback!</li>

            <li>YOU ARE AWESEME!</li>

            <button onClick={this.completeFeedback} type="button" value="HOME">SUBMIT FEEDBACK</button>
         </div>  
        )
      }
  }
  
  export default connect(mapReduxStateToProps)(ThankYou);