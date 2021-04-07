import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      marginTop: '2%',
      width: '80%',
      marginLeft: '7%',
      display: 'flex',
      justifyContent: 'center'
    },
   
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    tableUsers:{
      width:'100%',
      height:'100%'
    },
    addUser:{
      float: 'right',
    }
  });
  
  export default useStyles;