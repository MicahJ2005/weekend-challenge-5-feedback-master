import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


// console.log('in Admin');
class Admin extends Component {
  
    state= {feedback: []};

    componentDidMount() {
        this.getFeedback();
      };

      getFeedback = (props) => {
        axios.get('/prime_feedback')
        .then((response) => {
            console.log('GET Response', response.data);
            this.setState({
                feedback: response.data
            })
        })
        .catch((error) => {
            alert('error in getFeedback in Admin.js', error);
        })
      }

      deleteFeedback = (id) => {
        axios({
            method: 'DELETE',
            url: `/prime_feedback/${id}`
          })
          .then( (response) => {
            this.getFeedback();
          })
          .catch( (error) => {
            alert('Bad stuff happened! Oh no!');
          })
        }

        submit = (id) => {
            confirmAlert({
              title: 'Confirm to submit',
              message: 'Are you sure to do this.',
              buttons: [
                {
                  label: 'Yes',
                  onClick: () => this.deleteFeedback(id),
                },
                {
                  label: 'No',
                  onClick: () => alert('Click No')
                }
              ]
            })
          };
      

      render() {
        return (
        <div>
            <h1>ALL ORDERS</h1>
                <table className="Table">
                    <thead>
                        <tr>
                            <td>Feeling</td>
                            <td>Understanding</td>
                            <td>Support</td>
                            <td>Comments</td>
                            <td>Delete?</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map(feedback =>
                        <tr key={feedback.id}>
                            <td >{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td><button onClick={() => this.submit(feedback.id)}>DELETE</button></td> 
                        </tr> 
                        )} 
                    </tbody>
                </table>
        </div>

        )
      }
  }
  
  const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

  export default connect(mapReduxStateToProps)(Admin);