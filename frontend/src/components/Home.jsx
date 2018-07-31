import Navigation from './navbar';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>this is the main page</h2> 
      </div>
    );
  }
}