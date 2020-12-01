import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
    Link,
    Switch,
    BrowserRouter as Router,
    Route,
    useHistory,
    Redirect
  } from "react-router-dom";
import OpenProj from './../OpenProj/OpenProj'
import OpenProj1 from './../OpenProj/OpenProj1'

const useStyles = makeStyles((theme) => ({
    root: {
        float: "left",
    },
    head: {
        //marginLeft: "25px"
    },
    listContainer: {
        //marginLeft: "25px",
        marginRight: "100px",
        height: "250px",
        marginTop: "10px",
        backgroundColor: "white",
        width: "100%",
    },
    listText: {
        textDecoration: 'none',
        color: 'inherit',
    }
})) 

export default function Projects() {
    const classes = useStyles()
    const theme = useTheme()

    return(
        <div>
            <Router>
                <div className={classes.head}>
                    <Typography variant="h3">Projects</Typography>
                </div>
                <div className={classes.listContainer}>
                    <List style={{maxHeight: '100%', overflow: 'auto',}}>
                        {['Project0', 'Project1', 'Project2', 'Project3', 'Project4', 'Project5', 'Project6'].map((text) => (
                            <Link to={`/Projects/${text}`} className={classes.listText}>
                                <ListItem button key={text}>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </div>
                <Switch>
                    <Route exact path={`/Projects/Project0`} exact component={OpenProj} />
                    <Route exact path={`/Projects/Project1`} exact component={OpenProj1} />
                </Switch>
            </Router>
        </div>
    )
}



