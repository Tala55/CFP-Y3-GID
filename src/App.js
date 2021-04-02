import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import './App.css';
// Tittle
import GetitDone from './components/Get-it-Done';
// Tabs
import Quotes from './components/Tabs/Quotes';
import Calendar from "./components/Tabs/Calendar";
import TodoList from './components/Tabs/TodoList'
import Navbar from './components/Navbar/index'

import Post from './containers/Post';
import MainPage from './pages';
import PageNotFound from './pages/404';

class App extends Component {
render(){
  return (
    <Router>
      <div className="App">   
      
      <GetitDone /> 
      <Navbar/>
<div className="container">
<Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/post/:postId" component={Post} />
        <Route path='/Quotes' component={Quotes}/>
        <Route path='/Calendar' component={Calendar}/>
        <Route path='/TodoList' component={TodoList}/>
        <Route  component={PageNotFound} />
       </Switch>
       
       
</div>

      </div>
    </Router>
  );
}
}

export default App;
