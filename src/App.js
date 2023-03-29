import './css/main.css';
import { useEffect, useState } from 'react';
import Movies from './components/Movies';
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const title = 'James Bond';

  const fetchMovies = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&type=movie&plot=full&apikey=99468b8b&r=json`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      const movieInfo = await Promise.all(
        responseJson.Search.map(async (movie) => {
          const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=25dbba7e&r=json`;
          const movieResponse = await fetch(movieUrl);
          const movieResponseJson = await movieResponse.json();
          return { ...movie, ...movieResponseJson }
        })
      );
      setMovies(movieInfo);
    }
  };

  const fetchMoviesSearch = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&type=movie&plot=full&apikey=99468b8b&r=json`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      const movieInfo = await Promise.all(
        responseJson.Search.map(async (movie) => {
          const movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=25dbba7e&r=json`;
          const movieResponse = await fetch(movieUrl);
          const movieResponseJson = await movieResponse.json();
          return { ...movie, ...movieResponseJson }
        })
      );
      setMovies(movieInfo);
    }
  };

  useEffect(() => {
    fetchMovies(title);
    fetchMoviesSearch(search);
  }, [search]);
  console.log('movies:', movies)
  return (
    <div className="App">
      <main>
        <Search search={search} setSearch={setSearch}></Search>
        <h1 className="width">Recommended movies</h1>
        <section className="width">
          <Movies movies={movies}></Movies>
        </section>
      </main>
    </div>
  );
};

export default App;