import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../graphql/mutations';
import {
    Link,
    Switch,
    BrowserRouter as Router,
    Route,
    useHistory,
    Redirect
  } from "react-router-dom";
  
const useStyles = makeStyles((theme) => ({
    root: {
        //marginLeft: "25px",
        marginRight: "100px",
        height: "250px",
        marginTop: "20px",
        width: "100%",
    },
})) 

export default function OpenProj() {
const classes = useStyles()
const [open, setOpen] = React.useState(false);

const newGuest = {
    projectId: "5c952eac-3944-43f0-99c4-adb50c79ee80",
    ownerId: "owner444",
    guest: "guest@gmail.com"
};

var state = { guests: [] }
async function addGuest() {
    try{
        const newGuestAdded = await API.graphql(graphqlOperation(mutations.addGuestToProject, {input: newGuest}));
        const guests = newGuestAdded.data.mutations.guests
        this.setState({guests})
    } catch(err){
        console.log('ADD GUEST error: ', err)
    }
}
const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div className={classes.root}>
            <div style={{marginTop: "20px"}}>
                <Typography variant="h4">Details</Typography>
            </div>
            <div style={{backgroundColor: "white"}}>
                <Typography variant="h4">IMO Number</Typography>
                <Typography variant="h4">Service Type</Typography>
                <Typography variant="h4">Technician</Typography>
            </div>
            <div style={{marginTop: "20px"}}>
                <Typography variant="h4">3D Model</Typography>
            </div>
            <div style={{height: "750px", padding: "20px", backgroundColor: "white"}}>
                <iframe allowfullscreen frameborder='0' height='100%' src='https://players.cupix.com/embed.html?key=pwx2TV6O&amp;key=pwx2TV6O' width='100%'></iframe>
            </div>
            <div style={{marginTop: "20px"}}>
                <Typography variant="h4">Files</Typography>
            </div>
            <div style={{backgroundColor: "white", height: "300px", marginBottom: "20px"}}>
                <List style={{maxHeight: '100%', overflow: 'auto',}}>
                    {['DroneShot0', 'DroneShot0', 'DroneShot0', 'DroneShot0', 'DroneShot0', 'DroneShot0', 'DroneShot0'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
            <div style={{marginTop: "20px"}}>
                <Typography variant="h4">Guests List</Typography>
                <div>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Guest
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Guest</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Enter the email of the guest you wish to add to this project.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose, addGuest()} color="primary">
                        Add
                    </Button>
                    </DialogActions>
                </Dialog>
                </div>
                
            </div>
            <div style={{backgroundColor: "white", height: "300px", marginBottom: "20px"}}>
                <List style={{maxHeight: '100%', overflow: 'auto',}}>
                    {['Guest0', 'Guest1', 'Guest2', 'Guest3', 'Guest4', 'Guest5', 'Guest6'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    )
}