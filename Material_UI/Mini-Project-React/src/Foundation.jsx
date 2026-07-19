import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';

import './App.css'

function Foundation() {
  let handleClick = (e) => {
    alert('Button Clicked ' + e.target.innerText)
  }
  return (
    <>
      <h3> Material-UI Demo: Basic Button</h3>
      <Button variant="contained" color='success' onClick={handleClick} >Contained</Button>&nbsp;
      <Button variant="outlined" color="primary" size='small' onClick={handleClick} >Outlined</Button>&nbsp;
      <Button variant="text" onClick={handleClick} disabled>Text</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={handleClick}>
        Delete
      </Button>
      <Alert severity="error">This is an error alert</Alert>
    </>
  )
}

export default Foundation
