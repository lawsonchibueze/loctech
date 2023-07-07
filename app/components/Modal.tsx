import * as React from 'react';
import { Box, Button, Grid, IconTypeMap, Modal, Typography } from '../lib/mui';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps{
    title : string
    description : string
    icon : React.ReactNode
    color: string
    open: boolean
    handleClose  : ()=> void
}


export default function BasicModal({title, description , icon, color, open, handleClose}: BasicModalProps) {
 

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container item direction="row">
                <Grid
                  container
                  item
                  xs={1}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                {icon}
                </Grid>

                <Typography
                  id="modal-modal-title"
                  variant="h2"
                  component="h2"
                  color={color}
                >
                 {title}
                </Typography>
              </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} fontWeight="bold" fontSize="20px" color={color}>
            {description}
          </Typography>
        </Box>
      </Modal>
    
  );
}
