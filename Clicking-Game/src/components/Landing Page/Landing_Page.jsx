import styles from './Landing-Page.module.css';
import { useState } from 'react';
// import React from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import HomePage from '../HomePage/HomePage';

const Landing_Page = ({toggle}) => {
  const [open, setOpen] = useState(false);

  const setClickOpen = () => {
    setOpen(true);
  }

  const setClickClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <div className={styles.elements}>
        <div className={styles.image}>
          <img className={styles.click} src='/images/Hand-pointer-clicking-icon.png' alt='Clicking Image' onClick={setClickOpen} />
        </div>
        <div className={styles.head}>
          <h1 className={styles.title}>The Game of Clicks</h1>
        </div>
        <div className={styles.but}>
          <button onClick={setClickOpen} className={styles.playBut}>Play</button>
        </div>
        <Dialog 
        open={open}
        onClose={setClickClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
          },
        }}
        >
          <DialogTitle> Enter Player Names </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the names of Player 1 and Player 2 here:
            </DialogContentText>
            <TextField 
            autoFocus
            required
            margin="dense"
            id="Player 1"
            name="Name of Player 1"
            label="Name of Player 1"
            type="text"
            fullWidth
            variant="standard"
            />
            <TextField 
            autoFocus
            required
            margin="dense"
            id="Player 2"
            name="Name of Player 2"
            label="Name of Player 2"
            type="text"
            fullWidth
            variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={setClickClose}>Go Back</Button>
            <Button type="submit" onClick={toggle}>Enter Game</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default Landing_Page
