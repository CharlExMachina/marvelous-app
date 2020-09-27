import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { HomePage } from "./components/HomePage";
import { HeroGallery } from './components/HeroGallery';
import { HeroBio } from './components/HeroBio';
import { ComicPage } from './components/ComicPage';
import { ComicGallery } from './components/ComicGallery';
import { StoryPage } from './components/StoryPage';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <div style={{marginTop: 80}}>
      <Switch>
          <Route path="/characters" exact component={HeroGallery} />
          <Route path="/characters/:id" component={HeroBio} />
          <Route path="/comics" exact component={ComicGallery} />
          <Route path="/comics/:id" component={ComicPage} />
          {/* <Route path="/stories" exact component={ComicGallery} /> */}
          <Route path="/stories/:id" component={StoryPage} />
          <Route path="/" component={HomePage} />
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
