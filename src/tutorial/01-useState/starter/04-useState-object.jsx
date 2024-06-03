import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    userName: 'Immu',
    age: 32,
    hobby: 'Coding'
  })

  const handlePerson = () => {
    setPerson({
      ...person,
      userName: 'Rawdha, Princess',
      age: 25,
      hobby: 'Designing Clothing'
    })
  }
  return (
    <div>
      <p>{person.userName}</p>
      <p>{person.age}</p>
      <p>{person.hobby}</p>

      {/*  */}
      <button
        className="btn"
        onClick={handlePerson}
      >
        Update Values
      </button>
    </div>
  )
}

export default UseStateObject
