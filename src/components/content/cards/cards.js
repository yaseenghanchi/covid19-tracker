import React, {useState, useEffect} from 'react';

import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    infected: {
      background: 'linear-gradient(45deg, #3f51b5 30%, #6bbafe 90%)',     
      color: 'white',     
      padding: '0 10x',
    },
    recovered: {
        background: 'linear-gradient(45deg, #31dc3e 30%, #53ffce 90%)',       
        color: 'white',       
        padding: '0 10px',
      },
      death: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',       
        color: 'white',       
        padding: '0 10px',
      },
  });

const Cards = (props) => {
      console.log(props)
      const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={classes.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variat="body2">Number of active case of COVID-19</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={classes.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variat="body2">Number of recoveries from COVID-19</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} className={classes.death}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variat="body2">Number of deaths caused by COVID-19</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Grid>


            </Grid>
        </div>
    );
};

export default Cards;