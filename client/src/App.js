import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Signup from "./views/Signup/Signup"
import Login from "./views/Login/Login"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

Amplify.configure({
  Auth: {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
    // Required only if it's different from Amazon Cognito Region
    // identityPoolRegion: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_v4D4DkIII',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '6e4qtivu75p7o3id9kl09c0osp',

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
  UserPoolId : "us-east-2_v4D4DkIII", // Your user pool id here    
  ClientId : "6e4qtivu75p7o3id9kl09c0osp" // Your client id here
  }; 
  const pool_region = 'us-east-2';
  
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const App = () => {
  return (
    <div>
      <AmplifySignOut>My App</AmplifySignOut>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default withAuthenticator(App);
