import { AxiosResponse } from 'axios';
import { LocalServerInstance } from '../../api/axios-instance';
export const addMovie = (userId: number, movieId: string): Promise<AxiosResponse> =>
  LocalServerInstance.post(`/${userId}/favorites/`, {
    movieId
  });
