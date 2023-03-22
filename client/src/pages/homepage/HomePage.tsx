import React from 'react';
import { UserDetails } from '../../components/user-details/UserDetails';
import { MovieList } from '../../components/movie-list/MovieList';
import { Header } from '../../components/header/Header';
import { Container, CssBaseline, Stack } from '@mui/material';
import { useUserListQuery } from './hooks/useUserListQuery';
import { User } from './HomePage.types';
import { SearchBox } from '../../components/search-box/SearchBox';

export const HomePage = () => {
  const [currentUser, setCurrentUser] = React.useState<User>({
    id: Number.NEGATIVE_INFINITY,
    name: ''
  });

  const { hasErrorLoadingUsers, hasSuccessLoadingUsers, usersData, isLoadingUsers } =
    useUserListQuery();

  React.useEffect(() => {
    if (usersData.length > 0) {
      setCurrentUser(usersData[0]);
    }
  }, [usersData]);

  const showUserFavorites = hasSuccessLoadingUsers && currentUser.name !== '';

  return (
    <>
      <CssBaseline />
      <Header />
      {isLoadingUsers && <div>Loading users...</div>}

      {hasErrorLoadingUsers && <div>Error loading users</div>}

      {showUserFavorites && (
        <>
          <Container maxWidth={false} sx={{ pt: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <UserDetails userDetails={currentUser} updateUserDetails={setCurrentUser} />
              <SearchBox userId={currentUser.id} />
            </Stack>
          </Container>

          <MovieList userId={currentUser.id} />
        </>
      )}
    </>
  );
};
