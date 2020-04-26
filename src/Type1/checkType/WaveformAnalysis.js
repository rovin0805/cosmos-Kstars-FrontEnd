import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Waveform from '../../Waveform';
import Paper from '@material-ui/core/Paper';
import style from "../styles/SentenceAnalysisCss";

class WaveformAnalysis extends Component {
  render() {
    const classes = style.bind();
    return (
      <div>
        <Grid container spacing = {1} item sm={12} >  
                    <Grid item sm = {1} 
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                   </Grid>

                    <Grid item sm = {2}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                      <Typography variant="h8" style={{ marginTop: 25, marginLeft: 80, }} > 파형분석</Typography>
                    </Grid>
                    
                    {/* 파형그려주는부분 start */}
                    <Grid item sm ={8}>
                    <Grid
                          container
                          direction="column"
                          justify="flex-end"
                          alignItems="stretch"
                          >  
                        <Paper className={classes.root}>
                          <Waveform/>
                          </Paper>
                          </Grid>
                    </Grid>
                    {/* 파형그려주는부분 end */}
        </Grid>
      </div>
    )
  }
}
export default WaveformAnalysis;
