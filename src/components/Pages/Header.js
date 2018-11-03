import React, {Component} from 'react';
// import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


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

         <li><img alt="goat" src='images/goat_small.jpg'/> FEEDBACK! <button onClick={this.adminButton} type="button" value="ADMIN" className="adminButton">ADMIN ONLY!</button></li>
         
         </header>
        )
      }
  }
  
  export default withRouter(Header);