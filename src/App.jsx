import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import Speakers from './components/Speakers';
import Committee from './components/Committee';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="event">
        <Description />
      </div>
      <div id="speaker">
        <Speakers />
      </div>
      <div id="committee">
        <Committee />
      </div>
      <Footer />
    </div>
  );
}

export default App;