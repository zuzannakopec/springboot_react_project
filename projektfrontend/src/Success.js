import './App.css';
import {  Modal, Box, Typography} from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
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


function Success() {
    let navigate = useNavigate()
    
    const [open, setOpen] = React.useState(true);
    const handleClose = () =>{ 
        setOpen(false);
        navigate("/")
    }
  return (
    
    <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Rejestracje
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Rejestracja przebiegła, zaloguj się!
                </Typography>
            </Box>
    </Modal>
  );
}

export default Success;
