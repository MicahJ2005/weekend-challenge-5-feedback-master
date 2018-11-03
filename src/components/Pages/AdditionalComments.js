import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

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
        <div>
            <h2>4 of 4 Pages</h2>
            <h1>Any comments you want to leave? </h1>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.comments} placeholder="Add Comment Here" name="comments" />
                <input type="submit" value="NEXT" />
            </form>
        </div> 
         
        )
      }
  }
  
  export default connect()(AdditionalComments);