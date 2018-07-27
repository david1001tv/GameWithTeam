import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer.js';
import Gods from './Gods/Gods.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Footer /> {/* Это футер  */}
        <Gods /> {/* Для карточек с богами */}
      </div>
    );
  }
}

export default App;
