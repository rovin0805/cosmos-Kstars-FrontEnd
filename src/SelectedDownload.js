import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import WaveSurfer from 'wavesurfer';
import { Typography } from "@material-ui/core";


class SelectedDownload extends Component {
  state={
      st: this.props.st,
      et: this.props.et,
      src: this.props.src,

      selectedFile: "", //원본파일명
      userFile: "", //사용자지정파일명
      open: false, // dialog 창이 열려있는지 유무
      isDownload:false,
  }

  selected=()=>{
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
    console.log(this.state)

    this.wavesurfer.play(this.state.st, this.state.et)    
  }

  handleClickOpen = (e) => {
    console.log(this.state);
    this.setState({
        open: true, 
    });
  }

  handleValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //저장버튼
  handleSubmit= (e) => {
    e.preventDefault();
    this.setState({  
        open: false, 
        isDownload: true,
    });
  } 
  //닫기버튼 
  handleClose= () => {
      this.setState({  
          open: false, 
      });
  }

  //downloadData함수 실행 함수 -> fetch를 사용하기 때문에 사용함
  handleUserFile = (isDownload) => {
    if(isDownload){
      this.downloadData(this.state.userFile);
      //초기화
      this.setState({
        isDownload: false, 
        userFile:"",
      })
    }
  }

  //다운로드 파일 (사용자 지정 파일명 + 파일형식(임시로 m4a파일이라고 지정))
  downloadData = (name) => {
    let a = document.createElement('a');
		fetch(this.state.src)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					a.href = url;
          a.download = name+'.m4a';  
          a.click();
        });

		});
  }

  render() {
    const { isDownload } = this.state;

      return (
          <div>
              <button variant="outlined" color="primary" type="button" onClick={this.handleClickOpen}>
                 선택구간저장
              </button>
              <Dialog 
                open={this.state.open} 
                fullWidth
                maxWidth="md"
                >
                  <form onSubmit={this.handleUserFile(isDownload)}>
                  <DialogTitle>선택구간확인</DialogTitle>
                  <DialogContent>
                    [파일정보]
                  </DialogContent>
                  <DialogContent>

                       <Typography color="textSecondary"> 사용자 지정 파일명 </Typography>
                        <input
                          name="userFile"
                          value={this.state.userFile}
                          onChange={this.handleValueChange}
                        />
                       <Typography color="textSecondary"> 구간시작(초) {this.state.st}  </Typography> 
                       <Typography color="textSecondary"> 구간끝(초) {this.state.et}  </Typography>
                       


                  </DialogContent>
                  <DialogActions>
                      <Button type="submit" variant="outlined" color="primary" onClick={this.handleSubmit}>저장</Button>
                      <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                  </DialogActions>
                  </form>
                 </Dialog>
          </div>
      );
  }
}
export default SelectedDownload;

