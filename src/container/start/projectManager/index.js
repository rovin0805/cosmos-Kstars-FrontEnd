import React, { Component } from 'react';

import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import {Link} from 'react-router-dom';

class index extends Component {
    state = {
        projectName: "",
        audioFile: null,

    }

    // form state 관리 
    handleValueChange = (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // file input 
    handleFileInput = (e) => {
        this.setState({
            audioFile: e.target.files[0],
        });
    }

    // handleFormSubmit
    handleFormSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        const { projectName, audioFile } = this.state;
        const { handleValueChange, handleFileInput, handleFormSubmit } = this;

        return (
            <div>
                <Container style={{marginTop: 150, }} component="main" maxWidth="md">

                {/* page title */}
                <Typography component="h1" variant="h2" align="center">
                    KSTARS
                </Typography>

                <form onSubmit={handleFormSubmit}>
                {/* 프로젝트 명 입력 start */}
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
                {/* 프로젝트 명 입력 end */}

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

                    {/* form action */}
                    <Grid>
                        <Link to="/start"><Button variant="outlined" color="primary">이전</Button></Link>
                        <Link to="/start/header"><Button type="submit" variant="outlined" color="primary">헤더 정보 입력 페이지로 이동</Button></Link>
                    </Grid>
            </form>
            
            </Container>


            </div>
        );
    }
}

export default index;