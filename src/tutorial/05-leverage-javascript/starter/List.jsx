import { Person } from "./Person";
import React from "react";
import { people } from "./../../../data";

function List() {
  return (
    <>
      <h1>Leverage JavaScript</h1>
      <ul>
        {people.map((person) => {
          return (
            <Person
              {...person}
              key={person.id}
            />
          );
        })}
      </ul>
    </>
  );
}

export default List;
