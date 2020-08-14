import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import WaveSurfer from 'wavesurfer';


class SelectedWaveformDownload extends Component {
  state={
      st: this.props.st,
      et: this.props.et,
      open: false, // dialog 창이 열려있는지 유무
      showInput: false
  }

  selected =() => {
    const aud = document.querySelector('#selected_song');

    this.wavesurfer = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 1,
      container: '#selectedWave',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#4a74a5',
      responsive: true,
      waveColor: '#ccc',
      cursorColor: '#4avi74a5',
    });

    this.wavesurfer.load(aud);

  }

  handleClickOpen= (e) => {
    console.log(this.state.id);
    this.setState({
        open: true, 
    });
    this.setState({
      showInput: true
    })
  }

  handleValueChange= (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }


  handleClose= () => {
      this.setState({
          
          open: false, 
      });
  }


  handleFormSubmit=async (e) => {
      e.preventDefault();
            
  }


  render() {
      return (
          <div>
              <button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                 선택구간다운로드
              </button>
              <Dialog 
                open={this.state.open} 
                onClose={this.handleClose} 
                fullWidth
                >
                  <DialogTitle>선택구간확인</DialogTitle>
                  <DialogContent>
                    선택하신 구간이 맞습니까?
                  </DialogContent>
                  <DialogContent>
                    {this.state.showInput?
                    (<div>
                      <div
                            style={{ border: '1px solid grey', width: 300, height: 80 }}
                            id="selectedWave"
                        />
                       <audio
                            id="selected_song"
                            src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
                          />
                         
                          </div>) : (null)}
                  </DialogContent>
                  <DialogActions>
                      <Button variant="outlined" color="primary" onClick={this.handleFormSubmit}>다운로드</Button>
                      <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                  </DialogActions>
                 </Dialog>
          </div>
      );
  }
}
export default SelectedWaveformDownload;