import React from 'react';
import WaveSurfer from 'wavesurfer';
import Typography from '@material-ui/core/Typography';


class Waveform extends React.Component {
  state = {
    zoomPixel: 10,
    startTime: 0.0,
    endTime: 0.0,

  }

  //원본파형 #waveform 생성
  componentDidMount() {
    const aud = document.querySelector('#song');

    this.wavesurfer = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#4a74a5',
      waveColor: '#ccc',
      cursorColor: '#4avi74a5',
      plugins: [
        {
          start: 1,
          end:3,
          loop:false,
          color:'hsla(400, 100%, 30%, 0.5)'
        }
      ],
      dragSelection:{
        slop: 5
      }
    });

    this.wavesurfer.load(aud);

  }

  // 원본파형에 대한 메소드
  playIt = () => {
    this.wavesurfer.play();
  };

  Pause = () => {
    this.wavesurfer.pause();
  }

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

  GetCurrentTimeForStart=()=>{
    this.setState({
      startTime: this.wavesurfer.getCurrentTime()
    })
  }

  GetCurrentTimeForEnd=()=>{
    this.setState({
      endTime: this.wavesurfer.getCurrentTime()
    })
  }

  Distroy=()=>{
    this.wavesurfer.destroy();
  }

  PlayIng = () => {
    this.wavesurfer.play(this.state.startTime,this.state.endTime);
  }

//https://taehongdev.github.io/html_css_study/exam03/audio/The_Weeknd-I_Feel_It_Coming(cover_byJ.Fla).mp3
//https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a
  render() {
    return (
      <div>
        <Typography>원본파형</Typography>
        <button onClick={this.playIt}>Play</button>
        <button onClick={this.Pause}>Stop</button>
        
        <button onClick={this.ZoomIn}>+</button>
        <button onClick={this.ZoomOut}>-</button>
        <button onClick={this.GetCurrentTimeForStart}>구간선택(시작)</button>
        <button onClick={this.GetCurrentTimeForEnd}>구간선택(끝)</button>
        <button onClick={this.PlayIng}>선택구간파형보기</button>
        <div
          style={{ border: '1px solid grey', width: 900, height: 80}}
          id="waveform"
          />
        <audio
          id="song"
          src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
        />
      </div>
    );
  }
}
export default Waveform;