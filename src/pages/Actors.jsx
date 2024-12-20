import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/actors")
      .then((response) => response.json())
      .then((data) => setActors(data))
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);

  return (
    <>
      <NavBar />
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.length === 0 ? (
          <p>Loading actors...</p>
        ) : (
          actors.map((actor) => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={`${actor.id}-${index}`}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Actors;
