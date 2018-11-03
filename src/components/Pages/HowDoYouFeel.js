
import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
// console.log('in HowDoYouFeel');

const emptyHowDoYouFeel = {
    feeling: '',        
};

class HowDoYouFeel extends Component {
    state = emptyHowDoYouFeel;

    handleChange = (event) => {
        console.log('in handleChange on HowDoYouFeel');
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    

    handleSubmit = (event) => {
        console.log('in Handle Submit on HowDoYouFeel'); //event is coming back undefined
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state});
        this.props.history.push('/2');
        
    };

    clearSupportField = () => {
        this.setState(emptyHowDoYouFeel);
    };
  
      render() {
        return (
        <div>
            <h2>1 of 4 Pages</h2>
            <h1>How are you feeling today?</h1>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="number" value={this.state.feeling} placeholder="number 1-5" name="feeling" />
                <input type="submit" value="NEXT" />
            </form>
        </div> 
         
        )
      }
  }
  
  export default connect()(HowDoYouFeel);