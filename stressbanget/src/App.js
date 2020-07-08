import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount (){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      return(
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder = 'search monsters'
        handleChange = {this.handleChange}
        />
        <CardList monsters={filtered}></CardList>
        <h2>The History of Monsters Rolodex</h2>
        <p>So my name is Febrilian Kristiawan, and I'm currently learning react. It's been hard because everything is pretty new for me, but I know I can go through the course here. Wish me luck!</p>
        </div>
      )
  }
}

export default App;
