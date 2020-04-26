import React, {Component} from 'react';
import useStyles from './styles/TalkerChipsCss';
import Paper from '@material-ui/core/Paper';

class TalkerChips extends Component {

  render(){
    const classes = useStyles.bind();
    const {chipData} = this.props;
    console.log("TalkerChip로 넘어온 분석 결과",chipData);
        return (
      <div>

        <Paper className={classes.root}>
            {chipData}
        </Paper>

      </div>
    )
  }
}
export default TalkerChips;