import React from 'react';
import Header from './components/Header/Header.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import Companies from './components/Companies/Companies.jsx';
import About from './components/About/About.jsx';
import Lokalize from './components/Lokalize/Lokalize.jsx';
import Productivity from './components/Productivity/Productivity.jsx';
import Quote from './components/Quote/Quote.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Companies />
      <About />
      <Lokalize />
      <Productivity />
      <Quote />
    </div>
  );
}

export default App;
