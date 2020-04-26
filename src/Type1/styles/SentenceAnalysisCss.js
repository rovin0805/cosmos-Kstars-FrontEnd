import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
    },
    table: {
    minWidth: 650
    
    }
    });
    
    export default withStyles(styles);