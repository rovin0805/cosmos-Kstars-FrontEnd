import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
    root: {
      padding: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
      },
      toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
      },
  });

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid container sm="6">
                               <Typography
                                   component="h2"
                                   variant="h5"
                                   color="inherit"
                                   align="center"
                                   noWrap
                               >
                                    KSTARS 웹 서비스
                               </Typography>
                       </Grid>
            <Grid container sm="4" />
              <Grid item xs={3} />
              <Grid item xs={6}>
              
              <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                  <Button>전사 모드</Button>
                  <Button>형태소 분석 모드</Button>
                  <Button>브라우징 모드</Button>
              </Toolbar>
                
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>
            <hr/>
          </div>
        );
    }
}

export default withStyles(styles)(Header);