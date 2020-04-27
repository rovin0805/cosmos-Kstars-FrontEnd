import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Typography } from "@material-ui/core";


class SelectedDownload extends Component {
  state={
      startTime: this.props.st,
      endTime: this.props.et,
      src: this.props.src,

      originalFile:null,
      userFileName: "", //사용자지정파일명
      open: false, // dialog 창이 열려있는지 유무
      // isDownload:false,
  }

  /* 모달창 버튼 관련 메소드 start*/
  handleClickOpen = (e) => {
    console.log(this.state);
    this.setState({
        open: true, 
    });
  }

  handleClose= () => {
    this.setState({  
        open: false, 
    });
  }

  handleValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileInput = (e) => {
    this.setState({
      originalFile: e.target.files[0],
    });
  }

  //저장버튼 -> 서버연동
  handleSubmit= (e) => {
    e.preventDefault();
    console.log("SelectedDownload에서 서버 연동 메소드 호출");

    //값 초기화
    this.setState({  
        open: false, 
        userFileName:"",
    });

    this.downloadData();
    /*
    this.downloadData()
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
    */
  } 
  
  /* 모달창 버튼, input값 관련 메소드 end*/ 


  downloadData() {
    const url = '서버url';

    const formData = new FormData();
    const {originalFile, startTime, endTime, userFileName} = this.state;

    formData.append("originalFile", this.state.originalFile);

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }

    const json = `{ "startTime": "${startTime}", "endTime": "${endTime}", "userFileName": "${userFileName}"}`;
    console.log(originalFile,json);

    formData.append("json", json);
    //return postMessage(url, formData, config);
  }


  render() {
    // const { isDownload } = this.state;

      return (
          <div>
              <button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                 선택구간저장
              </button>
              <Dialog 
                open={this.state.open} 

                maxWidth="md"
                >
                  <form onSubmit={this.handleSubmit}>
                  <DialogTitle>선택구간확인</DialogTitle>
                  <DialogContent>
                    [파일정보]
                  </DialogContent>
                  <DialogContent>
                      <Typography color="textSecondary"> 다운로드 원본 파일 선택 </Typography>
                        <input 
                          type="file" 
                          name="originalFile" 
                          file={this.state.originalFile} 
                          onChange={e => this.handleFileInput(e)} 
                        />
                  
                      <Typography color="textSecondary"> 사용자 지정 파일명 </Typography>
                        <input
                          name="userFileName"
                          value={this.state.userFileName}
                          onChange={this.handleValueChange}
                        />
                      <Typography color="textSecondary"> 구간시작(초) {this.state.startTime}  </Typography> 
                      <Typography color="textSecondary"> 구간끝(초) {this.state.endTime}  </Typography>
                       


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
  
  /* 브라우저에서 url음원파일을 다운로드하는 메소드
  //downloadData함수 실행 함수 -> fetch를 사용하기 때문에 사용함
  handleUserFile = (isDownload) => {
    if(isDownload){
      this.downloadData(this.state.userFileName);

      //초기화
      this.setState({
        isDownload: false, 
        userFileName:"",
      })
    }
  }

  //다운로드 파일 (사용자 지정 파일명 + 파일형식(임시로 m4a파일이라고 지정))
  downloadData = async (name) => {
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
  */

