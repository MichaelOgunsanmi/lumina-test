import { Movie } from '../MovieList.types';
import { getMovieDetails } from '../MovieList.requests';
import { useQueries } from '@tanstack/react-query';

export const useMovieListQuery = (movieIds: string[]) => {
  const movieListQuery = async (movieId: string): Promise<Movie> => {
    const axiosResponse = await getMovieDetails(movieId);

    const { imdbID, Title, Plot, Poster } = axiosResponse.data;

    return {
      id: imdbID,
      title: Title,
      poster: Poster,
      plot: Plot
    };
  };

  useQueries({
    queries: movieIds.map((movieId) => ({
      queryKey: ['movie', movieId],
      queryFn: () => movieListQuery(movieId),
      staleTime: Infinity
    }))
  });
};
