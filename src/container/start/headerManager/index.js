import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import {Link} from 'react-router-dom';


import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles/useStyles';
import SpeakerList from './speakerList/index';

class HeaderManager extends Component {
    state={
        open: false,

        KStars :[
            {
                Version: "",
                m_Option: {
                    speakerList: [],
                    speakerOption: "",
                },
                m_header: {
                    speechType: "",
                    arrParticipants: [],
                    BirthPlaceOfCHI: "",
                    Location: "",
                    Situation: "",
                    Recording: "",
                    Transcriber: "",
                    Reviewer: "",
                    Comment: "",
                    arrID :[
                        {
                            Corpus: "",
                            Code: "",
                            DateOfBirth: "",
                            Age: "",
                            Sex: "",
                            Group: "",
                            Region: "",
                            SES: "",
                            Edu: "",
                            Role: "",
                        },
                    ],
                },
                m_KTierVer2: {
                    datas: [
                        {
                        uid: "", // 전사내용 리스트 인덱스 
                        speaker: "", // 발화인 
                        text: "", // 전사내용 
                        time: "", // 시간초 
                        },
                    ],
                    dataType: "",
                },
                m_KTierMorpVer2: {
                    datas: [
                        {
                        uid: "",
                        speaker: "",
                        morp: "",
                        user: "",
                        },
                    ],
                    dataType: "",
                    
                },
                m_Audio: {
                    AudioPath: [

                    ],
                    AudioFileIndex: "",
                    AudioCurrentPositon: "",
                },
                userDTO: {
                    id:"", 
                    user: "", //guest
                    fileName: "", 
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

    //서버 연동 -> 데이터베이스가 없으므로 localStrorage에 저장. 
    handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("handleFormSubmit in headerManager");


    }


    render() {
        const {handleValueChange, handleFormSubmit} = this;
        const classes = useStyles;

        return (
            <div>
              
              <Container style={{marginTop: 150, }} component="main" maxWidth="md">

                    {/* page title */}
                    <Typography component="h1" variant="h2" align="center">
                        KSTARS
                    </Typography>

                    {/* kst form : kst 정보 */}
                    <form onSubmit={handleFormSubmit}>
                    <Grid
                        container
                        direction="column"
                        justify="left"
                        alignItems="left"
                        spacing={3}
                        >

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
                                    {/* {"헤더정보입력 구현"} */}
                                </Grid>
                            </Grid>

                        </Grid>
                            
                        {/* form action */}
                        <Grid>
                            <Link to="/start/project"><Button variant="outlined" color="primary">이전</Button></Link>
                            <Link to ="/main"><Button type="submit" variant="outlined" color="primary">시작하기</Button></Link>
                        </Grid>

                    </Grid>
                    </form>

                </Container>

          </div>
        );
    }
}

export default HeaderManager;