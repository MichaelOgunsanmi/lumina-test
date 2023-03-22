import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { Movie as MovieModel } from '../movie-list/MovieList.types';
import { useDeleteMovieMutation } from './hooks/useDeleteMovieMutation';

interface MovieProps {
  movieId: string;
  userId: number;
}
export const Movie: React.FC<MovieProps> = ({ movieId, userId }) => {
  const queryClient = useQueryClient();

  const { data, status } = queryClient.getQueryState<MovieModel>(['movie', movieId])!;

  const { mutate } = useDeleteMovieMutation(userId);

  const handleRemoveMovie = React.useCallback(() => {
    mutate({ movieId });
  }, [movieId, mutate]);

  return (
    <Grid item key={1} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'error' && <p>We ran into an error</p>}
        {status === 'success' && (
          <>
            <CardMedia component="img" image={data!.poster} alt={data!.title} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {data!.title}
              </Typography>
              <Typography>{data!.plot}</Typography>
            </CardContent>
            <CardActions sx={{ placeContent: 'end' }}>
              <Button size="small" variant="contained" onClick={handleRemoveMovie}>
                Remove
              </Button>
            </CardActions>
          </>
        )}
      </Card>
    </Grid>
  );
};
