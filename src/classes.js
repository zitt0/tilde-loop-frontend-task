import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    minHeight: '100vh',
    background: '#fafafa',
    backgroundSize: "400% 400%",
    overflowX: 'hidden',
    overflowY: 'hidden',
    fontFamily: 'Lato, sans-serif',

    [theme.breakpoints.down('md')]: {
      overflowX: 'scroll',
    },
  },
  searchWrapper: {
    padding: "0 50px"
  },
  searchBox: {
    paddingLeft: "80px",
    paddingTop: "10px",
    width: "300px",
    height: "80px",
    borderRadius: "5px",
    marginTop: "50px",
    backgroundColor: "lightGray"
  },
  searchButton: {
    padding: "20px"
  },
  movieModal: {
    paddingTop: "10px",
    paddingLeft: "15px",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  movieCardRoot: {
    minWidth: 275,
    marginTop: "15px"
  },
  movieCardBullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  movieCardTitle: {
    fontSize: 18,
  },
  movieCardPos: {
    marginBottom: 12,
  },
}));

export {useStyles};