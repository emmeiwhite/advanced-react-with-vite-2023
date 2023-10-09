import Person from "./Person";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person {...person} />;
      })}
    </div>
  );
};
export default List;
