import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {
  Link,
  Switch,
  BrowserRouter as Router,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Typography variant="h1">Welcome to the log-in page</Typography>
            <Link to="/Project">
                <Typography variant="paragraph">Projects</Typography>   
            </Link>
        </div>
    );
}