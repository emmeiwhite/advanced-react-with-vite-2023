import { useState } from 'react'

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setTimeout(() => {
      setCount(currentCount => {
        console.log(`Invoked ${currentCount} times!`)
        return currentCount + 1
      })
    }, 3000)

    // useState() is asynchronous
  }
  return (
    <div>
      <h2>{count}</h2>
      <button
        className="btn"
        onClick={handleCount}
      >
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
