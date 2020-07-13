import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SelectedDownload from './SelectedDownload';
import color from '@material-ui/core/colors/amber';

class Waveform extends React.Component {
  
  state = {
    zoomPixel: 10,
    startTime: 10,
    endTime: 15,
    RegionStartLocation:0,
    RegionEndLocation:0,
    count:0,
    Region:false,
    showRegion:false,
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

  handleRegion = () =>{
    this.setState({
      Region:true
    })
  }

  onClickCursor = (e) =>{
    // if(this.state.count === 0){
      this.setState({
        startTime:this.wavesurfer.getCurrentTime(),
        RegionStartLocation:e.clientX,
        count:1
      }) 
    // }
    // if(this.state.count === 1){
    //   this.setState({
    //     endTime:this.wavesurfer.getCurrentTime(),
    //     RegionEndLocation:e.clientX,
    //     count:0
    //   })
    // }
    console.log("시작구간 위치: ", this.state.RegionStartLocation)
    console.log("시작구간 초: ",this.state.startTime)
    // console.log("끝구간 위치: ", this.state.RegionEndLocation)
    // console.log("끝구간 초: ", this.state.E)
  }

  onClickStartTime = (e) => {
    this.setState({
      startTime:this.wavesurfer.getCurrentTime(),
      RegionStartLocation:e.clientX
    })
    console.log("시작구간 위치: ", this.state.RegionStartLocation)
    console.log("시작구간 초: ",this.state.startTime)
  }

  onClickEndTime = (e) => {
    this.setState({
      endTime:this.wavesurfer.getCurrentTime(),
      RegionEndLocation:e.clientX
    })
    console.log("끝구간 위치: ", this.state.RegionEndLocation)
    console.log("끝구간 초: ", this.state.E)
  }

  PlayRegions = () =>{

    // this.setState({
    //   startTime:this.state.startTime,
    //   endTime:this.state.endTime,
    //   showRegion:true
    // })
    
      this.wavesurfer.play(this.state.startTime,this.state.endTime);
      
      console.log(this.state.startTime)
      console.log(this.state.endTime)
  }

//https://taehongdev.github.io/html_css_study/exam03/audio/The_Weeknd-I_Feel_It_Coming(cover_byJ.Fla).mp3
//https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a
  render() {
    const {startTime, endTime, src, Region, showRegion, RegionStartLocation, RegionEndLocation} = this.state;

    return (
      
      <div>
        <Grid item sm={10}>
        <Grid item sm ={3}>
        <Typography>원본파형</Typography>
        <button type="button" onClick={this.playIt}>재생하기/멈추기</button>
        <button type="button" onClick={this.ZoomIn}>+</button>
        <button type="button" onClick={this.ZoomOut}>-</button>
        <button type="button" onClick={this.handleRegion}>선택구간보기</button>
        {/* {Region && <button type="button" onClick={this.onClickStartTime}>시작구간선택</button>}
        {Region && <button type="button" onClick={this.onClickEndTime}>끝구간선택</button>} */}
        {Region && <button type="button" onClick={this.PlayRegions}>구간반복재생</button>}
        {(startTime!==0.0 && endTime!==0.0 ) && <SelectedDownload st={startTime.toFixed(1)} et={endTime.toFixed(1)} src={src}/> }
        <div
          style={{ border: '1px solid grey', width: 900, height: 80, position: "absolute"}}
          id="waveform" onClick={this.onClickCursor}></div>
          {Region && 
        <div
          style={{border: '1px solid grey', position:"absolute", left:this.state.startTime, width:(this.state.endTime-this.state.startTime), height:80, backgroundColor:'#F5D0A9'}}> 
  </div> }
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