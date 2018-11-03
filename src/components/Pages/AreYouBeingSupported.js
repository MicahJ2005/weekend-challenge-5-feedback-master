import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const emptyAreYouBeingSupported = {
    support: '',        
};

// console.log('in AreYouBeingSupported');
class AreYouBeingSupported extends Component {
  
    state = emptyAreYouBeingSupported;
    
    handleChange = (event) => {
        console.log('in handleChange on AreYouBeingSupported', event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    

    handleSubmit = (event) => {
        console.log('in Handle Submit on AreYouBeingSupported', event.target.value); 
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state});
        this.props.history.push('/4')
        
    };

    clearSupportField = () => {
        this.setState(emptyAreYouBeingSupported);
    };
  
      render() {
        return (
        <div>
            <h1>3 of 4 Pages</h1>
            <h2>How well are you being supported? </h2>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="number" value={this.state.support} placeholder="number 1-5" name="support" />
                <input type="submit" value="NEXT" />
            </form>
        </div> 
         
        )
      }
  }
  
  export default connect()(AreYouBeingSupported);



