import Navigation from './navbar';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios, { get } from 'axios';
import 'reactstrap';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.fileget = this.fileget.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileget().then((response)=>{
      console.log(response.data);
      //this is where we can decide what to do with the response data.
    })
  }

  renderList() {
    return this.fileget().then(function(response){
      let data = this.props.response.data
      const Test = ({data}) => (
        <div>
          {data.map(item => (
            <div className="listItems" key={item.name}>{item.name}</div>
          ))}
        </div>
      );    
      return Test; 

      })


    }

  fileget(){
    //we need the csrf token in order for django to auth the form properly!
    //axios.defaults.xsrfCookieName = 'csrftoken'
    //axios.defaults.xsrfHeaderName = 'X-CSRFToken'

    const url = 'http://localhost:8000/api/file_upload/';

    return  get(url)
  }



  render() {
    return (
      <div>
        <ul>
          {console.log('hello')}
          { this.renderList() }
        </ul>
      </div>   

   )
  }
}
