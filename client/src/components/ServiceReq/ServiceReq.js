import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    Link,
    Switch,
    BrowserRouter as Router,
    Route,
    useHistory,
    Redirect
  } from "react-router-dom";

  const useStyles = makeStyles((theme) => ({
    textBoxes: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        backgroundColor: "white",
        justifyContent: "spaceBetween"
      },
    },
    textBoxContainer: {
        backgroundColor: "white"
    },
  }));

  export default function ServiceReq(){
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <div>
            <div>
                <Typography variant="h3">Request Service</Typography>
                <div>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Request New Service
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Request New Service</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Enter the information of the requested project.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Vessel Name"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="IMO Number"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Service Type"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Entry By"
                            type="email"
                            fullWidth
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Add
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div className={classes.textBoxContainer}>
                <form className={classes.textBoxes} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Vessel Name" variant="outlined"/>
                    <TextField id="outlined-basic" label="IMO Number" variant="outlined" />
                    <TextField id="outlined-basic" label="Service Type" variant="outlined" />
                    <TextField id="outlined-basic" label="Entry By" variant="outlined" />
                </form>
            </div>
        </div>
    )
  }