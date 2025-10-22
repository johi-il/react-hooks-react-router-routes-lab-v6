import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";


function Home() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
     fetch("http://localhost:4000/movies")
       .then((r) => r.json())
       .then(setMovies);
   }, []);

  return (
    <>
      <header>
        <NavBar />
        {/* What component should go here? */}
      </header>
      {movies.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
      <main>{/* Info goes here! */}</main>
    </>
  );
};

export default Home;
