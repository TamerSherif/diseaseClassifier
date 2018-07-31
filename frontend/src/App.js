import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Upload from "./components/Upload";
import NotFound from "./components/NotFound";
import Home from './components/Home';
//<Route component={NotFound} />

class App extends Component {
  render() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={Upload} />
      
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;