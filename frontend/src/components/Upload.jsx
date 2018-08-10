import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from './navbar';
import axios, { post } from 'axios';
import 'reactstrap';


export default class Upload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
      //this is where we can decide what to do with the response data.
    })
  }
  onChange(e) {
    console.log(this)
    this.setState({file:e.target.files[0]})
  }


  fileUpload(file){
    //we need the csrf token in order for django to auth the form properly!
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'

    const url = 'http://localhost:8000/uploadFile/';
    let formData = new FormData();
    console.log(file.name)

    //append the two main attributes/fields, the file itself and its name
    formData.append('file', file)
    formData.append('name', file.name)

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    //post request
    return  post(url, formData, config)
  }

  render() {
    return (
      
      <form onSubmit={this.onFormSubmit}>
      <Navigation />
        <br />
        <h1 className="text-info col-md-auto">Upload Retinal Image Scan</h1>
        <br />
        <div className="col-md-auto">
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
        </div>
      </form>
   )
  }
}
