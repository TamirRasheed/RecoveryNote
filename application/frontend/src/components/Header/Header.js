import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

// Styles
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#52333d',
  },

  navButton: {
    marginLeft: '2em',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

// Component
const Header = () => {
  const { header, navButton } = useStyles();

  // Desktop View
  const displayDesktop = () => {
    return (
      <Toolbar>
        {teamSixLogo}
        {getMenuButtons()}
      </Toolbar>
    );
  };

  const teamSixLogo = (
    <Typography variant='h6' component='h1'>
      TEAM 1+5
    </Typography>
  );

  // TODO: Change hardcode to dynamic for later milestones
  const getMenuButtons = () => {
    return (
      <Button
        color='inherit'
        to='/about'
        component={RouterLink}
        className={navButton}
      >
        About
      </Button>
    );
  };

  return (
    <header>
      <AppBar position='static' className={header}>
        {displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Header;
