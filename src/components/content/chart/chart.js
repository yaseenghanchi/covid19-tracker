import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../service';

import {Line, Bar} from 'react-chartjs-2';
import styles from './chart.module.css'; 

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailydata] = useState([]);

    useEffect(()=>{
        const fetchApidata = async ()=>{
            const datafromapi = await fetchDailyData();
            setDailydata(datafromapi); 
        }
        fetchApidata();
    },[setDailydata]);

    const lineChart = (
        dailyData.length ? 
        (<Line 
            data={{
                labels:dailyData.map(({date}) => date),
                datasets: [{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },
                {
                    data:dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}
        />) : null 
    );


    const barChart = (
        confirmed
        ?(
            <Bar
                data={{
                    labels:['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            '#3f51b5',
                            '#31dc3e',
                            '#FE6B8B'],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text:`Current State is ${country}`},
                }}
            />
        ) : null
    )
console.log(country);
    return (
        <div className={styles.container}>
            { country ? barChart : lineChart }                   
        </div>
    );
};

export default Chart;