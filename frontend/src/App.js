import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Main from './components/Main';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
    backgroundImage: 'linear-gradient(#4880ec, #3f51b5)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Main></Main>
    </div>
  );
}

export default App;
