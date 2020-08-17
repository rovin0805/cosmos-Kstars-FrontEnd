import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
      //padding: theme.spacing(3, 2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    paper: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(1),
      height: 1356
    }
  
  }));

  export default makeStyles(useStyles);