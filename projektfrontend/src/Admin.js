import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { Button, Card } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router';
import ItemCard from './ItemCard';
import Logout from './Logout';
import AddItem from './AddItem';

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

const handleDelet = (id) =>{
    console.log(id)
    fetch("http://localhost:8080/item/deleteItem/"+id,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},

      }      )
      window.location.reload()
}


export default function Admin() {
    let {state} = useLocation()
    const[items,setItems]= React.useState([])
    let [addWindow, setAddWindow] = React.useState(false)

    React.useEffect(()=>{
        fetch("http://localhost:8080/item/getAll")
       .then(res=>res.json()
       )
       .then((result)=>{
         setItems(result);

       }
     )
     },[])



  return (
  
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '140vh' }} justify="space-between">
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


            {addWindow?<AddItem/>:<></>}

            <Typography>Witaj, {state.email}</Typography>
            <br/><br/>
            <Button variant="contained" color="success" align="right" onClick={()=>setAddWindow(true)}>Dodaj rekord</Button>
            <br/>
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
                <Grid>
                <Grid item md={12} sx={{ width: '185vh' }}>
                    <Button variant="contained" color="error" align="right" onClick={()=>handleDelet(item.id)}>USUŃ</Button>
                </Grid>
                <Grid item  sx={{ width: '97vh' }}>
                    <ItemCard item={item} />          
                    <br/>
                    <br/>
                    <br/>
                </Grid>
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