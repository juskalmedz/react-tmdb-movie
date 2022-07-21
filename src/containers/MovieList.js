import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";

const MovieList = () => {
  const [queryParams, setQueryPrams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const sortMovies = (type) => {
      if (type === "asc") {
        const sortedAsc = movies.sort(
          (a, b) => a.vote_average - b.vote_average
        );
        setMovies(sortedAsc);
      } else if (type === "desc") {
        const sortedDesc = movies.sort(
          (a, b) => b.vote_average - a.vote_average
        );
        setMovies(sortedDesc);
      }
    };
    sortMovies(queryParams.get("sort"));
  }, [queryParams]);

  const setSortParams = (type) => {
    queryParams.set("sort", type);
    setQueryPrams(queryParams);
  };
  return (
    <>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        Sort by rating
        <Button onClick={() => setSortParams("asc")}>Asc</Button>
        <Button onClick={() => setSortParams("desc")}>Desc</Button>
      </Box>
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
    </>
  );
};

export default MovieList;
