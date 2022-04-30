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


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Twój lekarz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function User() {
    let {state} = useLocation()
    const[items,setItems]= React.useState([])
    console.log(state)

    React.useEffect(()=>{
        fetch("http://localhost:8080/item/getAll")
       .then(res=>res.json()
       )
       .then((result)=>{
         setItems(result);
         console.log(items)
       }
     )
     },[])



  return (
  
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '120vh' }} justify="space-between">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={0.2}
          
        />
        <Grid item xs={1} sm={1} md={2} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography>Witaj, {state.email}</Typography>
            <br/><br/>
            <Logout/>
              <Copyright sx={{ mt: 5 }} />
           
          </Box>
    

        </Grid>

        <Grid item xs={7} sm={7} md={9.5} component={Paper} elevation={2} square>
        <Box component="form"  sx={{ mt: 6 }}>
               
        <Grid container  direction="column">
       
       {
           items.map((item)=>{
               return(
                <Grid item>
                    <ItemCard item={item} />
                    <br/>
      <br/>
      <br/>
                </Grid>
                )
           })

       }
                
               </Grid>
     
             </Box>
             </Grid>
      </Grid>
    </ThemeProvider>
  );
}