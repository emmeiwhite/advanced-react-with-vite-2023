import { useState, useEffect } from 'react'

const CodeExample = () => {
  const [value, setValue] = useState(0)

  function message() {
    console.log('Hello folks! It is time for useEffect')
    /** avoid infinite loops, by mistake do not call setValue() in this function, since it will re-render the component and message() is invoked below which again calls setValue() until the callStack is full */

    // setValue(value + 1)
  }

  useEffect(() => {
    console.log('useEffect invoked')
  }, [])

  message()
  return (
    <div>
      <h1>value : {value}</h1>
      <button
        className="btn"
        onClick={() => setValue(value + 1)}
      >
        click me
      </button>
    </div>
  )
}
export default CodeExample
