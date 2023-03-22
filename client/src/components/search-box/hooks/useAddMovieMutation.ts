import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { addMovie } from '../Searchbox.requests';

interface AddMovieData {
  movieId: string;
}
export const useAddMovieMutation = (userId: number) => {
  const queryClient = useQueryClient();

  const addMovieMutation = async (data: AddMovieData): Promise<AxiosResponse> => {
    return addMovie(userId, data.movieId);
  };

  const onAddSuccess = () => {
    queryClient.invalidateQueries(['favorite-movie-ids', userId]);
  };

  return useMutation<AxiosResponse, AxiosError, AddMovieData>(addMovieMutation, {
    onSuccess: onAddSuccess
  });
};
