import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setList(response.data.results));
  }, []);

  return (
    <>
      <div className="card-title">
        <div className="title">
          Pokemons <hr /> do Vini
        </div>
      </div>
      {list.map((item) => (
        <Pokemon data={item} />
      ))}
    </>
  );
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    //charmander
    axios.get(data.url).then((response) => setDetails(response.data));
  }, []);

  if (details === null) {
    return <div> -</div>;
  }

  return (
    <div className="card">
      <div className="image">
        <img src={details.sprites.front_default} alt="pokemons" />
      </div>
      <div className="name">
        <h1>{details.name}</h1>
      </div>
      <div className="experience">
        <h3>EXP {details.base_experience}</h3>
      </div>
    </div>
  );
};

export default Home;
