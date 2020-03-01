import React from 'react';
import WaveSurfer from 'wavesurfer';
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
    showInput: false
  }

  mydiv = null;


  componentDidMount() {
    const aud = document.querySelector('#song');

    this.wavesurfer = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#ccc',
      waveColor: '#ccc',
      cursorColor: '#4avi74a5',
    });

    this.wavesurfer.load(aud);

  }

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
  GetCurrentTimeForStart=(e)=>{
    this.setState({
      startTime: this.wavesurfer.getCurrentTime(),
    })
  }

  GetCurrentTimeForEnd=(e)=>{
    this.setState({
      endTime: this.wavesurfer.getCurrentTime(),
    })
  }

  GetPosition= (e) =>{
      if(this.state.count==0){
          this.setState({
            getX: e.pageX,
            count: 1,
          })
      }
      
      if(this.state.count==1){
        this.setState({
            getY: e.pageX,
            startTime: this.wavesurfer.getCurrentTime(),
        })
      }
      this.setState({
        showInput:false
      })
  }

//   handleChange = (e) => {
//     this.setState({
//        [e.target.name]: e.target.value
//     })
// }

  PlaySection = (e) => {
    this.setState({
        getWidth: this.state.getY-this.state.getX,
        count:0,
        open:false,
        showSection: true,
        showInput:true
  })
  this.wavesurfer.play(this.state.startTime,this.state.endTime);
  console.log('getX',this.state.getX);
  console.log('getY',this.state.getY);
  console.log('startTime',this.state.startTime);
  console.log('endTime',this.state.endTime);
    }

    handleMouseMove =(event) =>{
        this.setState({
          getX: event.pageX,
          getY: event.pageX
        })
        console.log("ismoving?",this.state.getX,this.state.getY);
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
        {/* <button onClick={this.GetCurrentTimeForStart}>구간선택(시작)</button>
        <button onClick={this.GetCurrentTimeForEnd}>구간선택(끝)</button> */}
        <button onClick={this.handleClickOpen}>선택구간파형보기</button>
        <Dialog 
                open={this.state.open} 
                onClose={this.handleClose} 
                fullWidth
                >
                  <DialogTitle>선택구간확인</DialogTitle>
                  <DialogContent>
                    선택하신 구간을 재생하시겠습니까?
                  </DialogContent>
                  <DialogActions>
                      <Button variant="outlined" color="primary" onClick={this.PlaySection}>Yes</Button>
                      <Button variant="outlined" color="primary" onClick={this.handleClose}>No</Button>
                  </DialogActions>
                  </Dialog>
        {/* <button onClick={this.SetTrue}>구간직접입력하기</button> */}
        {/* <SelectedWaveformDownload st={this.state.startTime} et={this.state.endTime}/>  */}
        {this.state.showInput? 
        (<form>
            <font size={1}>시작시간:{this.state.startTime}</font>
        <font size={1}>끝시간:{this.state.endTime}</font>
        </form>) : (null)}
        <div
          style={{ border: '1px solid grey', width: 900, height: 80, position: "absolute"}}
          id="waveform" onClick={this.GetPosition}></div>
        {this.state.showSection? (
        <div ref={ref => { this.mydiv = ref }} 
        style={{height: 80, left:(this.state.getX-365), width:this.state.getWidth, position:'relative', border: '1px solid red', background:'#FCC17D'}}>
        </div>
        ):(null)}
        <audio
          id="song"
          src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
          />
          </div>
        );
      }
    }
export default Waveform;