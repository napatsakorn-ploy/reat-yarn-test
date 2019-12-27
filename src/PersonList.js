import React from "react";
import Person from "./Person";
import "./PersonList.css";

const PersonList = ({ persons }) => {
  return (
    <div className="PersonList-container">
      {persons.map(person => (
        <Person
          key={person.id}
          id={person.id}
          name={person.name}
          title={person.title}
        />
      ))}
    </div>
  );
};

export default PersonList;
