import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './styles/useStyles';



class index extends Component {
    render() {
        const classes = useStyles;

        return (
            <div>
                <Container style={{marginTop: 150, }} component="main" maxWidth="sm">
                    {/* 웹 서비스 명 */}
                    <Typography component="h1" variant="h2" align="center">
                        KSTARS
                    </Typography>

                    {/* select button */}
                    <Grid container spacing={2} style={{marginTop:30, }}>
                        <Grid item xs="6">
                            <Link to="/main" variant="body2">
                                <Button 
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    style={{height: 250,}}
                                 >
                                    KST파일이 존재하는 경우, <br/> 편집뷰어로 이동
                                </Button>                       
                            </Link>
                        </Grid>
                        <Grid item xs="6">
                            <Link to="/guest/start" variant="body2">
                                <Button 
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    style={{height: 250,}}
                                 >
                                    KST파일이 존재없는 경우, <br/> 프로젝트 생성매니저로 이동
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