import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from './Typography';

const SCHOOLS = [
  {
    fullName: 'University of Virginia',
    shortName: 'UVA'
  },
  {
    fullName: 'Virginia Tech',
    shortName: 'VT'
  },
  {
    fullName: 'Piedmont Virginia Community College',
    shortName: 'PVCC'
  },
  {
    fullName: 'Virginia Commonwealth University',
    shortName: 'VCU'
  },
  {
    fullName: 'Old Dominion University',
    shortName: 'ODU'
  },
  {
    fullName: 'James Madison University',
    shortName: 'JMU'
  },
  {
    fullName: 'Liberty University',
    shortName: 'LU'
  },
  {
    fullName: 'William and Mary',
    shortName: 'W&M'
  },
  {
    fullName: 'University of Richmond',
    shortName: 'UR'
  },
  {
    fullName: 'American University',
    shortName: 'American'
  },
  {
    fullName: 'Georgetown University',
    shortName: 'Georgetown'
  },
  {
    fullName: 'Washington and Lee University',
    shortName: 'W&L'
  },
  {
    fullName: 'Virginia Military Institute',
    shortName: 'VMI'
  },
  {
    fullName: 'Radford University',
    shortName: 'RU'
  }
]

const styles = theme => ({
  background: {
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

function SchoolSelector(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Choose your school to see all of your options.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleClickOpen}
      >
        School Selector
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
      >
        <DialogTitle>Which school do you attend?</DialogTitle>
        <DialogContent dividers={true}>
          <List>
            {SCHOOLS.map(school => (
              <ListItem button key={school.shortName}>
                <Link to={"/"+school.shortName}>
                  <ListItemText primary={school.fullName} />
                </Link>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button>This action</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(SchoolSelector);
