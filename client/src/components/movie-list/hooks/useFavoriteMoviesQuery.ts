import { useQuery } from '@tanstack/react-query';
import { getUserFavoriteMovies } from '../MovieList.requests';

export const useFavoriteMoviesQuery = (userId: number) => {
  const favoriteMoviesQuery = async (): Promise<string[]> => {
    const axiosResponse = await getUserFavoriteMovies(userId);

    return axiosResponse.data.data.map(({ movieId }) => movieId);
  };

  const userFavoriteMoviesIds = useQuery({
    queryKey: ['favorite-movie-ids', userId],
    queryFn: favoriteMoviesQuery,
    staleTime: Infinity
  });

  const favoriteMovieIds = userFavoriteMoviesIds.data ?? [];
  const isLoadingFavoriteMovieIds = userFavoriteMoviesIds.isLoading;
  const hasErrorLoadingFavoriteMovieIds = userFavoriteMoviesIds.isLoadingError;
  const hasSuccessLoadingFavoriteMovieIds = userFavoriteMoviesIds.isSuccess;

  return {
    favoriteMovieIds,
    isLoadingFavoriteMovieIds,
    hasErrorLoadingFavoriteMovieIds,
    hasSuccessLoadingFavoriteMovieIds
  };
};
