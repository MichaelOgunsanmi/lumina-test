import React from 'react';
import { Autocomplete, TextField, Typography } from '@mui/material';
import { AutocompleteOption } from './UserDetails.types';
import { User } from '../../pages/homepage/HomePage.types';
import { useUserListQuery } from '../../pages/homepage/hooks/useUserListQuery';

interface UserDetailsProps {
  userDetails: User;
  updateUserDetails: React.Dispatch<React.SetStateAction<User>>;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ userDetails, updateUserDetails }) => {
  const [value, setValue] = React.useState<AutocompleteOption>({
    id: userDetails.id,
    label: userDetails.name
  });
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<AutocompleteOption[]>([]);

  const { usersData } = useUserListQuery();

  const handleSelectOnChange = React.useCallback(
    (event: React.SyntheticEvent, newValue: AutocompleteOption | null) => {
      const { id, label } = newValue!;

      setValue({
        id,
        label
      });
      updateUserDetails({
        id,
        name: label
      });
    },
    [updateUserDetails]
  );

  const handleInputOnChange = React.useCallback(
    (event: React.SyntheticEvent, newInputValue: string) => {
      setInputValue(newInputValue);
    },
    []
  );

  React.useEffect(() => {
    const options = usersData.map((user) => ({
      id: user.id,
      label: user.name
    }));

    setOptions(options);
  }, [usersData]);

  return (
    <>
      <Autocomplete
        loading
        value={value}
        onChange={handleSelectOnChange}
        inputValue={inputValue}
        onInputChange={handleInputOnChange}
        disableClearable
        options={options}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Select a user" />}
      />
      <Typography variant="h6" gutterBottom sx={{ placeSelf: 'center', mb: 0 }}>
        {value && value.label}
      </Typography>
    </>
  );
};
