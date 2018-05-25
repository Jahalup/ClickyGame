import React, { Component } from 'react';
import BirdCard from "./components/BirdCard/BirdCard";
import birds from "./birds.json";
import './App.css';
import ScoreCard from './components/ScoreCard/scorecard';
import NavBar from './components/Navbar/nav';
import Wrapper from './components/wrapper/wrapper';
import CardCont from './components/cardcont/cardcont';


function shuffled(array) {
  for(let i = array.length - 1; i>0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array;
};

class App extends Component {
  state = {
    birds,
    score:0,
    message:"Click a bird to begin!",
    topscore:"",
    clicked: [],
    class:""

  }
clickevent = id => {
  console.log(id)
 if(this.state.clicked.indexOf(id) === -1) {
   this.scoreup();
   this.setState({clicked: this.state.clicked.concat(id) });
   this.newshuffle();
 } else {
   alert("game over");
   this.setState({class:"animated tada"});
   this.reset();
 
 }
  // (this.state.clicked.indexOf(id) === -1) ? (this.setState({clicked:this.state.clicked.push(id)}), this.scoreup()) : this.reset();
};

scoreup = () => {
 let scoreup = this.state.score + 1;
 let praise = ["good job", "Nice Going", "great!", "Bird-tastic!", "good for you!", "keep it up!"]
 this.setState({score:scoreup,
               message:praise[Math.floor(Math.random() * 5)]}
              );

if (scoreup>this.state.topscore) { this.setState({topscore:scoreup})}
                                    
else if (scoreup===12) {this.setState({message:"You Win!!!"})};
this.newshuffle();
}

reset = () => {
  this.setState({score:0,
                message:"Click a bird to begin!",
                clicked: [],
             }
);
this.newshuffle();

}



newshuffle = () => {
  let newlyshuffled = shuffled(birds);
  this.setState({birds: newlyshuffled});
}



  render() {
    return (
      
      <div className="App">
     <Wrapper>
       <header>
      <NavBar />
          <ScoreCard
          score={this.state.score}
          topscore={this.state.topscore}
          message={this.state.message}

          />
          </header>
          <main>
       <CardCont
       class={this.state.class}>
        {this.state.birds.map(bird => (
        <BirdCard
        key={bird.id}
        id={bird.id}
        image={bird.image}
        newshuffle={this.newshuffle}
        clickevent={this.clickevent}
        scoreup={this.scoreup}
        reset={this.reset}

        />
        ))}
        </CardCont>
        </main>
       
        </Wrapper>
        
      </div>
     
     
    );
  }
}

export default App;
