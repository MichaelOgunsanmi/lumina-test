import Grid from '@mui/material/Grid';
import * as React from 'react';
import { SearchResult } from './SearchBox';
import { useAddMovieMutation } from './hooks/useAddMovieMutation';

interface SearchBoxOptionProps {
  props: React.HTMLAttributes<HTMLLIElement>;
  option: SearchResult;
  userId: number;
  handleClosePopper: () => void;
}
export const SearchBoxOption: React.FC<SearchBoxOptionProps> = ({
  props,
  option: { Title, imdbID },
  userId,
  handleClosePopper
}) => {
  const { mutate } = useAddMovieMutation(userId);

  const handleClick = React.useCallback(() => {
    mutate({ movieId: imdbID });

    handleClosePopper();
  }, [imdbID, handleClosePopper, mutate]);

  return (
    <li {...props} onClick={handleClick}>
      <Grid container alignItems="center">
        <Grid item sx={{ width: '80%', wordWrap: 'break-word' }}>
          {Title}
        </Grid>
      </Grid>
    </li>
  );
};
