import "./App.css";
import { useState, useEffect } from "react";
import ListDisplay from "./components/ListDisplay";
function App() {
  const [pokemons, setPokemons] = useState({});
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  //step 1
  const getPokemons = async (url) => {
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPokemons(data);
    } catch (err) {
      console.error(err);
    }
  };
  //the use effeect has 2 arguments
  //first is the functionality, 2nd is the condition, what its changing to kick it off

  useEffect(() => {
    getPokemons(url);
  }, []);
  return (
    <>
      <h1>Pokemon App</h1>
      <ListDisplay pokeList={pokemons} getPokemons={getPokemons} />
    </>
  );
}

export default App;
