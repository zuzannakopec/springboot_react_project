import './App.css';
import {  Modal, Box, Typography, TextField, Button} from '@mui/material';
import * as React from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
const handleSubmit= (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    let name = data.get('name')
    let spec = data.get('spec')
    let img = ""
    let adres = data.get('adres')
    let tel = data.get('tel')

    const item = {name, img, tel, spec, adres}
    fetch("http://localhost:8080/item/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(item)
      })
      window.location.reload()
}

 

function AddItem() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

  return (
    
    <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}component="form" noValidate onSubmit={handleSubmit}>
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Imię i nazwisko"
                  name="name"
                  autoFocus
                />
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="spec"
                  label="Specjalizacja"
                  name="spec"


                />
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="adres"
                  label="Adres"
                  name="adres"


                />
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="tel"
                  label="Numer telefonu"
                  name="tel"

                />
                   <Button variant="contained"  type="submit" color="success" align="right">Dodaj rekord</Button>
            </Box>
    </Modal>
  );
}

export default AddItem;
