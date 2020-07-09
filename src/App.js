import React, {useEffect, useState} from 'react';
import style from './index.css';
import {fetchData} from './components/service';

import Header from './components/header';
import Cards from './components/content/cards/cards';
import Chart from './components/content/chart/chart';




function App() {

const [apiData, setApiData] = useState({});
const [countryData, setCountryData] = useState({});
useEffect(()=>{
  const datafromApi = async () =>{
      const data = await fetchData();
      setApiData(data);
  }
  datafromApi();
},[]);

const handleCountryChange = async (country) =>{
  const fetchedData = await fetchData(country);

  setApiData(fetchedData);
  setCountryData(country)
}


  return (
    <>
    <Header handleCountryChange={handleCountryChange} />
    <br/><br/>
   <div className={style.container}>
    <Cards data={apiData} />
    <br/>
    <Chart data={apiData} country={countryData} />
   </div>
    </>
  );
}

export default App;
