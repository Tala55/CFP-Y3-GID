import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import './App.css';
// Tittle
import GetitDone from './components/Get-it-Done';
// Tabs
import Quotes from './components/Tabs/Management/Boxes/Quotes';
import Todolist from './components/Tabs/Management/Boxes/TodoList';
import Reminder from './components/Tabs/Management/Boxes/Reminder';



import Home from "./components/Tabs/Home";
import Management from './pages/management'
import Navbar from './components/Navbar/index'


import Post from './containers/Post';
import MainPage from './pages';
import PageNotFound from './pages/404';
import inspiration from './components/Tabs/inspiration';
import Aboutus from './components/Tabs/Aboutus';

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
      
        <Route  path='/Home' component={Home}/>
      
        <Route  path='/Management' component={Management}/>
        <Route  path='/Quotes' component={Quotes}/>
        <Route  path='/Todolist' component={Todolist}/>
        <Route  path='/Reminder' component={Reminder}/>
        <Route  path='/inspiration' component={inspiration}/>
        <Route  path='/Aboutus' component={Aboutus}/>
       <Route  component={PageNotFound} />
       </Switch>
       
       
</div>

      </div>
    </Router>
  );
}
}

export default App;
