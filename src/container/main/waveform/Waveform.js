import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/TalkerFormCss';
import SelectedDownload from "../selection/SelectedDownload";


class Waveform extends React.Component {
  
  state = {
    zoomPixel: 10,
    startTime: 10,
    endTime: 15,
    startx:23,
    startY:0,
    Region:false,
    Repeat:false,
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

  handleChange = (e) => { 
    this.setState({ [e.target.name]: e.target.value });
  
} 

  PlayRegions = () =>{
  
      this.wavesurfer.play(this.state.startTime,this.state.endTime);  
  
      console.log("재생하는 시작 구간: ", this.state.startTime);
      console.log("재생하는 끝 구간: ",this.state.endTime);
  }

//https://taehongdev.github.io/html_css_study/exam03/audio/The_Weeknd-I_Feel_It_Coming(cover_byJ.Fla).mp3
//https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a

  render() {
    const {startTime, endTime, src, Region, showRegion, RegionStartLocation, RegionEndLocation} = this.state;
    const classes = useStyles.bind();
    return (
      <div>
      <Grid container spacing={3}>
        <Grid item xs={9}>
        <div
          style={{ border: '1px solid grey', width: 900, height: 80, position: "absolute"}}
          id="waveform"></div>
          {Region && 
        <div
          style={{border: '1px solid grey', position:"absolute", left:this.state.startTime, width:(this.state.endTime-this.state.startTime), height:80, backgroundColor:'#F5D0A9'}}> 
  </div> }
        <audio
          id="song"
          src={src}
          />
        </Grid>
        <Grid item xs={3}>
        <button type="button" onClick={this.playIt}>재생하기/멈추기</button>
        <button type="button" onClick={this.ZoomIn}>ZoomIn</button>
        <button type="button" onClick={this.ZoomOut}>ZoomOut</button>
            <input placeholder="시작구간- ex)4.0" name="startTime" onChange={this.handleChange}/>
            <input placeholder="끝구간- ex)7.0" name="endTime" onChange={this.handleChange}/>
            <button type="button" onClick={this.PlayRegions}>선택 구간 재생</button>
        <SelectedDownload startTime={startTime} endTime={endTime}/>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
        );
      }
    }
export default Waveform;

/*https://github.com/katspaugh/wavesurfer.js/issues/1779 */