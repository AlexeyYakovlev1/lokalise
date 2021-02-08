import React from 'react';
import Header from './components/Header/Header.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import Companies from './components/Companies/Companies.jsx';
import About from './components/About/About.jsx';
import Lokalize from './components/Lokalize/Lokalize.jsx';
import Productivity from './components/Productivity/Productivity.jsx';
import Quote from './components/Quote/Quote.jsx';
import Translation from './components/Translation/Translation.jsx';
import Tools from './components/Tools/Tools.jsx';
import Made from './components/Made/Made.jsx';

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
      <Translation />
      <Tools />
      <Made />
    </div>
  );
}

export default App;
