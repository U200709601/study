import { Modal } from '@mui/material';
import React from 'react';

export default function BaseModal({ open, setOpen, children, sx }) {
    const handleClose = () => setOpen(false);
  

    return (
      <Modal open={open} onClose={handleClose} sx={sx}>
        <div >
         {children}
        </div>
        
      </Modal>
    );
  }