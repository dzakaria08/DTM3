//import { render } from '@testing-library/react';
import React from 'react';
import './Contact.css';
import Button from '@material-ui/core/Button';

export default function Contact() {
    function handleChange(e){
        console.log(e.target.value)
    }
        return (
            <React.Fragment>
            <h1>Contact Us</h1>
           <input
               class="text-box"
               type="text"
               placeholder={''}
               onChange={handleChange}
            />
            <Button variant="outlined" color="primary">
                Send
            </Button>
            </React.Fragment>
        );
}