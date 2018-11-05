import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
/// imported all necessary material UI and react/redux imports

//setting a constant emptying object
const emptyAdditionalComments = {
    comments: '',        
};


class AdditionalComments extends Component {
    state = emptyAdditionalComments;
    /// setting state to click event value
    handleChange = (event) => {
        console.log('in handleChange on AdditionalComments', event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    
    ///handleSubmit is sending information to reducer 
    /// and pushing user to next page
    handleSubmit = (event) => {
        console.log('in Handle Submit on AdditionalComments', event.target.value); 
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state});
        this.props.history.push('/5')
        
    };
    // clearing inputs
    clearSupportField = () => {
        this.setState(emptyAdditionalComments);
    };
  
      render() {
        return (
        <Card id="cards">
            <CardContent>
                <Typography color="textSecondary" variant="h5">4 of 4 Pages</Typography>
                <Typography color="textPrimary" variant="h3">Any comments you want to leave? </Typography>
                <br></br>
                    <FormControl onSubmit={this.handleSubmit}>
                        <TextField onChange={this.handleChange} type="text" value={this.state.comments} placeholder="Add Comment Here" name="comments"></TextField>
                        <br></br>
                        <Button onClick={this.handleSubmit} variant="contained" color="primary" type="submit" value="NEXT">NEXT</Button>
                    </FormControl>
            </CardContent>
        </Card> 
         
        )
      }
  }
  ///connecting page to react-redux 
  export default connect()(AdditionalComments);