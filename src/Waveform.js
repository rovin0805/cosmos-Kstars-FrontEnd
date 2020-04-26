import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SelectedDownload from './SelectedDownload';

class Waveform extends React.Component {
  
  state = {
    zoomPixel: 10,
    startTime: 15,
    endTime: 30,
    getX: 0.0,
    getY:0.0,
    getWidth:0.0,
    count:0,
    showSection: false,
    showInput: false,
    src: 'https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a',
  }

  mydiv = null;

  componentDidMount() {
    const aud = document.querySelector('#song');

    this.wavesurfer = WaveSurfer.create({
    container: document.querySelector('#waveform'),
    barWidth: 1,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#3B8686',
      waveColor: '#A8DBA8',
      cursorColor: '#4avi74a5',
      
    });

    this.wavesurfer.load(aud);
    this.wavesurfer.addPlugin(regions.create({
      regions:[
          {
              start:10,
              end: 25,
              loop: true,
              color: 'hsla(400, 100%, 30%, 0.5)'
          }
      ],
   
  })).initPlugin('regions');
  
  }

  playIt = () => {
    this.wavesurfer.playPause();
  };

  ZoomIn = () => {
    this.setState({
      zoomPixel: this.state.zoomPixel+10,
    });

    this.wavesurfer.zoom(this.state.zoomPixel);
  }

  ZoomOut =() => {
    if(this.state.zoomPixel>0){
      this.setState({
        zoomPixel: this.state.zoomPixel-10,
      });
    }

    this.wavesurfer.zoom(this.state.zoomPixel);
  }

  handleClickOpen= (e) => {
    this.setState({
        open: true, 
        endTime: this.wavesurfer.getCurrentTime(),
    });
  }

  handleClose= () => {
    this.setState({
        open: false, 
    });
  }

  SetTrue = () => {
     this.setState({
          showInput:true
      })
  }

  PlayRegions = () =>{
      this.wavesurfer.play(this.wavesurfer.regions.params.regions[0].start,this.wavesurfer.regions.params.regions[0].end);
      console.log(this.wavesurfer.regions.params.regions[0].start)
      console.log(this.wavesurfer.regions.params.regions[0].end)
  }
  
//https://taehongdev.github.io/html_css_study/exam03/audio/The_Weeknd-I_Feel_It_Coming(cover_byJ.Fla).mp3
//https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a
  render() {
    const {startTime, endTime, src} = this.state;

    return (
      
      <div>
        <Grid item sm={10}>
        <Grid item sm ={3}>
        <Typography>원본파형</Typography>
        <button type="button" onClick={this.playIt}>재생하기/멈추기</button>
        <button type="button" onClick={this.ZoomIn}>+</button>
        <button type="button" onClick={this.ZoomOut}>-</button>
        <button type="button" onClick={this.PlayRegions}>구간반복재생</button>
        {(startTime!==0.0 && endTime!==0.0 ) && <SelectedDownload st={startTime.toFixed(1)} et={endTime.toFixed(1)} src={src}/> }

        <div
          style={{ border: '1px solid grey', width: 900, height: 80, position: "absolute"}}
          id="waveform"></div>
        <audio
          id="song"
          src={src}
          />
          </Grid>
          </Grid>
          </div>
        );
      }
    }
export default Waveform;

/*https://github.com/katspaugh/wavesurfer.js/issues/1779 */