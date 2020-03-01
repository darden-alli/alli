import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import SchoolSelector from '../components/schoolSelector';
import backgroundImage from '../../../../images/journey.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {props.mainText}
      </Typography>
      {useLocation().pathname === '/' ? <SchoolSelector /> : null}
      <Typography variant="body2" color="inherit" className={classes.more}>
        {props.secondaryText}
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.defaultProps = {
  mainText: "We're here for you",
  secondaryText: "Discover the experience"
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
