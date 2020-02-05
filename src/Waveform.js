import React from 'react';
import WaveSurfer from 'wavesurfer';

class Waveform extends React.Component {
  state = {
    zoomPixel: 10,
    startTime: 0.0,
    endTime: 0.0
  }
  componentDidMount() {
    const aud = document.querySelector('#song');

    this.wavesurfer = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#4a74a5',
      responsive: true,
      waveColor: '#ccc',
      cursorColor: '#4a74a5',
    });

    this.wavesurfer.load(aud);

  }

  playIt = () => {
    this.wavesurfer.play();
  };

  Pause = () => {
    this.wavesurfer.pause();
  }

  ZoomIn =() => {

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

  Destroy = () =>{
    this.wavesurfer.on('pause', function () {
      this.wavesurfer.destroy();
  });
  
  }

//https://taehongdev.github.io/html_css_study/exam03/audio/The_Weeknd-I_Feel_It_Coming(cover_byJ.Fla).mp3
//https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a
  render() {
    return (
      <div>
        <button onClick={this.playIt}>Play</button>
        <button onClick={this.Pause}>Stop</button>
        
        <button onClick={this.ZoomIn}>+</button>
        <button onClick={this.ZoomOut}>-</button>
        <button onClick={this.GetCurrentTimeForStart}>구간선택(시작)</button>
        <button onClick={this.GetCurrentTimeForEnd}>구간선택(끝)</button>
        <button onClick={this.PlayIng}>선택구간재생</button>
        <button onClick={this.destroy}>선택구간삭제</button>

        <div
          style={{ border: '1px solid grey', width: 900, height: 80 }}
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