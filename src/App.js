import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {fetchData} from './components/service';

import Header from './components/header';
import Cards from './components/content/cards/cards'


import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {

const [apiData, setApiData] = useState({});

useEffect(()=>{
  const datafromApi = async () =>{
    const data = await fetchData();
    setApiData(data);
  }

  datafromApi();
},[])

  return (
    <>
    <Header/>
    <Cards data={apiData} />
    </>
  );
}

export default App;
