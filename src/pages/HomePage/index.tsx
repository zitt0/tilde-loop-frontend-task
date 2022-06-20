import React, { useState } from 'react';
import { Box, Button, Grid, Modal, TextField, Typography } from '@material-ui/core';
import { config } from "../../config"
import MovieCard from "../MovieCard"
import { useStyles } from '../../classes';

const HomePage = () => {
  const classes: any = useStyles();

  return (
    <div className={classes.searchWrapper}>
      <Modal
        open={false}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.movieModal}>
          <Typography className={classes.movieCardTitle} color="textSecondary" gutterBottom>
            Title: Placeholder title
          </Typography>
        </Box>
      </Modal>

      <Typography variant="h5" align="left">Test Movie Search</Typography>
      <Grid container justify="center">
        <div className={classes.searchBox}>
          <TextField
            id="outlined-name"
            label="Movie Title"
            value="Placeholder Val"
            onChange={() => {}}
          />
          <Button variant="text" size="small" className={classes.searchButton}>Search</Button>
        </div>
      </Grid>
    </div>
  )
}

export default HomePage