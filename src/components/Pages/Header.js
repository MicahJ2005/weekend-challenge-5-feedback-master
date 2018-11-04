import React, {Component} from 'react';
// import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

// console.log('in Header');
class Header extends Component {
  
  adminButton = (event) => {
    console.log('in adminButton');
    event.preventDefault();
    this.props.history.push('/admin');
  };

      render() {
        return (
        <header className="header">

         <li><img alt="goat" src='images/feedbackPic.jpg'/> FEEDBACK! <Button onClick={this.adminButton} variant="contained" color="secondary" type="button" value="ADMIN" size="small" className="adminButton">ADMIN ONLY!</Button></li>
         
         </header>
        )
      }
  }
  
  export default withRouter(Header);