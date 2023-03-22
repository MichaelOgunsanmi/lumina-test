import { AxiosResponse } from 'axios';
import { LocalServerInstance } from '../../api/axios-instance';
export const deleteMovie = (userId: number, movieId: string): Promise<AxiosResponse> =>
  LocalServerInstance.delete(`/${userId}/favorites/${movieId}`);
