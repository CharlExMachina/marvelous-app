import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { HomePage } from "./components/HomePage";
import { HeroGallery } from './components/HeroGallery';
import { HeroBio } from './components/HeroBio';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <div style={{marginTop: 80}}>
      <Switch>
          <Route path="/characters" exact component={HeroGallery} />
          <Route path="/characters/:id" component={HeroBio} />
          <Route path="/" component={HomePage} />
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
