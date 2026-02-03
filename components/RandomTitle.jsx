function RandomTitle() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

  return (
    <div>
      {randomNumber > 5 ? (
        <h1>You won</h1>
      ) : (
        <h3>You lost</h3>
      )}
      <h1>{randomNumber}</h1>
    </div>
  );
}

export default RandomTitle