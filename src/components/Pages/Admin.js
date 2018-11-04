import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';


class Admin extends Component {
  
    state= {feedback: []};
    // mounting GET response to the DOM, when rendered
    componentDidMount() {
        this.getFeedback();
      };

      ///GET acios is getting information so it can be rendered to the DOM
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

      ///Delete function will delete selected line of feedback
      ///from the admin list, update the DB, and rerender the 
      /// list using this.getFeedback();
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
        /// this function is asking the admin user to verify
        /// whether or not they want to delete a line of feedback
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
        <Paper>
            <Typography color="textPrimary" variant="h5">ALL FEEDBACK</Typography>
                <Table className="Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedback.map(feedback =>
                        <TableRow key={feedback.id}>
                            <TableCell >{feedback.feeling}</TableCell>
                            <TableCell>{feedback.understanding}</TableCell>
                            <TableCell>{feedback.support}</TableCell>
                            <TableCell>{feedback.comments}</TableCell>
                            <TableCell><IconButton aria-label="Delete" onClick={() => this.submit(feedback.id)}><DeleteIcon /></IconButton></TableCell> 
                        </TableRow> 
                        )} 
                    </TableBody>
                </Table>
        </Paper>

        )
      }
  }
  
  const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

///connecting to react-redux and mapping props
  export default connect(mapReduxStateToProps)(Admin);