import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";
import React from "react";

import Movies from "@/mocks/movies.json";

async function delay(ms) {
 return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MoviePage({ params, searchParams }) {
  await delay(3000);
  
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error happened!");
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
