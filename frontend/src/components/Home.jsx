import Navigation from './navbar';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios, { get } from 'axios';
import 'reactstrap';

export default class Home extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }

  componentDidMount() {
    let items = [];

    this.fileget()
      .then(response => {
        this.setState({ items: response.data })
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
        <Navigation />
        <h1>Upload List</h1>
        <ul>
          {this.state.items.map(item => {
            return <li key={`item-${item.file}`}><button> {item.file} </button></li> 
          })}
        </ul>
      </div>
    )
  }

}
