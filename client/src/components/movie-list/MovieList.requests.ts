import { AxiosResponse } from 'axios';
import { FavoriteMoviesDTO, MovieDetailsDTO } from './MovieList.types';
import { LocalServerInstance, OMDBInstance } from '../../api/axios-instance';

export const getMovieDetails = (IMDbId: string): Promise<AxiosResponse<MovieDetailsDTO>> =>
  OMDBInstance.get<MovieDetailsDTO>('', {
    params: {
      i: IMDbId
    }
  });

export const getUserFavoriteMovies = (userId: number): Promise<AxiosResponse<FavoriteMoviesDTO>> =>
  LocalServerInstance.get<FavoriteMoviesDTO>(`/${userId}/favorites`);
