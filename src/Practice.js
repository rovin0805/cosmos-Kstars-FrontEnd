import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import Typography from '@material-ui/core/Typography';
import MenuItem from "@material-ui/core/MenuItem"
import Select from '@material-ui/core/Select';
import SelectedWaveformDownload from './SelectedWaveformDownload';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

class Waveform extends React.Component {
  
  state = {
    zoomPixel: 10,
    startTime: 0.0,
    endTime: 0.0,
    getX: 0.0,
    getY:0.0,
    getWidth:0.0,
    count:0,
    showSection: false,
    showInput: false,
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
      regions: [
          {
              start:1,
              end: 6,
              loop: false,
              color: 'hsla(400, 100%, 30%, 0.5)'
          }
      ],
      // dragSelection: {
      //     slop: 5
      // }
  })).initPlugin('regions');
  console.log(this.wavesurfer.regions.list);
  }

  handleMouseMove =(event) =>{
   
    console.log("ismoving?",this.wavesurfer.regions.getCurrentTime,this.wavesurfer.regions.getCurrentTime);
  }

  playIt = () => {
    this.wavesurfer.playPause();
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

     SetRegions = () => {

      //this.wavesurfer.enableDragSelection({});

     }

     PlayRegions = () =>{
      this.wavesurfer.play(regions.start,regions.end);
      console.log(regions.start);
      console.log(regions.end);
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
        <button onClick={this.SetRegions}>구간선택하기</button>
        <button onClick={this.PlayRegions}>구간재생하기</button>


        <div
          style={{ border: '1px solid grey', width: 900, height: 80, position: "absolute"}}
          id="waveform" onClick={this.handleMouseMove}></div>
        <audio
          id="song"
          src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
          />
          </div>
        );
      }
    }
export default Waveform;

/*https://github.com/katspaugh/wavesurfer.js/issues/1779 */