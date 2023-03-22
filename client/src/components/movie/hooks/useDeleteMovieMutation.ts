import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { deleteMovie } from '../Movie.requests';

interface DeleteMovieData {
  movieId: string;
}
export const useDeleteMovieMutation = (userId: number) => {
  const queryClient = useQueryClient();

  const deleteMovieMutation = async (data: DeleteMovieData): Promise<AxiosResponse> => {
    return deleteMovie(userId, data.movieId);
  };

  const onDeleteSuccess = () => {
    queryClient.invalidateQueries(['favorite-movie-ids', userId]);
  };

  return useMutation<AxiosResponse, AxiosError, DeleteMovieData>(deleteMovieMutation, {
    onSuccess: onDeleteSuccess
  });
};
