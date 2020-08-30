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
import ButtonsChildren from './Components/ButtonsChildren';
import ButtonsParents from './Components/ButtonsParents';

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
          
          <Route path="/" exact>
            <Buttons />
            <Welcome />
          </Route>

          <Route path="/covid">
            <Buttons />
            <Covid />
          </Route>

          <Route path="/games">
            <ButtonsChildren />
            <Games />
          </Route>

          <Route path="/videos">
            <ButtonsChildren />
            <Videos />
          </Route>

          <Route path="/covidChildren">
            <ButtonsChildren />
            <Covid />
          </Route>
          
          <Route path="/covidParents">
            <ButtonsParents />
            <Covid />
          </Route>
          <Route path="/care">
            <ButtonsParents />
            <Care />
          </Route>
          <Route path="/guides">
            <ButtonsParents />
            <Guides />
          </Route>

        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
