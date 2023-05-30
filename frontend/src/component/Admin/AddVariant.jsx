import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import StorageIcon from "@material-ui/icons/Storage";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HeightIcon from '@mui/icons-material/Height';

import {useState} from "react"



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  display: 'inline-block',
  marginBottom: '1rem',
  '& svg': {
    marginRight: '1rem',
  },
  '& input': {
    flex: '1',
    padding: '0.5rem',
    fontSize: '1rem',
  },
};

const AddVariant = ({ open, setOpenModal,variant, setVariant }) => {
//   const handleClose = () => setOpen(false);

const [variantItem, setVariantItem]=useState({
  price:0,
  mm:0,
  Stock:0
}) 
    

  const handleClick = () => {
    setOpenModal(false);
    setVariant([...variant,variantItem ]);
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setVariantItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={inputStyle}>
            <HeightIcon />
            <input type="number" placeholder="Product Size" name="mm"  onChange={handleChange} />
          </div>
          <div style={inputStyle}>
            <AttachMoneyIcon />
            <input type="number" placeholder="Product Price"  name="price"  onChange={handleChange} required />
          </div>
          <div style={inputStyle}>
            <StorageIcon />
            <input type="number" placeholder="Stock"  name="Stock"  onChange={handleChange}required />
          </div>
       
          <Button onClick={handleClick} id="createProductBtn">
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddVariant;