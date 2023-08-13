const ErrorExample = () => {
  let count = 0;
  function updateCount() {
    count = count + 1;
    console.log(count);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={updateCount}
      >
        Update Count
      </button>
    </div>
  );
};

export default ErrorExample;
