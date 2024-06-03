import { useState } from 'react'
const UseStateBasics = () => {
  // state updates trigger a re-render which inturn updates the UI

  const [count, setCount] = useState(0)
  // useState: It returns an array with two elements. first element is a state value and second element is a function which is used to update the state

  function handleClick() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="container">
      <h4> You clicked {count} times</h4>
      <button
        className="btn"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics
