function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
    </div>
  );
}

export default App;
