import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    //se usa cuando empieza a crearse el component
    fetch("https://jsonplaceholder.typicode.com/users") //busca en este API y si funciona es .then, si no es .catch
      .then((response) => response.json()) // le avisa que la respuesta es un .json
      .then((users) => this.setState({ monsters: users })); //toma lo que retorna el API y lo mete en (users) y luego eso en el monsters array
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }); //es un arrow function para que tome el "this" de cuando fue creado
  };

  render() {
    const { monsters, searchField } = this.state; //es lo mismo que const monsters = this.state.monsters y lo mismo para searchfield
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
