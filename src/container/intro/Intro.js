import React, { Component } from 'react';
import useStyles from './styles/useStyles';


import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class Intro extends Component {
    state = {
        userLogin: {
            Id: "",
            Pw: "",
        },


    }
    render() {
        const classes = useStyles;
        return (
            <div>
                <Container style={{marginTop:150, }} component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        {/* 웹 서비스 명 */}
                        <Typography component="h1" variant="h2" align="center">
                        KSTARS
                        </Typography>

                        {/* 로그인 폼 */}
                        <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
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
                            autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Link to={"/main"}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </Link>

                        {/* 회원가입으로 */}
                        <Grid container >
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
                        <Link to={"/guest"}>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                style={{marginTop: 30,}}
                            >
                                GUEST로 이용하기 ->
                            </Button>
                        </Link>

                    </div>
                </Container>
            </div>
        );
    }
}

export default Intro;