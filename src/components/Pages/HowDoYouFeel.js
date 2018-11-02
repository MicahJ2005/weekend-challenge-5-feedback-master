
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
console.log('in HowDoYouFeel');

const emptyHowDoYouFeel = {
    feeling:'',        
};

class HowDoYouFeel extends Component {
    state = emptyHowDoYouFeel;

    handleChange = (event) => {
        console.log('in handleChange on HowDoYouFeel');
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    

    handleSubmit = (event) => {
        console.log('in Handle Submit on HowDoYouFeel', event); //event is coming back undefined
        event.preventDefault();
        
    }
  
      render() {
        return (
        <div>
            <h1>1 of 4 Pages</h1>
            <h2>How are you feeling today?</h2>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="number" value={this.state.feeling} placeholder="number 1-5" name="feeling" />
                <input type="submit" value="NEXT" />
            </form>
        </div> 
         
        )
      }
  }
  
  export default withRouter(HowDoYouFeel);