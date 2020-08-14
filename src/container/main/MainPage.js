import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import WaveformAnalysis from '../main/Type1/checkType/WaveformAnalysis';
import WaveFrom from './Waveform';
import TalkerForm from '../main/Type1/TalkerForm';

class MainPage extends Component {
  render() {
    console.log("is main page running");
    return (
      <div>
      <Grid 
          container
          direction="column"
          justify="space-between"
          >
      {/* 파형창 start */}
      <Typography variant="h4">파형</Typography>
      <WaveFrom />
      <Typography variant="h4">전사창</Typography>
        {/* <TalkerForm selectedBoard={selectedBoard} onSaveData={this.handleGetData}/> */}
      </Grid>
      </div>
    )
  }
}
export default MainPage;