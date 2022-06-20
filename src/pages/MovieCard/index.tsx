import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../classes';

const MovieCard = ({movieProps, modalTrigger}: any) => {
  const classes:any = useStyles()

  return(
    <Card className={classes.movieCardRoot}>
      <CardContent>
        <Typography className={classes.movieCardTitle} color="textSecondary" gutterBottom>
          Title: {movieProps.Title}
        </Typography>
        <Typography className={classes.movieCardPos} color="textSecondary">
          Type: {movieProps.Type}
        </Typography>
        <Typography className={classes.movieCardPos} color="textSecondary">
          Year: {movieProps.Year}
        </Typography>
        <Typography variant="body2" component="p">
          imdbID: {movieProps.imdbID}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => modalTrigger(movieProps.imdbID)}>Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard