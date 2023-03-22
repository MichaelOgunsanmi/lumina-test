import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from '@mui/material/utils';
import { OMDBInstance } from '../../api/axios-instance';
import { SearchBoxOption } from './SearchBoxOption';
export interface SearchResult {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface SearchBoxProps {
  userId: number;
}
export const SearchBox: React.FC<SearchBoxProps> = ({ userId }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<SearchResult[]>([]);
  const [open, setOpen] = React.useState(false);
  const closePopper = React.useCallback(() => {
    setOpen(false);
    setInputValue('');
  }, []);
  const openPopper = React.useCallback(() => {
    setOpen(true);
  }, []);

  const fetch = React.useMemo(
    () =>
      debounce(async (request: { input: string }, callback: (results: SearchResult[]) => void) => {
        const axiosResponse = await OMDBInstance.get('', {
          params: {
            s: request.input
          }
        });

        const options = axiosResponse.data.Response === 'True' ? axiosResponse.data.Search : [];

        callback(options);
      }, 400),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }

    fetch({ input: inputValue }, (results: SearchResult[]) => {
      if (active) {
        setOptions(results);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  return (
    <Autocomplete
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.Title}
      filterOptions={(x) => x}
      options={options}
      disableClearable
      filterSelectedOptions
      noOptionsText="No matching movie"
      open={open}
      onOpen={openPopper}
      onClose={closePopper}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Add a new favorite movie" fullWidth />}
      renderOption={(props, option) => (
        <SearchBoxOption
          key={option.imdbID}
          props={props}
          option={option}
          userId={userId}
          handleClosePopper={closePopper}
        />
      )}
    />
  );
};
