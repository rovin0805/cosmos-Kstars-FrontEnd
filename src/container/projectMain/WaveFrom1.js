import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from '../../Type1/styles/TalkerFormCss';
import WaveSurfer from 'wavesurfer.js';
import WaveformAnalysis from '../../Type1/checkType/WaveformAnalysis';

class TalkerForm extends Component {

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
    

  render() {
    const classes = useStyles.bind();
    
      return (
          <Paper className = {classes.root} style={{marginTop: 20, marginBottom: 15}}>
              <Grid container spacing = {3} item xs={12}>
             
                <Grid item xs = {3} direction="row" justify="flex-end" alignItems="center">
                    <TextField
                      label="발화인"
                      placeholder = "발화인을 입력하세요 ..."
                      className={classes.textField}
                      style={{ margin: 8 ,marginLeft: 120}}
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}

                      name="talker"
                  
                      />
                </Grid>

                <Grid item xs ={6}>
                      <TextField
                        label="발화내용"
                        style={{ margin: 8 }}
                        placeholder="분석하고자 하는 텍스트를 입력하세요 ..."
                        helperText="분석하기 버튼을 누르세요"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{                                 
                          shrink: true,
                          }}
                       /> 
                </Grid>

                    <Grid container spacing= {3} item xs = {3} >
                      {/* 분석유형 선택 start */}
                      <Grid>
                        <FormControl variant="outlined" className={classes.formControl} style={{ marginTop: 20, minWidth: 130}}>
                          
                          <Select
                        
                            inputProps={{
                              name: 'analysisType'
                            }}
                            >
                            <MenuItem  value={"morpAPI"}>morpAPI</MenuItem>
                            <MenuItem  value={"wsdAPI"}>wsdAPI</MenuItem>
                            <MenuItem  value={"wsd_polyAPI"}>wsd_polyAPI</MenuItem>
                            <MenuItem  value={"nerAPI"}>nerAPI</MenuItem>
                            <MenuItem  value={"dparseAPI"}>dparseAPI</MenuItem>
                            <MenuItem  value={"srlAPI"}>srlAPI</MenuItem>

                          </Select>
                        </FormControl>
                      </Grid>
                      {/* 분석유형 선택 end */}

                      {/* 입력, 파형 버튼 start */}
                      <Grid item sm={1}
                      container
                      direction="column"
                      justify="flex-end"
                      alignItems="center"
                      >
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} style={{ margin: 10 , padding: 5}}>
                            입력하기
                        </Button>


                      </Grid>
                        {/* 입력, 파형 버튼 end */}

                    </Grid>
                  </Grid>
                
                {/*Data값 서버연동 컴포넌트에 넘겨주기*/}
                
              </Paper>
      );
  }
}
export default TalkerForm;