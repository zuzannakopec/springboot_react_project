import './App.css';
import { TextField, Button, ButtonGroup } from '@mui/material';

function Form() {
  return (
    <div className="App">
      <header className="App-header">
       <TextField id="outlined-basic" label="Login" variant="outlined"  margin="dense"/>
       <TextField id="outlined-basic" label="Hasło" variant="outlined"  margin="dense"/>
       <ButtonGroup >
            <Button variant="contained"color="success">ZALOGUJ</Button>   
            <Button variant="contained"color="secondary">ZAREJESTRUJ</Button>
       </ButtonGroup>
      </header>
    </div>
  );
}

export default Form;
