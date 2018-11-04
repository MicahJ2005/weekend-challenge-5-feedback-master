import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const emptyAdditionalComments = {
    comments: '',        
};

// console.log('in AdditionalComments');
class AdditionalComments extends Component {
    state = emptyAdditionalComments;
    
    handleChange = (event) => {
        console.log('in handleChange on AdditionalComments', event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    

    handleSubmit = (event) => {
        console.log('in Handle Submit on AdditionalComments', event.target.value); 
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state});
        this.props.history.push('/5')
        
    };

    clearSupportField = () => {
        this.setState(emptyAdditionalComments);
    };
  
      render() {
        return (
        <Card>
            <CardContent>
            <Typography color="textSecondary" variant="h5">4 of 4 Pages</Typography>
            <Typography color="textPrimary" variant="h3">Any comments you want to leave? </Typography>
            <br></br>
            <FormControl onSubmit={this.handleSubmit}>
                <Select onChange={this.handleChange} type="text" value={this.state.comments} placeholder="Add Comment Here" name="comments">
                    <MenuItem value=''>select</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
                <br></br>
                <Button onClick={this.handleSubmit} variant="contained" color="primary" type="submit" value="NEXT">NEXT</Button>
            </FormControl>
            </CardContent>
        </Card> 
         
        )
      }
  }
  
  export default connect()(AdditionalComments);