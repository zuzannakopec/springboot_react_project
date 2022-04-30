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
import dwa from './images/dwa.jpg'
import Success from './Success';
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

  export default function SignUpSide() {
  let [error, setError] = React.useState(false)
  const[users,setUsers]= React.useState([])
  let [errormsg, setErrormsg] = React.useState("")
  let [successmsg, setSuccessmsg] = React.useState(false)
  
  React.useEffect(()=>{
     fetch("http://localhost:8080/user/getAll")
    .then(res=>res.json()
    )
    .then((result)=>{
      setUsers(result);
      console.log(users)
    }
  )
  },[])

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      let email = data.get('email')
      let password = data.get('password')
      let second_password = data.get('password2')

      if(password != second_password){
          setErrormsg("Podane hasła nie są identyczne")
          setError(true)
          return
      }
      const user={email, password, accessLevel: 2}
      
      fetch("http://localhost:8080/user/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)

    }).then((res)=>{
      if(res.status != 409)
        setSuccessmsg(true)
      else{
        setErrormsg("Wprowadzono nieprawidłowe dane")
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
              backgroundImage:  `url(${dwa})`,
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
            >  <Typography component='h1'variant="h4" >Twój lekarz</Typography>
            <br/><br/>
              <Avatar sx={{ m: 1, bgcolor: '#e040fb' }}>

              </Avatar>

              {error? <Error msg={errormsg}/>:<></>}

              <Typography component="h1" variant="h5">
                Zarejestruj się
              </Typography>
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
          <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password2"
                  label="Powtórz hasło"
                  type="password"
                  id="password2"
                  autoComplete="current-password"
                />
          
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ZAREJESTRUJ
                </Button>

                {successmsg?<Success/>:<></>}
                <Grid container>
        
                  <Grid item>
                    <Link href="/SignIn" variant="body2">
                      {"Masz już konto? Zaloguj się!"}
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