import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SentenceAnalysis from '../Type1/checkType/SentenceAnalysis';
import WaveformAnalysis from '../Type1/checkType/WaveformAnalysis';
import TalkerChips from './TalkerChips';

/*
메소드 정리
handleRemove: 삭제버튼이 onClick되면 현재 컴포넌트의 handleRemove에서 부모의 onRemove로 해당 행의 brdno를 전달한다.
handleSelectRow: 분석내용이 선택되면 현재 컴포넌트의 handleSelectRow에서 부모의 onSelectRow로 해당 행의 내용(row)를 전달한다.
*/

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },

}));

class TalkerItem extends Component {

  state = {
    isSentence: false,
    chipData: this.props.Result,
  }
     
  //게시판 글 선택
  handleSelectRow = () => {
      const { row, onSelectRow } = this.props;
      onSelectRow(row);
  }    

  //게시판 삭제
  handleRemove = () => {
    const { row, onRemove } = this.props;
    onRemove(row.brdno);
  }   
  
  //분석상세보기 클릭 시 메소드
  handleSentenceClick = () => {
    this.setState({
      isSentence: !this.state.isSentence,
    });
  }

  render() {
    const classes = useStyles.bind();
    const { isSentence, chipData} = this.state;
    const {row} = this.props;
 
      return(
          <div>
            {/* 발화자 발화내용 start */}
             <Paper className = {classes.root} elevation ={3} style={{marginTop: 10, }}>

                <Grid container spacing = {1} item sm={12} > 
                    
                    <Grid item sm = {1} 
                      direction="column"
                      justify="space-between"
                      alignItems="flex-start">
                      <Typography style={{ marginTop: 25, marginLeft: 20 }} >{row.brdno}</Typography>
                    </Grid>
                      
                    <Grid item sm = {2} direction="row" justify="flex-start" alignItems="flex-start" container>
                        <TextField
                            id="standard-read-only-input"
                            label="발화인"
                            value={row.talker}
                            className={classes.textField}
                            style={{ margin: 8, marginLeft: 20}}
                            margin="normal"
                            variant="filled"
                            InputProps={{
                                readOnly: true,
                                }}
                            onClick={this.handleSelectRow}
                            />

                          <Typography variant="h6"  style={{ marginTop: 5, marginLeft: 80, }} >{row.analysisType}</Typography>

                      </Grid> 
                      
                  
                  <Grid item sm ={8}>
                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="stretch"
                    >

                      <TextField
                        id="outlined-full-width"
                        label="발화내용"
                        value={row.text}
                        className={classes.textField}
                        style={{ margin: 8 }}
                        margin="normal"
                        variant="filled"
                        InputProps={{
                            readOnly: true,
                            }}
                        onClick={this.handleSelectRow}

                       />           
                      </Grid>

                      {/* 분석 태그 start */}
                      <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch"
                        >  
                        <TalkerChips chipData={chipData}/>
                      </Grid>
                      {/* 분석태그 end */}

                      </Grid>
                  
                    <Grid item sm={1}
                      
                      container
                      direction="column"
                      justify="flex-end"
                      alignItems="center"
                    >
                      <Button variant="contained" color="primary" style={{ margin: 10 , padding: 5}} onClick={this.handleRemove}>
                        X
                      </Button>

                      <Button variant="outlined" color="primary" style={{padding: 5}} onClick={this.handleSentenceClick}>
                        {isSentence ? '닫기' : '분석상세보기'}
                      </Button>

                    </Grid>

                </Grid>

                {/* 체크1-문장분석결과 */}
                {isSentence &&               
                  <Grid style={{marginTop: 20}}>
                    <SentenceAnalysis/>
                  </Grid>
                }
          
              </Paper>
            {/* 발화자 발화내용 end */}
            
             </div>

      );
  }
}

export default TalkerItem;