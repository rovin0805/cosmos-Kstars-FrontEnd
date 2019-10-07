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

  state = {

    chipData: [
      
      { key: 0, label: '코스모스 + NNG' },
      { key: 1, label: '는 + JX' },
      { key: 2, label: '가을 + NNG' },
      { key: 3, label: '에 + JKB' },
      { key: 4, label: '피 + VV' },
      { key: 5, label: '어요 + EF' },
    ],

  }

  render(){
    const classes = useStyles.bind();
    const {chipData} = this.state;

    return (

      <div>

        <Paper className={classes.root}>
          {chipData.map(data => (
                <Chip
                  key={data.key}
                  label={data.label}
                  className={classes.chip}
                  
                />
              
            ))}
        </Paper>

      </div>
    )
  }
}
export default TalkerChips;