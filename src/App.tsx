import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage"
import { useStyles } from './classes'

const App = () => {
  const classes:any = useStyles();
  
  
  return (
    <div className={classes.appWrapper}>
      <HomePage/>
    </div>
  );
}

export default App;
