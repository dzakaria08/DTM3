import React, { Component } from "react";
import Amplify, { Auth } from 'aws-amplify';
import logo from "./assets/logo.svg";

export class InternalApp extends Component {
    constructor(props) {
        super(props);
        this._validAuthStates = ["signedIn", "signedOut", "signedUp"];
        this.signOut = this.signOut.bind(this);
        this.state = {};
      } 

    async signOut() { 
        try {
            await Auth.signOut({global: true});
            this.props.onStateChange("signedOut", {});
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    render() {
        // if (this.props.authState === "signedIn") {
        return (
            <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Internal Application behind Login</p>
            {/* <button onClick={this.signOut()}>Logout</button> */}
            </>
        );
        {/* } else {
        return null;
        } */}
    }
}