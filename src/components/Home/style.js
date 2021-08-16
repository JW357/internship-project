/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  headerCourses: {
    textAlign: 'center',
  },
  blueElementSmall: {
    content: ' ',
    position: 'absolute',
    width: '130px',
    height: '200px',
    borderRadius: '0 0 40px 0',
    background: '#B2E3FF',
  },
  blueElementBig: {
    content: ' ',
    position: 'absolute',
    width: '800px',
    height: '649px',
    borderRadius: '0 0 0 10%',
    background: '#B2E3FF',
    zIndex: '-2',
    left: '1033px',
    bottom: '300px',
  },
});