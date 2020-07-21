import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';





class HeaderManager extends Component {
    state={
        open: false,

        projectName: "",
        audioFile: null,
    }

    // Dialog 창 
    handleClickOpen= (e) => {
        this.setState({
            open: true, 
        });
    }

    handleClickClose= () => {
        this.setState({
            open: false, // Dialog 텍스트를 초기화 하고 닫아준다
        });
    }

    //form state 관리 
    handleValueChange = (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    //file input 
    handleFileInput = (e) => {
        this.setState({
            audioFile: e.target.files[0],
        });
    }

    //서버 연동 
    handleFormSubmit = (e) => {
        e.preventDefault();
  
        console.log("handleFormSubmit 서버연동 메소드 ");
        console.log(this.state)
    }


    render() {
        const {open, projectName, audioFile} = this.state;
        const {handleClickOpen, handleClickClose, handleValueChange, handleFileInput, handleFormSubmit} = this;

        return (
            <div>
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                 프로젝트 생성
              </Button>

              <Dialog 
                open={open} 
                fullWidth
                maxWidth="sm"
                >
                <DialogTitle>
                    KSTARS <br/>
                    프로젝트 시작 헤더마법사
                </DialogTitle>
                
                <form onSubmit={handleFormSubmit}>
                    <DialogContent> 
                        {/* KST 파일 생성 폼 start*/}
                        KST 파일 생성 폼

                    
                        {/* KST 파일 생성 폼 end*/}

                        {/* 프로젝트 명 start */}
                        <Grid
                            container
                            direction="row"
                            >
                            <Grid xs="2">
                                <Typography body2 style={{marginTop:20,}}>프로젝트 명</Typography>
                            </Grid>
                            <Grid xs="9">
                                <TextField 
                                    required 
                                    label="프로젝트 명" 
                                    name="projectName"
                                    value={projectName}
                                    onChange={handleValueChange}
                                    helperText="프로젝트 명을 기재해주세요."
                                    fullWidth
                                    style={{marginLeft:10,}}
                                    /><br/>
                            </Grid>
                        </Grid>
                        {/* 프로젝트 명 end */}
                        
                        {/* 음성파일 등록 start */}
                        <Grid
                            container
                            direction="row"
                            >
                            <Grid xs="2">
                                <Typography body2 style={{marginTop:20,}}>음성파일 등록</Typography>
                            </Grid>
                            <Grid xs="9">
                                <Input 
                                    type="file" 
                                    name="audioFile" 
                                    file={audioFile}
                                    onChange={e => handleFileInput(e)} 
                                    fullWidth
                                    style={{margin:10,}}

                                    />
                            </Grid>
                        </Grid>
                        {/* 음성파일 등록 end */}

                    </DialogContent>
                
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={handleClickClose}>취소</Button>
                        <Button type="submit" variant="outlined" color="primary" onClick={handleClickClose}>시작하기</Button>
                    </DialogActions>
                </form>

              </Dialog>
          </div>
        );
    }
}

export default HeaderManager;