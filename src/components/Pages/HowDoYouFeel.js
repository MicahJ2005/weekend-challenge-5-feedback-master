
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

//setting a constant empying onject
const emptyHowDoYouFeel = {
    feeling: '',        
};

class HowDoYouFeel extends Component {
    state = emptyHowDoYouFeel;

    ///handleChange is changing state on the click event
    handleChange = (event) => {
        console.log('in handleChange on HowDoYouFeel');
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    /// this function is calling our TYPE and sending payload. 
    ///It is also pushing to the next page
    handleSubmit = (event) => {
        console.log('in Handle Submit on HowDoYouFeel'); //event is coming back undefined
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state});
        this.props.history.push('/2');
        
    };
/// resetting state 
    clearSupportField = () => {
        this.setState(emptyHowDoYouFeel);
    };
  
      render() {
        return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" variant="h5">1 of 4 Pages</Typography>
                <Typography color="textPrimary" variant="h3">How are you feeling today?</Typography>
                    <br></br>
                    <FormControl onSubmit={this.handleSubmit}>
                        <Select onChange={this.handleChange} type="number" value={this.state.feeling} placeholder="number 1-5" name="feeling">
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
  
  ///connecting react-redux
  export default connect()(HowDoYouFeel);