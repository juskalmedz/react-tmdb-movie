import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../components/MovieCard";
import fetchedMovies from "../data/fetchedMovies.json";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const URL =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=70e79ce04a3ea177fe15eedfa5c4d6f0";
  const fetchData = async () => {
    const response = await axios.get(URL);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie}></MovieCard>
      ))}
    </Box>
  );
};

export default MovieList;
