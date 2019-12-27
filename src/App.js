import React from "react";
import SearchBox from "./SearchBox"; // SearchBox.js
import { persons } from "./persons"; // data array -> persons.js
import PersonList from "./PersonList"; // Person.js

class App extends React.Component {
  constructor() {
    super();
    this.state = { persons: persons, searchField: "" };
  }

  onSearchFiled = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    // console.log(this.state.persons)
    // console.log(this.state.searchField);

    // const filterRobot = this.state.persons.filter(person => person.name.includes(this.state.searchField))

    const filterRobot = this.state.persons.filter(person =>
      person.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div>
        <SearchBox searchChange={this.onSearchFiled} />
        <PersonList persons={filterRobot} />
      </div>
    );
  }
}

export default App;
