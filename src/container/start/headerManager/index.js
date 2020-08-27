import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';

import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';



class HeaderManager extends Component {
    state={
        open: false,
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

        console.log("handleFormSubmit in headerManager")
    }


    render() {

        return (
            <div>
              
              <Container style={{marginTop: 150, }} component="main" maxWidth="md">

                        {/* page title */}
                        <Typography component="h1" variant="h2" align="center">
                            KSTARS
                        </Typography>

                        {"헤더 정보"}

                        <Grid>
                            <Link to="/start/project"><Button variant="outlined" color="primary">이전</Button></Link>
                            <Link to ="/main"><Button variant="outlined" color="primary">시작하기</Button></Link>
                        </Grid>

                </Container>

          </div>
        );
    }
}

export default HeaderManager;