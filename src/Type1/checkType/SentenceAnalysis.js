import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import style from "../styles/SentenceAnalysisTable";
import TalkerChips from "../TalkerChips";

class SentenceAnalysis extends Component {
  
  render() {
    const classes = style.bind();

    return (
      <div>
        <Grid container spacing = {1} item sm={12} >  
                    <Grid item sm = {1} 
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                   </Grid>

                    <Grid item sm = {2}
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start">
                      <Typography variant="h8" style={{ marginTop: 25, marginLeft: 80, }} > 문장분석</Typography>
                    </Grid>
                    
                    {/* 문장분석 리스트 start */}
                    <Grid item sm ={8}>

                      <Grid
                          container
                          direction="column"
                          justify="flex-end"
                          alignItems="stretch"
                          >  
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>분석유형</TableCell>
                                        <TableCell>분석결과</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        <TableRow>
                                            <TableCell>형태소분석</TableCell>
                                            <TableCell><TalkerChips/></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>어휘의미분석(동음이의어)</TableCell>
                                            <TableCell><TalkerChips/></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>어휘의미분석(다의어)</TableCell>
                                            <TableCell><TalkerChips/></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>개체명 인식</TableCell>
                                            <TableCell><TalkerChips/></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>의존 구문 분석</TableCell>
                                            <TableCell><TalkerChips/></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>의미역 인식</TableCell>
                                            <TableCell><TalkerChips/></TableCell>
                                        </TableRow>
                                                  
                                </TableBody>
                            </Table>
                        </Paper>

                      </Grid>
                    </Grid>
                    {/* 문장분석 리스트 end */}

        </Grid>
      
      </div>
    )
  }
}
export default SentenceAnalysis;
