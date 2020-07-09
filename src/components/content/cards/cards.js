import React, { useState, useEffect } from 'react';
import styles from './cards.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import cx from 'classnames';



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
        background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
        color: 'white',
        padding: '0 10px',
    },
    
});

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    const classes = useStyles();

    if (!confirmed) {
        return 'Fetching data from Api...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={cx(classes.infected, styles.card)}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Infected</Typography>
                        <Typography variant="h4">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variat="body2">Number of active case of COVID-19</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(classes.recovered, styles.card)}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Recovered</Typography>
                        <Typography variant="h4">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                         <Typography variat="body2">{((recovered.value/confirmed.value)*100).toFixed(0)}% Recovery Rate</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} className={cx(classes.death, styles.card)}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Deaths</Typography>
                        <Typography variant="h4">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variat="body2">{((deaths.value/confirmed.value)*100).toFixed(0)}% Fatality Rate</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Grid>


            </Grid>
        </div>
    );
};

export default Cards;