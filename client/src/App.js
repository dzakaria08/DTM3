import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
//if withAuthenticator doesnt work try:
//import {withAuthenticator} from 'aws-amplify-react';

import { Route, Switch, Redirect  } from 'react-router-dom';
import Signup from "./views/Signup/Signup"
import Login from "./views/Login/Login"
// import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import Amplify, { Auth, API, graphqlOperation}  from 'aws-amplify';
import awsconfig from './aws-exports';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Link,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import Button from '@material-ui/core/Button';

import Sidebar from './components/Sidebar'
import Home from './components/Home'
import AuthWrapper from './AuthWrapper'
import { Authenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

// const client = new AWSAppSyncClient({
//   url: awsconfig.aws_appsync_graphqlEndpoint,
//   region: awsconfig.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//     jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
//   },
// });

Amplify.configure({
  Auth: {

    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
    // Required only if it's different from Amazon Cognito Region
    // identityPoolRegion: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_3LuoYnYn0',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '7qlmsskb2g9r3uajkf8dvrpra9',

    // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
    // clientMetadata: { myCustomKey: 'myCustomValue' },

     // OPTIONAL - Hosted UI configuration
    oauth: {
        domain: 'your_cognito_domain',
        scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'http://localhost:3000/',
        redirectSignOut: 'http://localhost:3000/',
        responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
}
});
//to get the current config object 
const currentConfig = Auth.configure();

const poolData = {    
  UserPoolId : "us-east-2_3LuoYnYn0", // Your user pool id here    
  ClientId : "7qlmsskb2g9r3uajkf8dvrpra9" // Your client id here
  }; 
  const pool_region = 'us-east-2';
  
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

async function signOut() {
  try {
      await Auth.signOut({global: true});
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

const App = () => {
  return (
  // <div>
    //   <AmplifySignOut>My App</AmplifySignOut>
    //   <div>
    //     <Button onClick={signOut} variant="outlined">
    //     Log Out
    //     </Button>        
    //   </div>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/home" component={Home} />
    //     <Route exact path="/">
    //       <Redirect to="/home" />
    //     </Route>
    //     {/* <Route exact path="/signup" component={Signup} />
    //     <Route exact path="/login" component={Login} /> */}
    //     <Route expact path="/Project" component={Sidebar} />
    //     <Route component={NotFound}/>
    //   </Switch>
    // </div>
    <div className="App">
      <header className="App-header">
        {/* <Authenticator hideDefault={true} amplifyConfig={awsconfig}>
          <AuthWrapper />
        </Authenticator> */}
      </header>
      <Switch>
         <Route exact path="/home" component={Home} />
         <Route exact path="/">
           <Redirect to="/home" />
         </Route>
         <Route exact path="/signup" component={Signup} />
         <Route exact path="/login" component={Login} />
         <Route expact path="/Project" component={Sidebar} />
         <Route component={NotFound}/>
       </Switch>
    </div>
  );
}
// export default App;
export default withAuthenticator(App);
