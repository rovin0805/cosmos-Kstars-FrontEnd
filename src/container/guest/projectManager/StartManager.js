import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles/useStyles';
import SpeakerList from './SpeakerList/index';

class StartManager extends Component {
    state={
        open: false,

        projectName: "",
        audioFile: null,

        KStars :[
            {
                Version: "",
                Option: {
                    SpeakerList: [],
                    SpeakerOption: "",
                },
                Header: {
                    SpeechType: "",
                    Participants: [],
                    BirthPlaceOfCHI: "",
                    Location: "",
                    Situation: "",
                    Recording: "",
                    Transcriber: "",
                    Reviewer: "",
                    Comment: "",
                    ID :[
                        {
                            IDCorpus: "",
                            IDCode: "",
                            IDDateOfBirth: "",
                            IDAge: "",
                            IDSex: "",
                            IDGroup: "",
                            IDRegion: "",
                            IDSES: "",
                            IDEdu: "",
                            IDRole: "",
                        },
                    ],
                },
                Tier: [
                    {
                        Data: {
                            Speaker: "",
                            MEtri: "",
                            MUser: "",
                        },
                    },
                ],
                Audio: {
                    AudioPath: "",
                    AudioFileIndex: "",
                    AudioCurrentPositon: "",
                }
                    
            }
        ]
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
        const {projectName, audioFile} = this.state;
        const {handleValueChange, handleFileInput, handleFormSubmit} = this;
        const classes = useStyles;

        return (
            <div>
              
              <Container style={{marginTop: 150, }} component="main" maxWidth="md">
                    {/* page title */}
                    <Typography component="h1" variant="h2" align="center">
                        KSTARS
                    </Typography>

                    {/* kst form : 프로젝트 명, kst 정보, 음성파일 */}
                    <form onSubmit={handleFormSubmit}>
                    <Grid
                        container
                        direction="column"
                        justify="left"
                        alignItems="left"
                        spacing={3}
                        >
                            
                        {/* 프로젝트 명 start */}
                        <Grid
                            container
                            direction="row"
                            style={{marginTop:30}}
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

                        {/* KST 정보 start*/}
                        <Grid
                            container
                            direction="column"
                            style={{marginTop:30, backgroundColor: '#CEECF5'}}
                        >
                            KST 파일 태그 정보
                            {/* version */}
                            <Grid container direction="row" alignItems="baseline">
                                <Typography style={{marginTop:20, width: 100,}}>Version</Typography>
                                <TextField defaultValue="1.0.0" disabled></TextField>
                            </Grid>

                            {/* option (구성원) */}
                            <Grid container direction="column" alignItems="baseline">
                                <Typography style={{marginTop:20, width: 100,}}>구성원</Typography>
                                <Grid style={{marginLeft: 40,}}>
                                    <SpeakerList/>
                                </Grid>
                                <Grid container direction="row" style={{marginLeft: 40,}}>
                                    <Typography style={{marginTop:10, width: 100,}}>StringOption</Typography>
                                    <TextField defaultValue="00110110" disabled></TextField>
                                </Grid>
                            </Grid>
                            {/* header (헤더정보) */}
                            <Grid container direction="column" alignItems="baseline">
                                <Typography style={{marginTop: 20, width: 100,}}>헤더정보</Typography>
                                <Grid style={{marginLeft: 40,}}>
                                    {/* <HeaderForm></HeaderForm> */}
                                </Grid>
                            </Grid>

                        </Grid>
                        {/* KST 파일 생성 폼 end*/}
                            
                        {/* 음성파일 등록 start */}
                        <Grid
                            container
                            direction="row"
                            style={{marginTop:30,}}
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


                        <Grid>
                            <Button variant="outlined" color="primary">취소</Button>
                            <Button type="submit" variant="outlined" color="primary">시작하기</Button>
                        </Grid>

                    </Grid>
                    </form>

                </Container>

          </div>
        );
    }
}

export default StartManager;