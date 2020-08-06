import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SelectedDownload from '../../SelectedDownload';
import color from '@material-ui/core/colors/amber';
import useStyles from '../../Type1/styles/TalkerFormCss';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1),
  },
  toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
});

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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <button type="button" onClick={this.playIt}>재생하기/멈추기</button>
        <button type="button" onClick={this.ZoomIn}>+</button>
        <button type="button" onClick={this.ZoomOut}>-</button>
        <button type="button" onClick={this.handleRegion}>선택구간보기</button>
              <Grid container spacing = {3} item xs={12} style={{marginTop:20, marginBottom:15}}>
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
         </div>
        );
      }
    }
export default withStyles(styles)(Waveform);

/*https://github.com/katspaugh/wavesurfer.js/issues/1779 */