import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Header(props) {
  return (
    <AppBar position='static'>
      <Toolbar>Arc Development</Toolbar>
    </AppBar>
  );
}
