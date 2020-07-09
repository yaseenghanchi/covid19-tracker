import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {NativeSelect, FormControl} from '@material-ui/core';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import GitHubIcon from '@material-ui/icons/GitHub';

import {countryWiseData} from './service';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  
defaultSelect:{
  color: '#fff'
}

}));


function Header({handleCountryChange}){
  const classes = useStyles();
  const [fetchedCountries, setFetchCountries] = useState([]);

  useEffect(()=>{
    const fetchApi = async () =>{
      const resp = await countryWiseData();
      setFetchCountries(resp);
    }
    fetchApi();
  },[setFetchCountries]);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
           
            <FormControl className={classes.formControl}>
              <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="Global" className={classes.defaultSelect}>Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
              </NativeSelect>
            </FormControl>
            
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
           
          </div>
          
        </Toolbar>
      </AppBar>
     
    </div>
  );

}

export default Header;