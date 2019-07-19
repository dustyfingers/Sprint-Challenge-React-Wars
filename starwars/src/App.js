import React from 'react';
import StarWarsCard from './components/starwars-card/starwars-card.component';
import './App.css';
import './components/StarWars.sass';

let cards = [];
for (let i = 1; i < 11; i++) {
  cards.push(<StarWarsCard key={i} personId={i} />)
}

const App = ({ classes }) => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='cards-container'>
        {cards}
      </div>
    </div >
  );
}

export default App;
