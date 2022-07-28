import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../components/MovieCard";
// import fetchedMovies from "../data/fetchedMovies.json";
import tmdb from "../apis/tmdb";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const URL = "trending/movie/week";
  const fetchData = async () => {
    try {
      const response = await tmdb.get(URL);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
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
