import React, { Component } from 'react';
import useStyles from './styles/useStyles';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Axios from "axios";


class Intro extends Component {
    state = {
        email: "",
        password: "",
        IsLogin: false,
    };
    
    handleValueChange = (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // 서버 연동 
    handleFormSubmit = async (e) => {
        e.preventDefault(); 
        const { email, password } = this.state;

        try {
            const response = await Axios.post("/cosmos/kStars/signIn", {
                    email: email, 
                    password: password
            });
            
            console.log(response.data);

            localStorage.setItem("userToken", response.data);
            
            if(localStorage.userToken){
                this.setState({
                    IsLogin: true,
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState){
        const { history } = this.props;
        const { IsLogin } = this.state;

        if(IsLogin){
          history.push('/start');
        }
      }

    render() {
        const classes = useStyles;
        const { handleFormSubmit, handleValueChange } = this;
        const { email, password } = this.state;

        return (
            <div>
                <Container style={{marginTop:150, }} component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        {/* 웹 서비스 명 */}
                        <Typography component="h1" variant="h2" align="center">
                            KSTARS
                        </Typography>

                        {/* 로그인 폼 */}
                        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={handleValueChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handleValueChange}
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >
                            Sign In
                        </Button>
                        

                        {/* 회원가입으로 */}
                        <Grid container style={{marginTop: 10}}>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"아직 회원이 아니신가요? 회원가입으로"}
                            </Link>
                            </Grid>
                        </Grid>
                        </form>

                        {/* 게스트이용 */}
                        <Link to={"/start"}>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                style={{marginTop: 30,}}
                            >
                                {"GUEST로 이용하기 ->"}
                            </Button>
                        </Link>

                    </div>
                </Container>
            </div>
        );
    }
}

export default Intro;