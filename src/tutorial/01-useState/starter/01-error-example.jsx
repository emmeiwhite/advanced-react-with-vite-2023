const ErrorExample = () => {
  let count = 0
  // A normal variable

  function handleClick() {
    count += 1
    console.log(count)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={handleClick}
        className="btn"
      >
        Increase
      </button>
    </div>
  )
}

export default ErrorExample
