import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import LockIcon from '@material-ui/icons/Lock';
import ListIcon from '@material-ui/icons/List';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const productName='Alli';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src=""
          className={classes.curvyLines}
          alt="background image"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <LockIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Your Confidentiality
              </Typography>
              <Typography variant="h5">
                {'Your answers will not be stored, and our organization will never '}
                {'share your usage data with any other party.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ListIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Your Choices
              </Typography>
              <Typography variant="h5">
                {'No legal jargon and no surprises. Once you select your timeframe, '}
                {`${productName} will connect you with relevant resources, sorted by priority and urgency.`}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <EmojiObjectsIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Your Decisions
              </Typography>
              <Typography variant="h5">
                {`${productName} will never automatically submit information or `}
                {'contact any resource on your behalf. You control your journey.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
