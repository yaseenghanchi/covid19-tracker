import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Header from './components/header';
import Cards from './components/content/cards/cards'


import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {


  const classes = useStyles();




  return (
    <>
    <Header/>
    <Cards />
    {/* <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs>

      </Grid>
      <Grid item xs>
      </Grid>
      <Grid item xs>
      </Grid>
    
    </Grid>
    </div> */}
    </>
  );
}

export default App;
