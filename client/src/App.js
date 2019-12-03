import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header>
      <main>
        <Route exact path="/about-us" component={Home} />
        <Route exact path="/" component={About} />
      </main>
    </div>
  );
};

export default App;
