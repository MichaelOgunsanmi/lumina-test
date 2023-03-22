export interface Movie {
  id: string;
  title: string;
  poster: string;
  plot: string;
}

export interface MovieDetailsDTO {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
export interface Rating {
  Source: string;
  Value: string;
}

interface FavoriteMovieDTO {
  userId: string;
  movieId: string;
  createdAt: string;
  updatedAt: string;
}
export interface FavoriteMoviesDTO {
  data: FavoriteMovieDTO[];
}
