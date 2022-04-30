import './App.css';
import { TextField, Button, ButtonGroup } from '@mui/material';
import {  useNavigate } from 'react-router';

function Logout() {
    let navigate = useNavigate()

  return (
    <Button  size="small"  variant="contained" color="secondary" onClick={()=>{navigate("/")}}>Wyloguj się</Button>
  )
}

export default Logout;
