import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Background from './Components/Background';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Buttons from './Components/Buttons';
import Welcome from './Components/Welcome';
import Games from './Components/Games';
import Videos from './Components/Videos';
import Covid from './Components/Covid';
import Care from './Components/Care';
import Guides from './Components/Guides';

const App = () => {
  return (
    <Router>
      <Header />
      <Buttons />
      <Switch>
        <Route exact path="/" component={Welcome} />                 
        <Route path="/games" component= {Games} />                 
        <Route path="/videos" component={Videos} />                 
        <Route path="/covid" component= {Covid} />
        <Route path="/care" component= {Care} />
        <Route path="/guides" component= {Guides} />  
      </Switch>
       <Footer/>
    </Router>
  );
}

export default App;
