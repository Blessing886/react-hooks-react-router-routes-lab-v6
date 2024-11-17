import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/directors")
      .then(response => response.json())
      .then(data => setDirectors(data))
      .catch(error => console.error("Error fetching directors:", error));
  }, []);

  return (
    <>
      <NavBar />
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.length === 0 ? (
          <p>Loading directors...</p>  {/* Add loading state */}
        ) : (
          directors.map(director => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie) => (
                  <li key={movie}>{movie}</li>  {/* Use movie name as key */}
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Directors;
