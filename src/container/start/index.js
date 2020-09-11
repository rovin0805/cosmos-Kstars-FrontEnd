import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Axios from "axios";


class index extends Component {

    state = {
        projects: [
            
        ],
        isProjectExist: false,
    }
     // 서버 연동 
     handleGetProjectList = async (e) => {
        e.preventDefault(); 
        console.log(localStorage.userToken);
        
        try {
            const response = await Axios.post("cosmos/kStars/load/kst/token", {

                token : localStorage.userToken,
                
        });

            console.log(response.data);
            const { projects } = this.state;
            this.setState({
              isProjectExist: true,
              projects:projects.concat(response.data)
            })

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { handleGetProjectList } = this;
        return (
            <div>
                <Container style={{marginTop: 150, }} component="main" maxWidth="sm">
                    {/* 웹 서비스 명 */}
                    <Typography component="h1" variant="h2" align="center">
                        KSTARS
                    </Typography>
                    {"userToken >> " + localStorage.userToken}
                    {/* select button */}
                    <Grid container spacing={2} style={{marginTop:30, }}>
                        <Grid item xs="3">
                                <Button 
                                    onClick={this.handleGetProjectList}
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    style={{height: 250,}}
                                 >
                                    파일 선택하기 <br/> 
                                </Button>                       
                        </Grid>
                        <Grid item xs="3">
                        {/* { this.state.isProjectExist&&  */}
                       {"projects >> " + this.state.projects}
                     {/* } */}
                        </Grid>
                        <Grid item xs="3">
                            <Link to="/start/project" variant="body2">
                                <Button 
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    style={{height: 250,}}
                                 >
                                    새로 만들기 <br/>
                                </Button>                       
                            </Link>
                        </Grid>
                    
                    </Grid>

                </Container>
            </div>
        );
    }
}

export default index;