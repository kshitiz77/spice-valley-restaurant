import React from 'react'
import './App.css';
import About from './component/About'
import Menu from './component/Menu'
import Shop from './component/Shop'
import Prices from './component/Prices'
import Header from './component/Header'
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Navbar from './component/Navbar';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/Home" >
            <Header></Header>
          </Route>
          <Route path="/Menu">
            <Menu/>
          </Route>
          <Route path="/Shop">
            <Shop></Shop>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Prices">
            <Prices></Prices>
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="" >
            <Header></Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
