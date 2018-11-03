import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const emptyDoYouUnderstandContent = {
    understanding: '',        
};

// console.log('in DoYouUnderstandContent');
class DoYouUnderstandContent extends Component {
    state = emptyDoYouUnderstandContent;
    
    handleChange = (event) => {
        console.log('in handleChange on DoYouUnderstandContent', event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    

    handleSubmit = (event) => {
        console.log('in Handle Submit on DoYouUnderstandContent', event.target.value); 
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_UNDERSTANDCONTENT', payload: this.state});
        this.props.history.push('/3')
        
    }
  
      render() {
        return (
        <div>
            <h1>2 of 4 Pages</h1>
            <h2>How well are you understanding the content? </h2>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="number" value={this.state.understanding} placeholder="number 1-5" name="understanding" />
                <input type="submit" value="NEXT" />
            </form>
        </div> 
         
        )
      }
  }
   
  
  export default connect()(DoYouUnderstandContent);