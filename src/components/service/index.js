import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) =>{
    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }   
    
    
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        
    }
}

export const fetchDailyData = async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        
    }
}

export const countryWiseData = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((countries)=>countries.name);
    } catch (error) {
        
    }
}