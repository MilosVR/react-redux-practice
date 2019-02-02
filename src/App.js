import React, { Component } from 'react';
import JsonData from './jsonData'
import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import edit from './edit';
import add from './add';
import Buy from './buy';
import Favorite from './favorite';
import Search from './Search';
import SearchResults from './SearchResults';
 
class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={JsonData}/>
          <Route exact path='/edit' component={edit}/>
          <Route exact path='/add' component={add}/>
          <Route exact path='/grocery' component={Buy}/>
          <Route exact path='/edit/:id' component={edit}/> 
          <Route exact path='/favorite' component={Favorite}/>
          <Route exact path='/search' component={Search}/>
          <Route  path='/search/:term' component={SearchResults}/>
        </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
