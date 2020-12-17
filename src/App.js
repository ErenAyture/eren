import React, { Component } from 'react';
import logo from './job-svgrepo-com.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { browserHistory } from "react-router-dom";
import history from './history';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
const people_types = [
  {
    value: 'A',
    label: 'Academician',
  },
  {
    value: 'E',
    label: 'Employer',
  },
  {
    value: 'JS',
    label: 'Job Seeker',
  },
  {
    value: 'U',
    label: 'Which type of user ?',
  }
];
class App extends Component {
  
  login() {
    
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to HERA</h1>
        <h2>Login</h2>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" disableElevation component={Link} to="/Profile" >
          Login
        </Button>
        <br></br>
        <h2>Signup</h2>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          id="standard-select-currency-native"
          select
          label="User Type"
          value={people_types}
          
          helperText="Please select your user type"
        >
          
        </TextField>
        <Button variant="contained" color="primary" disableElevation>
          Sign up
        </Button>
      </header>
    </div>
    );
  }
}

export default App;