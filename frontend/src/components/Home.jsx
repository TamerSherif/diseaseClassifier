import Navigation from './navbar';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <br />
        <h1 className="text-info col-md-auto">This is the main page</h1> 
      </div>
    );
  }
}