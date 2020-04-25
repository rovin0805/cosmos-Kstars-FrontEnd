import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

/*
TalkerChips컴포넌트

python API 연결시켜서 chip으로 뽑아내는 부분.
*/


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

class TalkerChips extends Component {

  render(){
    const classes = useStyles.bind();
    const {chipData} = this.props;
    console.log("TalkerChip로 넘어온 분석 결과",chipData);
        return (
      <div>

        <Paper className={classes.root}>
          {/*직렬화 해서 데이터 보여주기 해야함*/}
            {chipData}
        </Paper>

      </div>
    )
  }
}
export default TalkerChips;