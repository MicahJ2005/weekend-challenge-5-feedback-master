import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';


// console.log('in Admin');
class Admin extends Component {
  

    componentDidMount() {
        this.getFeedback();
      };

      getFeedback = () => {
        axios.get('/prime_feedback')
        .then((response) => {
            console.log('GET Response', response.data);
            
            this.props.dispatch({ type: 'GET_FEEDBACK', payload: response.data})
        })
        .catch((error) => {
            alert('error in getFeedback in Admin.js', error);
        })
      }


      render() {
        return (
        <div>
            <li>In Admin</li>
            {/* {this.state.feedback.map((feedback, index)=>
                <li key={index}>{feedback.index}</li>
                )} */}
            <pre>{JSON.stringify(this.props.reduxState)}</pre>

        </div>

        )
      }
  }
  
  const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

  export default connect(mapReduxStateToProps)(Admin);