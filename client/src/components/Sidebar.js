import React, { Component } from 'react';
import clsx from 'clsx';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';
import FolderIcon from '@material-ui/icons/Folder';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info'
import PersonIcon from '@material-ui/icons/Person'
import {
  Link,
  Switch,
  BrowserRouter as Router,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Guests from './Guests/Guests';
import Info from './Info/Info';
import Account from './Account/Account';
import ServiceReq from './ServiceReq/ServiceReq'

//width of drawer
const drawerWidth = 240;

//styles for html

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: "auto",
    background: "lightBlue",
  },
  page: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  accountButton: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listText: {
    textDecoration: 'none',
    color: 'inherit',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

//sidebar
function Sidebar() {  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  async function signOut() { 
      try {
          await Auth.signOut({global: true});
          this.props.onStateChange("signedOut", {});
      } catch (error) {
          console.log('error signing out: ', error);
      }
    }

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <CssBaseline />
          <Redirect to="/Hub/Projects"/>
          <AppBar
            color=''
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Digital Twin Marine
              </Typography>
              
              <IconButton
                color="inherit"
                aria-label="account button"
                edge="start"
                className={classes.accountButton}
                onClick = {signOut}
              >
                <Link to={'/home'}>
                <PersonIcon />
                </Link>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {['Projects', 'ServiceRequest', 'Contact', 'Info'].map((text, index) => (
                <Link to={`/Hub/${text}`} className={classes.listText}>
                  <ListItem button key={text}>
                    <ListItemIcon>{index === 0 ? <FolderIcon /> : index === 1 ? <PeopleIcon /> : index === 2 ? <QuestionAnswerIcon /> : <InfoIcon />}</ListItemIcon>
                    <ListItemText primary={text}/>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
                <Switch>
                  <Route path={`/Hub/Projects`} component={Projects} />
                  <Route exact path={`/Hub/ServiceRequest`} component={ServiceReq} />
                  <Route exact path={`/Hub/Contact`} component={Contact} />
                  <Route exact path={`/Hub/Info`} component={Info} />
                  <Route exact path={`/Hub/Account`} component={Account} />
                </Switch>
          </main>
      </div>
    </div>
  );
}

export default withAuthenticator(Sidebar)