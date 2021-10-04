import React from 'react';
import { Typography, AppBar, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const theme1 = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '0.1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35vw',
    border: '0.3em solid green',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ThemeProvider theme={theme1}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h3" align="center">Marleen&#39;s Video Calling App</Typography>
        </AppBar>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </ThemeProvider>
    </div>
  );
};

export default App;
