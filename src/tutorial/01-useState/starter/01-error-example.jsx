const ErrorExample = () => {
  let count = 0;
  // A normal variable
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          count += 1;
          console.log(count);
        }}
        className="btn"
      >
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
