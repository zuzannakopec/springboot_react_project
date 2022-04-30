import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Error from './Error';
import {  useNavigate } from 'react-router';
import jeden from './images/jeden.jpg'

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

export default function SignInSide() {
  let navigate = useNavigate()
  let [error, setError] = React.useState(false)
  let [errormsg, setErrormsg] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email')
    const password = data.get('password')
    const user = {email, password}
    console.log(user)

    fetch("http://localhost:8080/user/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user),
     

  }).then((res)=>{
    if(res.status == 404){
      setErrormsg("Podany użytkownik nie istnieje")
      setError(true)
    }
    else{
      fetch("http://localhost:8080/user/getAccessLevel",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user),
  }).then((res)=>{
    return res.json()}).then((data)=>{
      console.log(data)
      navigate("/Home", {replace:true, state:{email:user.email, accessLevel: data}}, )
    })
     
    }
  })
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${jeden})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1'variant="h4" >Twój lekarz</Typography>
            <br/><br/>
            <Avatar sx={{ m: 1, bgcolor: '#9575cd' }}>

            </Avatar>
            <Typography component="h1" variant="h5">
              Zaloguj się
            </Typography>
            
            {error? <Error msg={errormsg}/>:<></>}

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adres email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                id="password"
                autoComplete="current-password"
              />
         
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ZALOGUJ
              </Button>
              <Grid container>
       
                <Grid item>
                  <Link href="SignUp" variant="body2">
                    {"Nie masz jeszcze konta? Zarejestruj się!"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}