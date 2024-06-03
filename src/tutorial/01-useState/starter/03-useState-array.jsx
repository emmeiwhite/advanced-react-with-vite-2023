import { useState } from 'react'
import { data } from './../../../data'

const UseStateArray = () => {
  const [persons, setPersons] = useState(data)
  console.log(persons)

  function clearAll() {
    setPersons([])
  }

  function removePerson(id) {
    const updatedPersons = persons.filter(person => person.id !== id)

    setPersons(updatedPersons)
  }

  function renderList() {
    return persons.map(({ id, name }) => {
      return (
        <div
          key={id}
          className="person"
        >
          <h4> {name}</h4>
          <button
            onClick={() => removePerson(id)}
            className="btn"
          >
            remove item
          </button>
        </div>
      )
    })
  }

  function resetList() {
    setPersons(data)
  }
  return (
    <>
      {renderList()}
      <br />

      <button
        className="btn"
        onClick={persons.length > 0 ? clearAll : resetList}
      >
        {persons.length > 0 ? 'clear items' : 'load items'}
      </button>
    </>
  )
}

export default UseStateArray
