import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router';
import ItemCard from './ItemCard';
import Logout from './Logout';
import User from './User';
import Admin from './Admin';


const theme = createTheme();


export default function Home() {
let {state} = useLocation()
  return(
      
    <ThemeProvider theme={theme}>
      {state.accessLevel==2?<User/>:<Admin/>}
      </ThemeProvider>
  )
}