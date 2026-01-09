import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import MoviePoster from "../MoviePoster/MoviePoster";
import { useSearch } from "../../context/SearchContext";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const SearchResults = () => {
  const {searchQuery, setSearchQuery} = useSearch()
  const clearQuery = () => {
    setSearchQuery(undefined)
  }


  const { data, error, isLoading } = useQuery({
    queryKey: ["searchResults", searchQuery],
    queryFn: async () => {
      const res = await fetch(
        "https://yts.lt/api/v2/list_movies.json?query_term=" + searchQuery 
      );
      if (!res.ok) throw new Error("Could not fetch data");
      return res.json();
    },
    enabled: !!searchQuery, // Ensures the query only runs if searchQuery is not empty
  });

  if (isLoading) return <LoadingScreen/>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="lg:p-20 p-5 min-h-screen">
        <h3 className="font-bold text-xl lg:text-2xl text-neutral-50 mb-10">
            Search Results
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {
          data.data.movie_count === 0 
          ? <span>No results found</span> 
          : data.data.movies.map((movie, index) => (
            <Link key={index} to={'/movie/' + movie.id} onClick={clearQuery}>
              <MoviePoster title={movie.title} imgSrc={movie.medium_cover_image} />
            </Link>
          ))
          }
        </div>
    </div>
  );
};

export default SearchResults;
