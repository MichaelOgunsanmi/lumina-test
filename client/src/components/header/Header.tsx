import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Favorite Movies
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
