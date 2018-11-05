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

/// imported all necessary material UI and react/redux imports

//setting a constant emptying object
const emptyDoYouUnderstandContent = {
    understanding: '',        
};

class DoYouUnderstandContent extends Component {
    state = emptyDoYouUnderstandContent;
    
    /// setting state to clcik event value
    handleChange = (event) => {
        console.log('in handleChange on DoYouUnderstandContent', event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    
    ///handleSubmit is sending information to reducer 
    /// and pushing user to next page
    handleSubmit = (event) => {
        console.log('in Handle Submit on DoYouUnderstandContent', event.target.value); 
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_UNDERSTANDCONTENT', payload: this.state});
        this.props.history.push('/3')
        
    }
  
      render() {
        return (
        <Card id="cards">
            <CardContent>
                <Typography color="textSecondary" variant="h5">2 of 4 Pages</Typography>
                <Typography color="textPrimary" variant="h3">How well are you understanding the content? </Typography>
                    <br></br>
                    <FormControl onSubmit={this.handleSubmit}>
                        <Select onChange={this.handleChange} type="number" value={this.state.understanding} placeholder="number 1-5" name="understanding">
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
   
  ///connecting page to react-redux 
  export default connect()(DoYouUnderstandContent);