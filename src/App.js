import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount(){
    this.getSwapi();
    this.getPokemon();
  }

  getPokemon = () => {
    axios.get('https://api.pokemontcg.io/v1/cards')
      .then( res => {
        this.setState({
          cards: res.data.cards
        })
      })
      .catch( err => console.log(err))
  }

  getSwapi =() => {
    axios.get(`https://swapi.dev/api/people/11/`)
      .then( response => {
        console.log(response.data)
      })
      .catch( err => console.log(err))
  }

  render(){
    console.log(this.state)
    const mappedCards = this.state.cards.map( card => {
      return <div key={card.id}>
        <img alt={card.name} src={card.imageUrl} className="card-img"/>
        <span>{card.name}</span>
      </div>
    })
    return <div className="App">
      {mappedCards}
    </div>
  }
}

export default App;

