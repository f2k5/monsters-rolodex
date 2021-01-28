import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }

    //console.log(this.state);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  //using arrow functions we automatically bind "this" to the function we are using
  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  //the render method returns any HTML that we want
  render () {

    //destructing:
    //destructing helps pull properties off of objects and set them to constants that we put inside curly braces, aka the curly braces contains those objects:
    const { monsters, searchField } = this.state;

    //the above is the equivalent of saying:
    // const searchFeild = this.state.searchFeild;
    // const monsters = this.state.monsters;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  
    return (
      <div className = "App">
        <header>
          <h1> Monsters Rolodex </h1>
        </header>

        <SearchBox 
          placeholder = "search monster"
          handleChange = {this.handleChange}
        />

        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}



export default App;