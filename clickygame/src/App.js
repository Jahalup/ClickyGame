import React, { Component } from 'react';
import BirdCard from "./components/BirdCard";

import birds from "./birds.json";
import './App.css';
class App extends Component {
  state = {
    birds:birds,
    score:0
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Bird Memory Game</h1>
        </header>
        {this.state.birds.map(bird => (
        <BirdCard
        key={bird.id}
        image={bird.image}
        />
        ))}
        
      </div>
    );
  }
}

export default App;
