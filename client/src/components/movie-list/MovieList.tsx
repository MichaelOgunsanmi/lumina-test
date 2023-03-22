import React from 'react';
import { Container, Grid } from '@mui/material';
import { Movie } from '../movie/Movie';
import { useMovieListQuery } from './hooks/useMovieListQuery';
import { useFavoriteMoviesQuery } from './hooks/useFavoriteMoviesQuery';

interface MoviesProps {
  userId: number;
}
export const MovieList: React.FC<MoviesProps> = ({ userId }) => {
  const {
    favoriteMovieIds,
    isLoadingFavoriteMovieIds,
    hasSuccessLoadingFavoriteMovieIds,
    hasErrorLoadingFavoriteMovieIds
  } = useFavoriteMoviesQuery(userId);

  useMovieListQuery(favoriteMovieIds);

  return (
    <Container maxWidth={false} sx={{ pt: 4, mb: 8 }}>
      <Grid container spacing={4}>
        {isLoadingFavoriteMovieIds && <p>Loading...</p>}

        {hasErrorLoadingFavoriteMovieIds && <p>We ran into an error</p>}

        {hasSuccessLoadingFavoriteMovieIds && (
          <>
            {favoriteMovieIds.map((movieId) => (
              <Movie key={movieId} movieId={movieId} userId={userId} />
            ))}
          </>
        )}
      </Grid>
    </Container>
  );
};
