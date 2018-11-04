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
// import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
// import { withStyles } from '@material-ui/core/styles';
// // console.log('in Admin');

// const styles = theme => ({
//     button: {
//       margin: theme.spacing.unit,
//     },
//     input: {
//       display: 'none',
//     },
//   })(Button);

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

//   withStyles(styles);
  export default connect(mapReduxStateToProps)(Admin);