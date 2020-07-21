import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    btn: {
      marginTop: theme.spacing(1),
      alignItems: 'center',
      flexDirection: 'row',
      display: 'flex',
    },
    tagTitle: {
      marginRight: 20,
    },

    
  }));

  export default useStyles;