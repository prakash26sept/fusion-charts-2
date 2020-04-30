import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { makeStyles, createStyles } from '@material-ui/core'

import GroupedColumn3d from './components/charts/groupedColumn3d';
import ChartColumn3d from './components/charts/chartColumn3d';
import Donut3d from './components/charts/donut3d';
import Bar3d from './components/charts/bar3d';
import LineZoom from './components/charts/lineZoom';
import StackedColumns from './components/charts/stackedColumns';


import GroupedStacked from './components/charts/groupedStacked';
import StackedArea from './components/charts/stackedArea';
import NestedPie from './components/charts/nestedPie';
import SimpleBubble from './components/charts/simpleBubble';


const style = makeStyles(theme => createStyles({
  '@global': {
    h3: {
      padding: '10px 0',
      margin: '0',
      textAlign: 'center',
      fontFamily: "'Capriola', sans-serif",
      color: '#6e6e6e'
    }
  },
  charts: {
    width: '90%',
    margin: 'auto',
    '&>div': {
      marginBottom: '70px',
      textAlign: 'center',
      border: '2px solid #e3e3e3',
      borderRadius: '7px',
      padding: '14px 0'
    }
  },
  twoBox: {
    display: 'flex',
    flexWrap: 'wrap',
    // width: '97%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '&>div': {
      width: '40%',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '80%'
      }
    }
  },
  innerTwoBox: {
    width: '97%'
  },
  twoVerticalBox: {
    display: 'flex',
    flexDirection: 'column',
    '&>div': {
      margin: '70px 0',
    }
  },
  heading: {
    textAlign: 'center',
    fontFamily: "'Capriola', sans-serif",
    color: '#7a7a7a',
    fontSize: '24px',
    width: '100%',
    backgroundColor: '#d6d6d6',
    padding: '10px 0',
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    }
  }
}
));

function App() {

  const classes = style();
  return (
    <React.Fragment>
      <div className={classes.heading}><h1>Charts Using FusionCharts- 2</h1></div>
      <div className={classes.charts}>
        <h3>App Publishing Trend</h3><div><GroupedColumn3d /></div>
        <h3>Deforestation Rate Country wise</h3><div><ChartColumn3d /></div>
        <h3>Global Oil Reserves</h3><div><Donut3d /></div>
        <h3>High Income careers and Sale of iphones</h3><div className={classes.twoVerticalBox}>
          <div className={classes.innerTwoBox}><Bar3d /></div>
          <div className={classes.innerTwoBox}><LineZoom /></div>
        </div>
        <h3>Insect bite deaths in India</h3><div><StackedColumns /></div>
        <h3>Korean Automobile manufacturers in US</h3><div><GroupedStacked /></div>
        <h3>Twitter mentions</h3><div><StackedArea /></div>
        <h3>Sales and profit analysis</h3><div><NestedPie /></div>
        <h3>Federal Budget</h3><div><SimpleBubble /></div>

      </div>
    </React.Fragment>

  );
}

export default App;