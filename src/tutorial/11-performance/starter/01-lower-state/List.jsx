import Person from "./Person";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person
            {...person}
            key={person.id}
          />
        );
      })}
    </div>
  );
};
export default List;
